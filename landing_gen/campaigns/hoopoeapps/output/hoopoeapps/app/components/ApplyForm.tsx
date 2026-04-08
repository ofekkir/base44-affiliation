'use client'

import { useState } from 'react'
import { trackEvent, submitLead } from '../../lib/analytics'

interface AppForm {
  email: string
  app_name: string
  app_url: string
  app_description: string
  target_audience: string
  monthly_budget: string
}

const EMPTY_FORM: AppForm = {
  email: '',
  app_name: '',
  app_url: '',
  app_description: '',
  target_audience: '',
  monthly_budget: '',
}

const BUDGET_OPTIONS = ['$50–150', '$150–500', '$500+', 'Not sure yet']

export function ApplyForm() {
  const [step, setStep] = useState(0)
  const [panelKey, setPanelKey] = useState(0)
  const [form, setForm] = useState<AppForm>(EMPTY_FORM)
  const [emailError, setEmailError] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [globalError, setGlobalError] = useState('')

  function updateField(field: keyof AppForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (field === 'email' && emailTouched) {
      const v = value.trim()
      if (!v) setEmailError('Email is required.')
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) setEmailError('Please enter a valid email address.')
      else setEmailError('')
    }
  }

  function handleEmailBlur() {
    setEmailTouched(true)
    const v = form.email.trim()
    if (!v) setEmailError('Email is required.')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) setEmailError('Please enter a valid email address.')
    else setEmailError('')
  }

  function isEmailValid(): boolean {
    const v = form.email.trim()
    return v.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  }

  function advance() {
    if (step === 0 && !isEmailValid()) {
      setEmailTouched(true)
      const v = form.email.trim()
      if (!v) setEmailError('Email is required.')
      else setEmailError('Please enter a valid email address.')
      return
    }
    setPanelKey((k) => k + 1)
    setStep((s) => s + 1)
  }

  function back() {
    setPanelKey((k) => k + 1)
    setStep((s) => s - 1)
  }

  async function handleSubmit() {
    setStatus('loading')
    setGlobalError('')
    trackEvent('form_submit_attempt')
    try {
      await submitLead({
        email: form.email.trim(),
        app_name: form.app_name.trim(),
        app_url: form.app_url.trim(),
        app_description: form.app_description.trim(),
        target_audience: form.target_audience.trim(),
        monthly_budget: form.monthly_budget,
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
        <p>We&apos;ll review it and be in touch.</p>
      </div>
    )
  }

  const progress = ((step + 1) / 4) * 100

  return (
    <div className="step-form">
      {/* Progress */}
      <div className="step-form-header">
        <div className="step-progress" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={4}>
          <div className="step-progress-track">
            <div className="step-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="step-progress-label">{step + 1} / 4</span>
        </div>
      </div>

      {/* Steps */}
      <div className="step-body">
        <div key={panelKey} className="step-panel">

          {/* Step 1 — Email */}
          {step === 0 && (
            <>
              <p className="step-question">What&apos;s your email?</p>
              <div className="form-field">
                <input
                  id="email"
                  type="email"
                  className={`form-input${emailError ? ' error' : ''}`}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  onBlur={handleEmailBlur}
                  onKeyDown={(e) => e.key === 'Enter' && advance()}
                  autoComplete="email"
                  maxLength={254}
                  aria-describedby="err-email"
                />
                <span id="err-email" className="form-error-slot" role="alert">
                  {emailError || '\u00A0'}
                </span>
              </div>
              <div className="step-actions step-actions--end">
                <button className="btn-primary btn-step-next" onClick={advance} disabled={!isEmailValid()}>
                  Next →
                </button>
              </div>
            </>
          )}

          {/* Step 2 — App URL + Name */}
          {step === 1 && (
            <>
              <p className="step-question">Where can we find your app?</p>
              <p className="step-optional-note">Optional — skip if you&apos;re still building.</p>
              <div className="form-field">
                <label className="form-label" htmlFor="app_url">App URL</label>
                <input
                  id="app_url"
                  type="url"
                  className="form-input"
                  placeholder="https://yourapp.com"
                  value={form.app_url}
                  onChange={(e) => updateField('app_url', e.target.value)}
                  autoComplete="url"
                  maxLength={500}
                  autoFocus
                />
              </div>
              <div className="form-field" style={{ marginTop: '1rem' }}>
                <label className="form-label" htmlFor="app_name">App name</label>
                <input
                  id="app_name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. TaskFlow"
                  value={form.app_name}
                  onChange={(e) => updateField('app_name', e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && advance()}
                  autoComplete="off"
                  maxLength={100}
                />
              </div>
              <div className="step-actions">
                <button className="btn-step-back" onClick={back}>← Back</button>
                <button className="btn-primary btn-step-next" onClick={advance}>Next →</button>
              </div>
            </>
          )}

          {/* Step 3 — Description + Audience */}
          {step === 2 && (
            <>
              <p className="step-question">Tell us about your app.</p>
              <p className="step-optional-note">Optional — even a line helps us understand it.</p>
              <div className="form-field">
                <label className="form-label" htmlFor="app_description">What does it do?</label>
                <textarea
                  id="app_description"
                  className="form-textarea"
                  placeholder="What problem does it solve, and how?"
                  value={form.app_description}
                  onChange={(e) => updateField('app_description', e.target.value)}
                  rows={3}
                  maxLength={1000}
                  autoFocus
                />
                <span
                  className={`form-char-count${form.app_description.length >= 900 ? ' form-char-count--warn' : ''}`}
                  aria-live="polite"
                >
                  {form.app_description.length}/1000
                </span>
              </div>
              <div className="form-field" style={{ marginTop: '1rem' }}>
                <label className="form-label" htmlFor="target_audience">Who is it for?</label>
                <input
                  id="target_audience"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Freelancers who invoice clients"
                  value={form.target_audience}
                  onChange={(e) => updateField('target_audience', e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && advance()}
                  autoComplete="off"
                  maxLength={300}
                />
              </div>
              <div className="step-actions">
                <button className="btn-step-back" onClick={back}>← Back</button>
                <button className="btn-primary btn-step-next" onClick={advance}>Next →</button>
              </div>
            </>
          )}

          {/* Step 4 — Budget */}
          {step === 3 && (
            <>
              <p className="step-question">What monthly ad budget are you comfortable with?</p>
              <p className="step-optional-note">Optional — no commitment. Just helps us plan.</p>
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

              {status === 'error' && globalError && (
                <div className="form-global-error" role="alert" style={{ marginTop: '1.25rem' }}>
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

              <div className="step-actions" style={{ marginTop: '1.5rem' }}>
                <button className="btn-step-back" onClick={back}>← Back</button>
                <div className="step-submit-group">
                  <button
                    className="btn-primary btn-step-next"
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Submitting…' : 'Submit Your App'}
                  </button>
                  <span className="form-submit-note">We review every submission personally.</span>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}
