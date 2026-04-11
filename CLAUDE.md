# CLAUDE.md

## Rules of Engagement

- **One feature at a time**: No parallel WIP without explicit agreement.
- **Iterative**: Working thin slice > complete-but-broken.
- **No over-engineering**: Skip abstractions until needed twice.
- **No secrets in repo**: `.env` only, never commit API keys.
- **No deprecated direct deps**: Never add a deprecated package as a direct dependency. Transitive deprecated deps are acceptable.
- When you create or discover new files, update the Folder Structure section.

## Folder Structure

```
/
├── CLAUDE.md
├── /plans
│   └── hoopoeapps-landing-page-plan.md  ← HoopoeApps landing page spec
├── /research                            ← marketplace analysis & idea research
│   ├── fetch_templates.sh               ← re-fetch raw data (needs bearer token arg)
│   ├── research-summary.md              ← consolidated findings & idea scorecard
│   ├── 01–07_*.py                       ← chart scripts (demand, revenue, gaps, etc.)
│   ├── raw_data.json                    ← full API response (gitignored)
│   └── templates-dense.json             ← cleaned template data (gitignored)
├── /sites                               ← landing pages (each a Next.js app)
│   ├── hoopoeapps/                      ← HoopoeApps landing page
│   │   ├── app/
│   │   │   ├── api/submit/route.ts      ← form submission (Resend → hello@hoopoeapps.com)
│   │   │   ├── components/
│   │   │   │   ├── ApplyForm.tsx         ← step-by-step form + submission
│   │   │   │   ├── AffiliateLink.tsx     ← tracked affiliate link
│   │   │   │   ├── CTAButton.tsx         ← tracked CTA anchor
│   │   │   │   └── PageEffects.tsx       ← session init + scroll-reveal
│   │   │   ├── privacy/page.tsx
│   │   │   ├── terms/page.tsx
│   │   │   ├── robots.ts
│   │   │   └── sitemap.ts
│   │   └── lib/analytics.ts
│   └── babylookslikeme/                 ← Baby Look-Alike affiliate landing page
│       ├── ads/                          ← paid ads strategy & playbook
│       │   ├── ADS-STRATEGY.md
│       │   ├── CAMPAIGN-ARCHITECTURE.md
│       │   ├── BUDGET-PLAN.md
│       │   ├── CREATIVE-BRIEF.md
│       │   ├── TRACKING-SETUP.md
│       │   └── IMPLEMENTATION-ROADMAP.md
│       ├── app/
│       │   ├── components/
│       │   │   ├── AffiliateCTA.tsx      ← tracked affiliate link (rel="sponsored")
│       │   │   ├── PageEffects.tsx       ← scroll-reveal
│       │   │   └── CookieConsentBanner.tsx
│       │   ├── privacy/page.tsx
│       │   ├── terms/page.tsx
│       │   ├── opengraph-image.tsx
│       │   ├── robots.ts
│       │   └── sitemap.ts
│       └── lib/analytics.ts
└── /context   ← spun out when 3+ related session learnings accumulate
    ├── base44-affiliate-terms.pdf            ← full 17-page affiliate T&C (source PDF)
    └── 2026-04-09-affiliate-terms-compliance.md ← summarized compliance rules
```

## Note-Taking

After each task, log any correction, preference, or pattern learned.
Add a dated one-liner here under "Session learnings"; if 3+ related notes
accumulate, move them to a new `/context/YYYY-MM-DD-topic.md` file and link it.
Keep this file under 100 lines.

**Format**: `"[observation] (learned M/D)"`

### Session learnings
