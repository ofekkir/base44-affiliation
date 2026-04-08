const CONSENT_KEY = 'hoopoeapps_cookie_consent_v1'

export type ConsentValue = 'granted' | 'denied'

export interface StoredConsent {
  analytics: ConsentValue
  updatedAt: string
}

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function writeStoredConsent(analytics: ConsentValue): void {
  if (typeof window === 'undefined') return
  const consent: StoredConsent = { analytics, updatedAt: new Date().toISOString() }
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}

export function hasConsentBeenSet(): boolean {
  return readStoredConsent() !== null
}
