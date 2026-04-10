// Client-only utilities — all browser APIs are guarded with typeof window checks

/**
 * Short prompt carried in the Base44 URL (?prompt=...). Base44's marketing
 * site pre-populates its textarea from this, but the feature is flaky —
 * kept short to maximize the chance it actually fills in.
 */
const BASE44_URL_PROMPT = `Build a baby resemblance app: upload baby, mom, and dad photos, AI scores who the baby looks like most, shareable card.`

/**
 * Full prompt shown in the post-click modal for users to copy-paste into
 * Base44 if the URL pre-fill didn't land (Wix SSR cache is unreliable).
 */
export const BASE44_FULL_PROMPT = `Create a baby resemblance app where users upload three photos (baby, mom, dad) and AI analyzes how much the baby resembles each parent. Output a percentage score (e.g. 62% Dad, 38% Mom) plus a feature-by-feature breakdown (eyes, nose, mouth, face shape). Include a shareable score card with social share buttons and a fun playful UI.`

/**
 * Base44 affiliate tracking code (the `e=` query param value).
 * Set via NEXT_PUBLIC_BASE44_AFFILIATE_CODE in the environment.
 */
const BASE44_AFFILIATE_CODE = process.env.NEXT_PUBLIC_BASE44_AFFILIATE_CODE || ''

function buildBase44Url(): string {
  const params = new URLSearchParams()
  if (BASE44_AFFILIATE_CODE) params.set('e', BASE44_AFFILIATE_CODE)
  params.set('prompt', BASE44_URL_PROMPT)
  return `https://base44.com/?${params.toString()}`
}

export const BASE44_AFFILIATE_URL = buildBase44Url()

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
