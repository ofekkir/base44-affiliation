// Client-only utilities — all browser APIs are guarded with typeof window checks

/**
 * Full prompt shown in the post-click modal for users to copy-paste into
 * Base44 if the URL pre-fill didn't land.
 */
export const BASE44_FULL_PROMPT = `Create a baby resemblance app where users upload three photos (baby, mom, dad) and AI analyzes how much the baby resembles each parent. Output a percentage score (e.g. 62% Dad, 38% Mom) plus a feature-by-feature breakdown (eyes, nose, mouth, face shape). Include a shareable score card with social share buttons and a fun playful UI.`

export const BASE44_AFFILIATE_URL = 'https://base44.pxf.io/c/7188348/2049275/25619?trafcat=base'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params?: Record<string, string | number | boolean>): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') window.gtag('event', name, params ?? {})
}
