# Implementation Roadmap

## Week 0 — Prep
- Commission confirmed at **$100** per first Qualified Purchase. Economics are comfortably viable.
- Confirm affiliate dashboard access and daily commission data pull.
- Confirm Base44's exact definition of "Qualified Purchase" and whether the 30-day window starts at click or signup.

## Week 1 — Foundation
- Install Meta Pixel + CAPI (Stape or Meta Cloudflare worker)
- Install TikTok Pixel + Events API
- Verify `?e=<affiliate code>` fires on every outbound CTA in incognito (highest-leverage check)
- Verify GA4 outbound click event in DebugView
- Add `base44` and variants to negative keyword list in any future Google account
- Set up affiliate dashboard daily monitoring (can be a manual screenshot until volume justifies automation)

## Week 2 — Creative production batch 1
- Brief 2 creators on Backstage/Insense for "Build-It UGC" pillar (3 videos)
- Produce 4 in-house Family Debate Reels using stock + score card mockup
- Produce 2 Baby Shower carousels
- Total: 9–15 assets ready before launch

## Week 3 — Phase 1 Launch
- Launch `META_OUTCLK_FamilyDebate_US_2026Q2` at $8/day
- Launch `TT_TRAFFIC_BuildItUGC_USCAUKAU_2026Q2` at $5/day (Spark Ads — post organically first 48h)
- Daily checks: pixel health, CTR, CPC, outbound rate
- Do **not** touch ad sets for first 4 days (learning phase)

## Week 4 — First read
- Compare each creative's outbound CTR
- Compare LP arrival → outbound click rate per channel
- Pull affiliate dashboard for the week's commissions
- Apply 3x Kill Rule on losers
- Decide: extend Phase 1 another 2 weeks, or move to Phase 2

## Weeks 5–8 — Optimize (Phase 2)
- Refresh creative weekly (replace bottom 20%)
- Scale winners by ≤20% per 24h
- Launch Pinterest test campaign
- **Gate:** end of Week 12 must show ≥$300 cumulative commissions or kill paid entirely

## Weeks 9–12 — Scale or Kill
**If commissions ≥ $300/mo:**
- Apply 70/20/10 budget split
- Test YouTube Demand Gen with recycled creative
- Expand geos (UK, AU)
- Increase production cadence to 6 new assets/week

**If commissions < $300/mo:**
- Stop all paid acquisition
- Audit LP → Base44 handoff (the URL pre-fill + signup flow)
- Reconsider whether the affiliate offer is the right monetization for this hook
- Revisit organic-first channels (TikTok organic, Reddit, Pinterest organic)

## Ongoing rituals
- **Daily:** pixel health, account spend pacing, affiliate dashboard glance
- **Weekly:** creative refresh decisions, kill/scale calls, commission reconciliation
- **Monthly:** full performance review, budget reallocation, refresh creative brief
- **Quarterly:** revisit channel mix, retire dead pillars, brief next batch

## Decision log (fill in as we learn)
- [x] Confirmed commission rate: **$100** USD per Qualified Purchase
- [ ] Real Phase 1 outbound CTR: ___% (Week 4)
- [ ] Real LP → outbound click rate: ___% (Week 4)
- [ ] Real outbound → commission rate: ___% (Week 6, after data settles)
- [ ] Phase 2 go/no-go: ___ (Week 4)
- [ ] Phase 3 scale/kill: ___ (Week 12)
