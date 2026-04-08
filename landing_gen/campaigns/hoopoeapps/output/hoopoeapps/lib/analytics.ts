// Client-only utilities — all browser APIs are guarded with typeof window checks

export const COLLECTOR_URL = process.env.NEXT_PUBLIC_COLLECTOR_URL || ''
export const PRODUCT_NAME = process.env.NEXT_PUBLIC_PRODUCT_NAME || 'HoopoeApps'
export const PRODUCT_SLUG = process.env.NEXT_PUBLIC_PRODUCT_SLUG || 'hoopoeapps'
export const CAMPAIGN_SLUG = process.env.NEXT_PUBLIC_CAMPAIGN_SLUG || 'hoopoeapps_launch'
export const PAGE_VARIANT_ID = process.env.NEXT_PUBLIC_PAGE_VARIANT_ID || '00000000-0000-0000-0000-000000000000'
export const BASE44_AFFILIATE_URL = process.env.NEXT_PUBLIC_BASE44_AFFILIATE_URL || 'https://base44.com'
export const PAGE_VERSION = 'v1'
export const PAGE_VARIANT = 'default'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    hj?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') window.gtag('event', name, params ?? {})
  if (typeof window.hj === 'function') window.hj('event', name)
}

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

export async function registerSession(): Promise<string | null> {
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

export async function submitLead(formData: Record<string, string>): Promise<void> {
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
