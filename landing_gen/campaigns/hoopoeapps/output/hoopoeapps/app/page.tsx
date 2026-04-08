'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// ── Config ──────────────────────────────────────────────────────────────
const COLLECTOR_URL = process.env.NEXT_PUBLIC_COLLECTOR_URL || ''
const PRODUCT_NAME = process.env.NEXT_PUBLIC_PRODUCT_NAME || 'HoopoeApps'
const PRODUCT_SLUG = process.env.NEXT_PUBLIC_PRODUCT_SLUG || 'hoopoeapps'
const CAMPAIGN_SLUG = process.env.NEXT_PUBLIC_CAMPAIGN_SLUG || 'hoopoeapps_launch'
const PAGE_VARIANT_ID = process.env.NEXT_PUBLIC_PAGE_VARIANT_ID || '00000000-0000-0000-0000-000000000000'
// Replace with your Base44 affiliate tracking URL from your affiliate dashboard
const BASE44_AFFILIATE_URL = process.env.NEXT_PUBLIC_BASE44_AFFILIATE_URL || 'https://base44.com'
const PAGE_VERSION = 'v1'
const PAGE_VARIANT = 'default'

// ── Analytics ─────────────────────────────────────────────────────────────
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    hj?: (...args: unknown[]) => void
  }
}

function trackEvent(name: string, params?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') window.gtag('event', name, params ?? {})
  if (typeof window.hj === 'function') window.hj('event', name)
}

// ── Collector ────────────────────────────────────────────────────────────
interface FallbackAttrs {
  page_variant_id: string
  product_name: string
  product_slug: string
  campaign_slug: string
  page_version: string
  page_variant: string
  referrer?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  user_agent?: string
  landing_url?: string
}

