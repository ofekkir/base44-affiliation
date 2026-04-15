// Client-only utilities — all browser APIs are guarded with typeof window checks

export const CANONICAL_BASE = 'https://hoopoeapps.com/babylook'

/**
 * Fallback prompt used if the CTA click event doesn't carry one (legacy paths).
 */
export const BASE44_FULL_PROMPT = `Please build the application that is described at this URL: ${CANONICAL_BASE}?app=look-alike`

export const BASE44_AFFILIATE_URL = 'https://base44.pxf.io/c/7188348/2049275/25619?trafcat=base'

export function buildPageUrl(slug: string): string {
  return `${CANONICAL_BASE}?app=${slug}`
}

export function buildPromptForUrl(url: string): string {
  return `Please build the application that is described at this URL: ${url}`
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') window.gtag('event', name, params ?? {})
}
