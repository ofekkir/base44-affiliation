# Base44 Affiliation — Idea Research Summary

## Business Model

Find quirky, personal app ideas (e.g., "help your grandma remember family members") that resonate emotionally. Create a landing page showing how the idea becomes a working app on Base44. Redirect visitors via affiliate links to Base44 where they build it themselves.

**Winning formula**: emotional hook + low-competition niche + viral/shareable angle + Base44 can actually deliver it.

---

## Research Methodology

### Step 1: Template Store Analysis

Scraped the full Base44 template marketplace (1,696 templates) via their API. Built 7 Python visualization scripts analyzing demand, revenue, competition gaps, growth trends, top creators, usage distribution, and sales performance.

**Charts produced:**
1. `01_category_demand.png` — Total usage per category (horizontal bar)
2. `02_revenue_potential.png` — Free/paid ratio + price distribution per category
3. `03_opportunity_gap.png` — Supply vs demand scatter with quadrant analysis
4. `04_growth_trends.png` — Monthly template creation (stacked area) + cumulative growth
5. `05_top_creators.png` — Top 15 creators by usage and by revenue
6. `06_usage_distribution.png` — Log-scale usage histogram + per-category box plots
7. `07_sales_performance.png` — Revenue by category + price-vs-sales scatter

### Step 2: Google Trends (US)

Compared all 9 ideas using Google Trends interest-over-time data for the United States. Extracted via browser automation (Google blocks direct API/fetch requests). Identified trend direction, breakout signals, and relative search volume.

### Step 3: Meta Ad Library (US)

Searched each idea's keywords in Meta's Ad Library (US, all platforms). Counted active ads, identified key advertisers, and — critically — checked whether competition is from apps or physical products. This distinction proved to be the most valuable insight.

### Step 4: TikTok Ad Library (Attempted)

**Result: Not usable.** TikTok's Ad Library only covers EU/EEA countries (Digital Services Act compliance). No US data is available. Abandoned this channel.

---

## Template Store Findings

### What We Found

We analyzed 1,696 templates across 16 categories, 1,022 creators, spanning Jul 2025 — Apr 2026. We produced 7 charts covering demand, revenue, pricing, growth trends, top creators, usage distribution, and sales performance.

### Why It Was Mostly a Dead End

The template store turned out to be a poor signal source for the affiliation business model:

- **Categories are too broad**: "Operations", "Marketing & Sales", "Data & Analytics" dominate — these are generic B2B/productivity categories, not the quirky personal app ideas we're targeting.
- **Top templates are generic tools**: Task managers, code generators, CRM dashboards. Nothing emotional or consumer-facing.
- **Revenue is tiny**: The entire top category (Operations) generated ~$15K total. Not meaningful market signal.
- **No consumer marketplace**: There's no browsing/discovery experience for end users — "usage" in the store reflects creator activity, not consumer demand. This data can't tell us what real people want.
- **Extreme long tail**: Median usage is 1, 46% of templates have zero usage. The data is too sparse to draw category-level conclusions.

### What It Was Useful For

1. **Confirming Base44 works** — The platform can actually build functional apps. The store proves it.
2. **Sourcing a few idea seeds** — Browsing the store surfaced ideas like pet memorial and breathing apps, which we then validated through external demand signals (Google Trends, Meta Ads).
3. **Understanding the platform** — Informed how to pitch "build it on Base44" in landing pages.

The real validation came from Google Trends and Meta Ad Library — not the template store.

---

## Evaluation Criteria

For each idea, we evaluated:

1. **Existing demand** — Is there search volume / trend momentum to piggyback on?
2. **Low CPC potential** — Is the ad landscape uncrowded (few advertisers, or competitors targeting different formats)?
3. **Conversion likelihood** — Once someone lands on the page, will they actually go build the app on Base44?

---

## Idea Scorecard

| Rank | Idea | Source | Google Trends (US) | Meta Ads (US) | Competition Type | Verdict |
|------|------|--------|-------------------|---------------|-----------------|---------|
| 1 | Baby lookalike app | Ofek | +2,900% breakout | ~290 ads (FaceLab only) | App (1 player) | Best viral opportunity |
| 2 | Pet memorial app | Store | Stable 60-70 | 870 ads | ALL physical products | Blue ocean for apps |
| 3 | Dementia memory app | Ofek | Growing 10→100 | ~50 ads | Care services, not apps | Growing need, low competition |
| 4 | Wedding RSVP | Ofek | Seasonal spikes | 1,100+ ads | Apps (The Knot, Zola) | High demand but crowded |
| 5 | Breathing/anxiety app | Store | Stable ~50 | 2,200+ ads | Apps (Calm, Headspace) | Huge market, saturated |
| 6 | Diabetic meal planner | Store | Stable 40-50 | ~180 ads | Health apps | Decent niche, needs credibility |
| 7 | Mindful eating app | Store | Low 15-20 | ~60 ads | Sparse | Small niche, low demand |
| 8 | AI trip planner | Store | Growing | 400+ ads | Apps (Wanderlog etc.) | Competitive, hard to stand out |
| 9 | Eat slower app | Ofek | Very low ~5 | ~3,300 (noise) | Food delivery (irrelevant) | Too niche, no demand signal |