async function registerSession(): Promise<string | null> {
  if (!COLLECTOR_URL) return null
  try {
    const params = new URLSearchParams(window.location.search)
    const sessionId = crypto.randomUUID()
    const body = {
      id: sessionId,
      page_variant_id: PAGE_VARIANT_ID,
      product_name: PRODUCT_NAME,
      product_slug: PRODUCT_SLUG,
      campaign_slug: CAMPAIGN_SLUG,
      page_version: PAGE_VERSION,
      page_variant: PAGE_VARIANT,
      referrer: document.referrer || undefined,
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      utm_content: params.get('utm_content') || undefined,
      utm_term: params.get('utm_term') || undefined,
      user_agent: navigator.userAgent,
      landing_url: window.location.href,
    }
    const res = await fetch(`${COLLECTOR_URL}/api/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(`Session POST failed: ${res.status}`)
    const data = await res.json()
    sessionStorage.setItem('_coll_session_id', data.session_id)
    return data.session_id
  } catch {
    const params = new URLSearchParams(window.location.search)
    const fallback: FallbackAttrs = {
      page_variant_id: PAGE_VARIANT_ID,
      product_name: PRODUCT_NAME,
      product_slug: PRODUCT_SLUG,
      campaign_slug: CAMPAIGN_SLUG,
      page_version: PAGE_VERSION,
      page_variant: PAGE_VARIANT,
      referrer: document.referrer || undefined,
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
      utm_content: params.get('utm_content') || undefined,
      utm_term: params.get('utm_term') || undefined,
      user_agent: navigator.userAgent,
      landing_url: window.location.href,
    }
    sessionStorage.setItem('_coll_fallback', JSON.stringify(fallback))
    return null
  }
}

async function submitLead(formData: Record<string, string>): Promise<void> {
  if (!COLLECTOR_URL) return
  const sessionId = sessionStorage.getItem('_coll_session_id')
  const fallbackRaw = sessionStorage.getItem('_coll_fallback')

  let body: Record<string, unknown>
  if (sessionId) {
    body = { session_id: sessionId, action_type: 'join_waitlist', form_data: formData }
  } else if (fallbackRaw) {
    const fallback = JSON.parse(fallbackRaw) as FallbackAttrs
    body = { ...fallback, action_type: 'join_waitlist', form_data: formData }
  } else {
    return
  }

  const res = await fetch(`${COLLECTOR_URL}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(`Lead POST failed: ${res.status}`)
}

// ── Form types ────────────────────────────────────────────────────────────
interface AppForm {
  app_name: string
  app_url: string
  app_description: string
  target_audience: string
  monthly_budget: string
  email: string
}

const EMPTY_FORM: AppForm = {
  app_name: '',
  app_url: '',
  app_description: '',
  target_audience: '',
  monthly_budget: '',
  email: '',
}

const BUDGET_OPTIONS = ['$50–150', '$150–500', '$500+', 'Not sure yet']

// ── Apply Form ─────────────────────────────────────────────────────────────
function ApplyForm() {
  const [form, setForm] = useState<AppForm>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<AppForm>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [globalError, setGlobalError] = useState('')

  function updateField(field: keyof AppForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  function validateField(field: keyof AppForm, value: string): string {
    switch (field) {
      case 'app_name':
        if (!value.trim()) return 'App name is required.'
        if (value.trim().length > 100) return 'App name must be 100 characters or fewer.'
        return ''
      case 'app_url':
        if (!value.trim()) return 'App URL is required.'
        if (!/^https?:\/\/.+/.test(value.trim())) return 'Enter a valid URL (starting with http:// or https://).'
        return ''
      case 'app_description':
        if (!value.trim()) return 'Please describe your app.'
        if (value.length > 1000) return 'Description must be 1,000 characters or fewer.'
        return ''
      case 'target_audience':
        if (!value.trim()) return 'Please describe your target audience.'
        if (value.trim().length > 300) return 'Target audience must be 300 characters or fewer.'
        return ''
      case 'monthly_budget': return value ? '' : 'Please select a budget range.'
      case 'email':
        if (!value.trim()) return 'Email is required.'
        if (value.trim().length > 254) return 'Email address is too long.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.'
        return ''
      default: return ''
    }
  }

  function handleBlur(field: keyof AppForm, value: string) {
    const err = validateField(field, value)
    setErrors((prev) => ({ ...prev, [field]: err }))
  }

  function validate(): boolean {
    const newErrors: Partial<AppForm> = {}
    const fields: (keyof AppForm)[] = ['app_name', 'app_url', 'app_description', 'target_audience', 'monthly_budget', 'email']
    fields.forEach((f) => {
      const err = validateField(f, form[f])
      if (err) newErrors[f] = err
    })
    setErrors(newErrors)
    const firstKey = Object.keys(newErrors)[0] as keyof AppForm | undefined
    if (firstKey && firstKey !== 'monthly_budget') {
      document.getElementById(firstKey)?.focus()
    }
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    setGlobalError('')
    trackEvent('form_submit_attempt')

    try {
      await submitLead({
        app_name: form.app_name.trim(),
        app_url: form.app_url.trim(),
        app_description: form.app_description.trim(),
        target_audience: form.target_audience.trim(),
        monthly_budget: form.monthly_budget,
        email: form.email.trim(),
      })
      setStatus('success')
      trackEvent('generate_lead', { method: 'form' })
    } catch (err) {
      setStatus('error')
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setGlobalError(msg)
      trackEvent('form_error', { error_message: msg })
    }
  }

  return (
    <div className="reveal">
      {status === 'success' ? (
        <div className="form-success">
          <div className="form-success-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 12.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>We&apos;ve received your app.</h3>
          <p>
            We&apos;ll review it and be in touch. In the meantime, if you haven&apos;t launched yet,
            keep building.
          </p>
        </div>
      ) : (
        <form className="apply-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="app_name">
              App name <span className="required">*</span>
            </label>
            <input
              id="app_name"
              type="text"
              className={`form-input${errors.app_name ? ' error' : ''}`}
              placeholder="e.g. TaskFlow"
              value={form.app_name}
              onChange={(e) => updateField('app_name', e.target.value)}
              onBlur={(e) => handleBlur('app_name', e.target.value)}
              autoComplete="off"
              maxLength={100}
              aria-describedby={errors.app_name ? 'err-app_name' : undefined}
            />
            {errors.app_name && <span id="err-app_name" className="form-error" role="alert">{errors.app_name}</span>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="app_url">
              App URL <span className="required">*</span>
            </label>
            <input
              id="app_url"
              type="url"
              className={`form-input${errors.app_url ? ' error' : ''}`}
              placeholder="https://yourapp.com"
              value={form.app_url}
              onChange={(e) => updateField('app_url', e.target.value)}
              onBlur={(e) => handleBlur('app_url', e.target.value)}
              autoComplete="url"
              maxLength={500}
              aria-describedby={errors.app_url ? 'err-app_url' : undefined}
            />
            {errors.app_url && <span id="err-app_url" className="form-error" role="alert">{errors.app_url}</span>}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="app_description">
              What does your app do? <span className="required">*</span>
            </label>
            <textarea
              id="app_description"
              className={`form-textarea${errors.app_description ? ' error' : ''}`}
              placeholder="2–3 sentences. What problem does it solve, and how?"
              value={form.app_description}
              onChange={(e) => updateField('app_description', e.target.value)}
              onBlur={(e) => handleBlur('app_description', e.target.value)}
              rows={3}
              maxLength={1000}
              aria-describedby={[
                errors.app_description ? 'err-app_description' : '',
                'count-app_description',
              ].filter(Boolean).join(' ') || undefined}
            />
            <span
              id="count-app_description"
              className={`form-char-count${form.app_description.length >= 900 ? ' form-char-count--warn' : ''}`}
              aria-live="polite"
            >
              {form.app_description.length}/1000
            </span>
            {errors.app_description && (
              <span id="err-app_description" className="form-error" role="alert">{errors.app_description}</span>
            )}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="target_audience">
              Who is it for? <span className="required">*</span>
            </label>
            <input
              id="target_audience"
              type="text"
              className={`form-input${errors.target_audience ? ' error' : ''}`}
              placeholder="e.g. Freelancers who invoice clients"
              value={form.target_audience}
              onChange={(e) => updateField('target_audience', e.target.value)}
              onBlur={(e) => handleBlur('target_audience', e.target.value)}
              autoComplete="off"
              maxLength={300}
              aria-describedby={errors.target_audience ? 'err-target_audience' : undefined}
            />
            {errors.target_audience && (
              <span id="err-target_audience" className="form-error" role="alert">{errors.target_audience}</span>
            )}
          </div>

          <div className="form-field">
            <label className="form-label">
              Monthly ad budget you&apos;re comfortable with <span className="required">*</span>
            </label>
            <div className="form-radio-group" role="radiogroup" aria-label="Monthly ad budget">
              {BUDGET_OPTIONS.map((option) => (
                <label key={option} className="form-radio-label">
                  <input
                    type="radio"
                    name="monthly_budget"
                    value={option}
                    checked={form.monthly_budget === option}
                    onChange={() => updateField('monthly_budget', option)}
                  />
                  {option}
                </label>
              ))}
            </div>
            {errors.monthly_budget && (
              <span id="err-monthly_budget" className="form-error" role="alert">{errors.monthly_budget}</span>
            )}
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Your email <span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`form-input${errors.email ? ' error' : ''}`}
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              onBlur={(e) => handleBlur('email', e.target.value)}
              autoComplete="email"
              maxLength={254}
              aria-describedby={errors.email ? 'err-email' : undefined}
            />
            {errors.email && <span id="err-email" className="form-error" role="alert">{errors.email}</span>}
          </div>

          {status === 'error' && globalError && (
            <div className="form-global-error" role="alert">
              <span>{globalError}</span>
              <button
                type="button"
                className="form-error-retry"
                onClick={() => { setStatus('idle'); setGlobalError('') }}
              >
                Try again
              </button>
            </div>
          )}

          <div className="form-submit-wrap">
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'loading'}
              onClick={() => status !== 'loading' && trackEvent('cta_click')}
            >
              {status === 'loading' ? 'Submitting…' : 'Submit Your App'}
            </button>
            <span className="form-submit-note">
              We review every submission personally and reach out when we&apos;re ready to onboard your app.
            </span>
          </div>
        </form>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const sessionRegistered = useRef(false)

  // Register session on mount
  useEffect(() => {
    if (sessionRegistered.current) return
    sessionRegistered.current = true
    registerSession()
  }, [])

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Nav ── */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo nav-logo-badge" aria-label="HoopoeApps">
            HoopoeApps
          </a>
          <a
            href="#apply"
            className="btn-nav"
            onClick={() => trackEvent('cta_click')}
          >
            Submit Your App →
          </a>
        </div>
      </nav>

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <span className="section-label hero-anim hero-anim-1">Free ad management for builders</span>
              <h1 className="hero-headline hero-anim hero-anim-2">
                Built a vibe-coded app?<br />
                We&apos;ll run your ads <em>for free.</em>
              </h1>
              <p className="hero-subheadline hero-anim hero-anim-3">
                We set up and manage your Google and Meta ad campaigns.
                You fund the spend. We handle everything else — free.
              </p>
              <div className="hero-cta-group hero-anim hero-anim-4">
                <a
                  href="#apply"
                  className="btn-primary"
                  onClick={() => trackEvent('cta_click')}
                >
                  Submit Your App →
                </a>
                <span className="hero-note">
                  We review every submission personally.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="how">
          <div className="container">
            <div className="how-header reveal">
              <span className="section-label">How it works</span>
              <h2>Three steps from app to audience</h2>
            </div>

            <div className="steps reveal">
              <div className="step">
                <span className="step-number" aria-hidden="true">01</span>
                <h3 className="step-title">Build your app</h3>
                <p className="step-body">
                  Use any vibe coding tool to bring your idea to life. Don&apos;t have an app yet?
                  We recommend Base44 — you can go from idea to live app in a weekend.
                </p>
                <a
                  href={BASE44_AFFILIATE_URL}
                  className="step-link"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => trackEvent('affiliate_link_click', { destination: 'base44' })}
                >
                  Start building on Base44 →
                </a>
              </div>

              <div className="step">
                <span className="step-number" aria-hidden="true">02</span>
                <h3 className="step-title">Submit it to us</h3>
                <p className="step-body">
                  Tell us what your app does and who it&apos;s for. We review every submission personally
                  and reach out when we&apos;re ready to onboard your app.
                </p>
              </div>

              <div className="step">
                <span className="step-number" aria-hidden="true">03</span>
                <h3 className="step-title">We run your campaigns</h3>
                <p className="step-body">
                  We handle strategy, ad copy, targeting, and ongoing optimization.
                  You connect your ad account and decide your budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What&apos;s Included ── */}
        <section className="included">
          <div className="container">
            <div className="reveal">
              <span className="section-label">What you get</span>
              <h2>Everything done — nothing to figure out</h2>
            </div>

            <div className="included-grid reveal">
              <div className="included-col">
                <h3>We handle</h3>
                <ul className="included-list">
                  <li>Campaign strategy tailored to your app</li>
                  <li>Ad copy and creatives</li>
                  <li>Audience targeting setup</li>
                  <li>Ongoing optimization</li>
                  <li>Performance reporting</li>
                </ul>
              </div>

              <div className="included-col">
                <h3>You bring</h3>
                <ul className="included-list">
                  <li>Your app (live URL)</li>
                  <li>Your Google or Meta Ads account</li>
                  <li>Your ad budget — you decide how much</li>
                  <li>15 minutes to brief us</li>
                </ul>
              </div>
            </div>

            <p className="included-statement reveal">
              Our management work is completely free. No retainer, no commission on spend.
            </p>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="team">
          <div className="container">
            <div className="team-layout reveal">
              <div className="team-photo-wrap">
                <Image
                  src="/images/team.jpg"
                  alt="Ofek and Dan, founders of HoopoeApps"
                  width={1200}
                  height={999}
                  className="team-photo"
                  loading="lazy"
                />
              </div>
              <div className="team-content">
                <span className="section-label">Why we&apos;re doing this</span>
                <h2>Two builders on a mission</h2>
                <p className="team-bio-text">
                  We&apos;re Ofek and Dan — both Forbes 30 Under 30, both builders who&apos;ve shipped
                  products at scale. We&apos;ve seen too many well-crafted apps stay invisible simply
                  because their makers didn&apos;t know how to run ads. We started HoopoeApps to fix that.
                </p>
                <div className="team-links">
                  <a href="https://www.linkedin.com/in/ofekkirzner/" className="team-linkedin-link" target="_blank" rel="noopener noreferrer">
                    Ofek Kirzner →
                  </a>
                  <a href="https://www.linkedin.com/in/danriesel/" className="team-linkedin-link" target="_blank" rel="noopener noreferrer">
                    Dan Riesel →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Application Form ── */}
        <section className="apply" id="apply">
          <div className="container">
            <div className="apply-layout">
              <div className="apply-sidebar reveal">
                <span className="section-label">Ready to grow?</span>
                <h2>Get your app in front of the right audience</h2>
                <p>
                  Tell us about your app and what you&apos;re trying to achieve. We review every submission
                  personally and follow up when we&apos;re ready to take you on.
                </p>
                <div className="apply-trust">
                  <span className="apply-trust-item">No upfront commitment required</span>
                  <span className="apply-trust-item">We review every submission personally</span>
                  <span className="apply-trust-item">Management is completely free</span>
                  <span className="apply-trust-item">You keep full control of your ad account</span>
                </div>
              </div>

              <ApplyForm />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="/" className="footer-logo nav-logo-badge nav-logo-badge--sm" aria-label="HoopoeApps">
              HoopoeApps
            </a>
            <nav className="footer-links" aria-label="Footer navigation">
              {/* TODO: Add real privacy policy and terms pages */}
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
              <a href="mailto:hello@hoopoeapps.com">Contact</a>
            </nav>
          </div>

          <div className="footer-legal">
            <p className="footer-disclaimer">
              This service is offered on a best-effort basis. We reserve the right to limit, modify,
              or discontinue availability at any time. Submission does not guarantee onboarding or
              campaign delivery.
            </p>
            <p className="footer-affiliate">
              * This page contains affiliate links. We may earn a commission if you sign up to tools
              we recommend, at no cost to you.
            </p>
            <p className="footer-copyright">© 2026 HoopoeApps</p>
          </div>
        </div>
      </footer>
    </>
  )
}
