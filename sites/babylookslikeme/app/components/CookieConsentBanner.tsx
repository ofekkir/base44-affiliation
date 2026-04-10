'use client'

import { useEffect, useState } from 'react'
import { hasConsentBeenSet, writeStoredConsent } from '../../lib/cookieConsent'

interface Props {
  gtmConfigured: boolean
  hotjarConfigured: boolean
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    hj?: (...args: unknown[]) => void
  }
}

export function CookieConsentBanner({ gtmConfigured, hotjarConfigured }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!hasConsentBeenSet()) setVisible(true)
  }, [])

  useEffect(() => {
    const handler = () => setVisible(true)
    window.addEventListener('base44:open-cookie-prefs', handler)
    return () => window.removeEventListener('base44:open-cookie-prefs', handler)
  }, [])

  function updateConsent(accepted: boolean) {
    const value = accepted ? 'granted' : 'denied'
    writeStoredConsent(value)
    setVisible(false)

    if (accepted) {
      if (gtmConfigured && typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        })
      }
      if (hotjarConfigured && typeof window.hj === 'function') {
        window.hj('consent', true)
      }
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', accepted ? 'cookie_consent_accepted' : 'cookie_consent_declined')
    }
    if (typeof window.hj === 'function') {
      window.hj('event', accepted ? 'cookie_consent_accepted' : 'cookie_consent_declined')
    }
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        We use cookies to understand how visitors use this site.{' '}
        <a href="/privacy" style={{ color: 'inherit', textDecoration: 'underline' }}>
          Privacy Policy
        </a>
      </p>
      <div className="cookie-banner-actions">
        <button className="cookie-btn" onClick={() => updateConsent(false)}>
          Decline
        </button>
        <button className="cookie-btn cookie-btn-accept" onClick={() => updateConsent(true)}>
          Accept
        </button>
      </div>
    </div>
  )
}
