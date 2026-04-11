# Campaign Architecture

## Naming convention
`[PLATFORM]_[OBJECTIVE]_[ANGLE]_[GEO]_[DATE]`

Examples:
- `META_OUTCLK_FamilyDebate_US_2026Q2`
- `TT_TRAFFIC_BuildItUGC_USCAUKAU_2026Q2`
- `PIN_TRAFFIC_BabyShower_US_2026Q2`

## Meta (Instagram + Facebook)

```
META Ads Account
├── META_OUTCLK_FamilyDebate_US_2026Q2          (objective: Traffic/Outbound Clicks)
│   ├── AdSet: Broad — US, 25–45, all genders, Advantage+ audience
│   │   ├── Reel: split-screen "mom vs dad"
│   │   ├── Reel: score-card reveal
│   │   └── Static: "Who does your baby look like?"
│   └── AdSet: Grandparent angle — US, 55+, women priority
│       └── Reel: "Grandma needed proof"
│
├── META_OUTCLK_BabyShower_USCAUKAU_2026Q2
│   └── AdSet: Broad — 25–40, women, Advantage+
│       ├── Carousel: "Baby shower game in 3 photos"
│       └── Reel: shower party demo
│
└── META_OUTCLK_BuildItUGC_US_2026Q2
    └── AdSet: Broad — 25–45, Advantage+
        └── 3× UGC-style creator videos ("I built this in 5 min")
```

**No retargeting campaigns at first.** First-click attribution + LP→Base44 handoff means retargeting LP visitors who didn't click out is low-value; their first-click cookie may already belong to someone else if they bounce.

## TikTok

```
TikTok Ads Account
├── TT_TRAFFIC_FamilyDebate_USCAUKAU_2026Q2     (objective: Traffic, Smart+ Campaign)
│   └── AdGroup: Broad — 25–44
│       └── 4× Spark Ads (boost organic posts that already perform)
│
└── TT_TRAFFIC_BuildItUGC_US_2026Q2
    └── AdGroup: Broad — 25–44
        └── 3× tutorial-style Spark Ads
```

**Spark Ads only**, not in-feed from scratch. Posting organically first lets us see which creatives travel before paying for distribution.

## Pinterest (secondary, launch Month 2)

```
Pinterest Ads Account
└── PIN_TRAFFIC_BabyShower_US_2026Q2            (objective: Consideration / Traffic)
    └── AdGroup: Broad — Women 25–40, parenting/baby interests
        ├── Idea Pin: "3 baby shower games"
        └── Standard Pin: score card visual
```

## YouTube (tertiary, launch Month 3 only if Meta/TikTok hit threshold)

```
Google Ads Account
└── YT_DG_FamilyDebate_USCAUKAU_2026Q3          (Demand Gen campaign, NOT Search)
    └── AdGroup: Broad — Parents in-market
        └── Recycled Reels/TikToks as Shorts ads
```

**Negative keywords on the Google Ads account level** (mandatory per affiliate ToS):
`base44`, `base 44`, `base44 app`, `base44.com`, `base44 builder` — and any future variations.

## Skipped entirely
- Google Search (any campaign type)
- Performance Max (uncontrolled brand bidding risk)
- LinkedIn, Microsoft Ads
- Meta retargeting (M1–M3)
- Reddit Ads
