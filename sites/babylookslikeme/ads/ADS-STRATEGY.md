# Baby Looks Like Me — Paid Ads Strategy

## What this actually is
A pre-sell affiliate landing page for **Base44** (no-code app builder). The "baby resemblance app" is the hook; the conversion is a Base44 signup → first Qualified Purchase. Mockups on the page are illustrative — the user actually builds the app on Base44.

This shapes everything below. The strategy is **not** "drive app installs" — it is "buy cheap, high-curiosity attention from parents and route them to Base44 with the affiliate cookie set."

## Affiliate constraints that drive platform choice
From `context/2026-04-09-affiliate-terms-compliance.md`:

| Constraint | Implication |
|---|---|
| Cannot bid on Base44 trademarks; must add as negatives | **Google Search non-starter for cold or brand prospecting.** Even if profitable, it's a TOS breach. |
| First-click attribution, 30-day cookie | Volume + freshness matters; retargeting same user is wasted spend if first click was elsewhere. |
| First Qualified Purchase only — one-time fee | No LTV runway. CPA must clear a one-shot commission, likely $10–40. |
| $300/mo minimum or risk termination after 3 months | Need ~10–30 paying conversions/mo from day one. |
| No incentivizing traffic (no rebates/PTC/cashback) | Rules out cashback affiliates, paid-to-click, deal sites. |
| FTC + prominent affiliate disclosure required | Already in footer; must also be in any ad copy that implies endorsement. |

## Conversion math (rough)
- Base44 first-purchase commission = **$100** (confirmed).
- Threshold = $300/mo → need only **3 Qualified Purchases/mo** to stay in program.
- Estimated funnel: ad click → LP visit (90%) → outbound to Base44 (25%) → starts building (40%) → reaches paid plan within 30d (5–10%).
- End-to-end click→commission ≈ **0.5–1%**.
- To hit 3 conversions: ~300–600 ad clicks/mo. To profit meaningfully at 10–20 conversions: 1,000–4,000 clicks/mo.
- Max sustainable CPC ≈ **$1.00** to break even, **$0.50** to clearly profit.

→ The $100 commission materially opens the playbook. Sub-$1 CPCs are easy on social, and non-brand Google Search / Demand Gen / YouTube also become viable. Google Search on Base44 brand terms is still banned by affiliate ToS — that hasn't changed.

## Platform selection

**Primary (proven CPC fit + audience match):**
1. **Meta (Instagram Reels + Facebook Feed)** — parent audience is unmatched, Reels CPMs are cheap, viral creative travels. Use Advantage+ Audience with broad targeting.
2. **TikTok** — native home for "watch this app score who my baby looks like" UGC. Use Spark Ads from organic posts. Strongest creative-CPC fit.

**Secondary (test after primary stabilizes):**
3. **Pinterest** — baby/maternity is core Pinterest territory; cheap clicks; intent skews planning/saving.
4. **YouTube Shorts via Demand Gen** — recycle Meta/TikTok verticals; cheap reach; comfortably in-budget at $1 CPC ceiling.
5. **Google Search non-brand (small test)** — viable at $100/commission. Target entertainment/parenting queries like `who does my baby look like`, `baby resemblance app`, `baby look alike`. **MUST** add `base44` + variants as negative keywords (affiliate ToS).

**Skip:**
- ❌ **Google Search on Base44 brand terms** — affiliate ToS violation, instant termination risk.
- ❌ **LinkedIn / Microsoft / B2B** — wrong audience entirely.
- ❌ **Reddit Ads** — parenting subs are hostile to affiliate; reserve for organic.

## Targeting principles
- **Broad audiences > narrow.** Meta and TikTok algorithms reward broad creative-led targeting. Don't over-segment.
- **Geo: US, UK, CA, AU first.** English-language LP; high baby-product spend; Base44 supports them.
- **Age: 25–45.** Optionally include 55+ for grandparent angle in a separate ad set.
- **Interests (Meta only as a ceiling):** New parents, baby shower, expecting parents, parenting blogs.
- **Negatives:** "Base44" anywhere as a search/branded term — not relevant on social, but **must** be set as negatives if Microsoft Search or Google Demand Gen is ever tested.

## Creative thesis
The hook is **emotional curiosity**, not utility. "Settle the family debate" beats "build an app." Treat it like a viral entertainment product — the affiliate flow is incidental.

Three messaging pillars:
1. **The Family Debate** — "Mom or Dad? Now you can finally know." Hook: split-screen of parents arguing.
2. **Baby Shower / Grandparent Gift** — "The game everyone plays at the baby shower."
3. **Build-Your-Own Magic** — "I built this app in 5 minutes. Here's how." Tutorial/UGC angle. Plays well on TikTok.

See `CREATIVE-BRIEF.md` for full production plan.

## What success looks like

| Metric | Month 1 | Month 3 | Month 6 |
|---|---|---|---|
| Spend | $500–800 (testing) | $1,500 | $3,000–5,000 |
| Outbound clicks to Base44 | 1,500 | 4,000 | 10,000 |
| Estimated Qualified Purchases | 8–15 | 20–40 | 50–100 |
| Estimated commission | $800–1,500 | $2,000–4,000 | $5,000–10,000 |
| Status | Near BE or profitable in M1 | Solidly profitable | Scale mode |

With $100 commissions, the $300 affiliate threshold (3 conversions) is a very low bar. If Month 3 doesn't clear it, **kill paid entirely** — the problem is LP or offer, not spend.

## Open risks
1. **Base44 URL pre-fill is flaky** (per `lib/analytics.ts`). Drop-off between LP click and Base44 signup may be worse than assumed.
2. **Meta/TikTok ad review** may reject ads that imply "this is a real app you can use" since the LP is illustrative. Ad copy must mirror the "build your own" framing exactly.
3. **First-click attribution + 30-day cookie** means a user who clicks our Meta ad and then later hears about Base44 elsewhere still credits us — and vice versa.
4. **"Qualified Purchase" definition** — confirm which Base44 paid tier qualifies and the typical signup-to-paid timeline. If most users take >30 days to upgrade, actual conversion rate will be worse than modelled.
