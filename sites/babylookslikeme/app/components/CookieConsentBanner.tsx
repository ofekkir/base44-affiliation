'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { hasConsentBeenSet, writeStoredConsent } from '../../lib/cookieConsent'

interface Props {
  gtmConfigured: boolean
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function CookieConsentBanner({ gtmConfigured }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!hasConsentBeenSet()) setVisible(true)
  }, [])

  useEffect(() => {
    const handler = () => setVisible(true)
    window.addEventListener('base44:open-cookie-prefs', handler)
    return () => window.removeEventListener('base44:open-cookie-prefs', handler)
  }, [])

  // Reserve space at the bottom of the page while the banner is visible
  // so it doesn't overlap the final CTA on mobile.
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.classList.toggle('has-cookie-banner', visible)
    return () => document.body.classList.remove('has-cookie-banner')
  }, [visible])

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
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', accepted ? 'cookie_consent_accepted' : 'cookie_consent_declined')
    }
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        We use cookies to understand how visitors use this site.{' '}
        <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'underline' }}>
          Privacy Policy
        </Link>
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
