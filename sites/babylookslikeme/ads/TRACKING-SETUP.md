# Tracking Setup

## Current state
- `lib/analytics.ts` exposes `trackEvent(name, params)` that fires to `gtag` and Hotjar (`hj`).
- Affiliate URL uses Impact tracking: `https://base44.pxf.io/c/7188348/2049275/25619?trafcat=base`.
- `AffiliateCTA.tsx` and `CTAButton.tsx` already wrap clicks; assume both call `trackEvent` for outbound. (Verify before launch.)
- No Meta Pixel, no TikTok Pixel, no Pinterest Tag installed.

## What we can and can't measure

| Event | Where it fires | Reliable? |
|---|---|---|
| LP page view | Client-side gtag | ✅ |
| Section reveal / scroll depth | `PageEffects.tsx` | ✅ if instrumented |
| Outbound click to Base44 | `AffiliateCTA` `trackEvent` | ✅ |
| Base44 signup | Cross-domain, no callback | ❌ |
| Base44 first paid purchase | Affiliate dashboard only, delayed | ⚠️ daily import |

**This is the central tracking limit.** We **cannot** see the conversion in our pixel stack — only Base44 reports it via the affiliate dashboard with 1–3 day lag. Meta/TikTok will optimize against **outbound click**, not real conversion. That's acceptable but brittle: protect against optimizing for clicks that don't convert by manually checking the affiliate dashboard weekly.

## Required pixels — install before Phase 1

| Pixel | Reason | Priority |
|---|---|---|
| **Meta Pixel + Conversions API** | Required for Meta optimization. Use server-side via Stape or Meta's Cloudflare worker. | P0 |
| **TikTok Pixel + Events API** | Same reason. Forward `ttclid` from URL. | P0 |
| **Pinterest Tag + CAPI** | For Phase 2 launch. | P1 |
| **GA4** (already via gtag) | Sanity-check spend → outbound clicks; cross-channel view. | P0 (verify) |

## Conversion event mapping

| Pixel event | Trigger | Purpose |
|---|---|---|
| `PageView` | Auto on LP load | Pixel health |
| `ViewContent` | Hero section in viewport | Engagement |
| `Lead` (Meta) / `ClickButton` (TikTok) | `AffiliateCTA` click | **Primary optimization event** |
| `InitiateCheckout` (Meta) | (none — would require Base44 callback) | n/a |
| `Purchase` | Manual server-side push from affiliate dashboard via offline conversion API | Optional, hard to set up reliably |

→ Optimize Meta and TikTok against the **`Lead` / outbound click** event. It's a proxy, not a true conversion, but it's the only signal we control.

## Affiliate cookie integrity

Per `lib/analytics.ts`, every outbound link must include `?e=<affiliate code>`. Validate:

1. Open the LP in incognito → click every CTA button → confirm the destination URL contains `e=<code>`.
2. Confirm `NEXT_PUBLIC_BASE44_AFFILIATE_CODE` is set in the production environment.
3. Confirm the prompt pre-fill works on Base44's side (per the comment in `analytics.ts`, this is flaky — log a fallback path).

If `?e=` is missing on any click, **all spend on that channel is wasted**. This is the highest-leverage check before launch.

## Disclosure

The footer already discloses affiliate participation. For ads that imply endorsement or recommendation, also add `#ad` to the post copy (Meta/TikTok creator content rule + FTC requirement).

## Pre-launch checklist
- [ ] Meta Pixel installed and firing `PageView` + `Lead`
- [ ] TikTok Pixel installed and firing `PageView` + `ClickButton`
- [ ] Outbound CTAs all carry `?e=<affiliate code>` (incognito test)
- [ ] Affiliate disclosure visible above the fold or in footer (already done)
- [ ] Negative-keyword list (`base44`, etc.) saved in any Google account before any future search test
- [ ] GA4 outbound click event verified in DebugView
- [ ] Affiliate dashboard access confirmed for daily commission monitoring
