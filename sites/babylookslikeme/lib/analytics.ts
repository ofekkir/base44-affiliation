// Client-only utilities — all browser APIs are guarded with typeof window checks

export const BASE44_AFFILIATE_URL = process.env.NEXT_PUBLIC_BASE44_AFFILIATE_URL || 'https://base44.com/'

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