---

## Deep Dives

### 1. Baby Lookalike App

**Demand signal**: Google Trends shows a +2,900% breakout in the US — this is a massive, active spike, not a slow burn. The query "who does my baby look like" and variants are surging.

**Ad landscape**: ~290 active Meta ads. Virtually all trace back to one competitor: FaceLab. No other app has meaningful presence. Most ads use simple before/after face comparisons — the creative bar is low.

**Why it works**:
- **Built-in viral loop**: Parents share results on social media ("baby looks 60% like dad!") — free organic distribution.
- **Emotionally irresistible**: New parents can't resist this. Conversion friction is extremely low.
- **One real competitor**: FaceLab owns the space alone. Base44 can differentiate as "build your own version" — personalized, no app install required.
- **Low CPC expected**: Not a competitive keyword yet in paid search.

**Risks**: Trend could be seasonal (baby boom timing). Face comparison accuracy matters — if Base44's output feels gimmicky, users bounce.

### 2. Pet Memorial App

**Demand signal**: Stable Google Trends interest around 60-70 in the US. Not spiking, but consistent year-round demand. Pet loss is a perennial emotional event.

**Ad landscape**: 870 active Meta ads — sounds competitive, but **every single ad is for physical products**: memorial jewelry, custom blankets, paw print kits, garden stones. Zero ads for pet memorial apps or digital experiences.

**Why it works**:
- **Zero app competition**: 870 advertisers spending money in this space, but none offer a digital/app solution. First-mover advantage for an app play.
- **High emotional intent**: People grieving a pet are actively searching and willing to spend. Conversion potential is high.
- **CPC arbitrage**: Ad keywords are dominated by physical product sellers — an app ad would face different auction dynamics.

**Risks**: Emotional sensitivity requires careful landing page tone. The "build it on Base44" pitch needs to feel respectful, not transactional.

### 3. Dementia Memory App

**Demand signal**: Google Trends shows growth from ~10 to ~100 in the US — the fastest-growing trend among all 9 ideas. Driven by aging population and increased awareness.

**Ad landscape**: ~50 active Meta ads, mostly care services and informational resources. No direct app competitors targeting "help grandma remember family members."

**Why it works**:
- **Secular growth trend**: Aging population guarantees increasing demand for years.
- **Deeply personal use case**: Family members are highly motivated — "I built this app for my grandma" is a powerful emotional hook.
- **No app competition**: Care services advertise, but nobody offers a simple DIY memory app.

**Risks**: Medical/health adjacent — needs to avoid making clinical claims. Audience (family caregivers) may be less tech-savvy, which could affect Base44 conversion.

### 4-9. Brief Notes

**Wedding RSVP (#4)**: Strong seasonal demand (engagement season), but The Knot and Zola dominate with big ad budgets. CPC will be expensive. Could work as a "DIY personal touch" angle but hard to compete.

**Breathing/Anxiety (#5)**: Massive market but Calm and Headspace spend millions on ads. Not a viable low-CPC play.

**Diabetic Meal Planner (#6)**: Steady demand, moderate competition. Needs medical credibility to convert — "build your own meal planner on Base44" is a harder sell.

**Mindful Eating (#7)**: Too small. Low search volume, few ads, niche audience.

**AI Trip Planner (#8)**: Growing interest but multiple well-funded competitors (Wanderlog, TripIt). App stores already crowded.

**Eat Slower (#9)**: Minimal search demand. The 3,300 Meta ads are noise (food delivery, unrelated). Not a viable idea.

---

## Data Gaps & Caveats

- **TikTok Ad Library**: EU/EEA only — no US data available. Could not validate TikTok ad competition.
- **Google Trends relative scale**: Numbers are relative (0-100), not absolute search volume. Breakout (2,900%) indicates rapid growth but not total market size.
- **Meta Ad Library counts are approximate**: Filtered by keyword, not exact match. Some noise in results (especially broad terms like "eat slower").
- **Template store multi-tagging**: Templates belong to multiple categories, so category totals overlap. A single popular template inflates several categories simultaneously.
- **Revenue estimates are lower bounds**: Based on `price_usd * total_sales` from the store — doesn't capture external revenue or lifetime value.
- **CPC not directly measured**: Low competition inferred from ad counts and competitor type, not from actual Google/Meta CPC auction data.

---

## Next Steps

1. **Pick the first idea to build** — Baby lookalike (viral, trending) or pet memorial (blue ocean, emotional)?
2. **Build the landing page** — Using the existing landing page generator workflow.
3. **Set up affiliate tracking** — Base44 link with UTM parameters.
4. **Validate with a small ad spend** — $50-100 test on Meta to measure actual CPC and click-through.
