'use client'

import { useState } from 'react'
import { trackEvent, submitLead } from '../../lib/analytics'

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

export function ApplyForm() {
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

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 12.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>We&apos;ve received your app.</h3>
        <p>
          We&apos;ll review it and be in touch. In the meantime, if you haven&apos;t launched yet,
          keep building.
        </p>
      </div>
    )
  }

  return (
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
  )
}
