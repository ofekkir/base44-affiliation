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
├── /context   ← spun out when 3+ related session learnings accumulate
├── /base44-template-analysis/
│   ├── fetch_templates.sh         ← shell script to re-fetch raw data (needs bearer token arg)
│   ├── raw_data.json              ← full API response (1696 templates, gitignored)
│   ├── templates-dense.json       ← cleaned/dense version of template data
│   ├── 01_category_demand.py      ← chart: total usage per category
│   ├── 02_revenue_potential.py    ← chart: free/paid ratio + price distribution
│   ├── 03_opportunity_gap.py      ← chart: supply vs demand quadrant scatter
│   ├── 04_growth_trends.py        ← chart: monthly creation + cumulative growth
│   ├── 05_top_creators.py         ← chart: top 15 creators by usage & revenue
│   ├── 06_usage_distribution.py   ← chart: log histogram + per-category box plots
│   └── 07_sales_performance.py    ← chart: revenue by category + price-vs-sales
└── /landing_gen/campaigns/hoopoeapps/output/hoopoeapps/  ← generated Next.js landing page
    ├── app/
    │   ├── api/submit/route.ts    ← form submission handler (emails via Resend to hello@hoopoeapps.com)
    │   ├── components/
    │   │   ├── ApplyForm.tsx       ← client component: step-by-step form + submission
    │   │   ├── AffiliateLink.tsx   ← client component: tracked affiliate link
    │   │   ├── CTAButton.tsx       ← client component: tracked CTA anchor
    │   │   └── PageEffects.tsx     ← client component: session init + scroll-reveal
    │   ├── privacy/page.tsx        ← Privacy Policy page
    │   ├── terms/page.tsx          ← Terms of Service page
    │   ├── robots.ts               ← robots.txt via Next.js
    │   └── sitemap.ts              ← sitemap.xml via Next.js
    └── lib/analytics.ts            ← shared: trackEvent, submitLead
```

## Note-Taking

After each task, log any correction, preference, or pattern learned.
Add a dated one-liner here under "Session learnings"; if 3+ related notes
accumulate, move them to a new `/context/YYYY-MM-DD-topic.md` file and link it.
Keep this file under 100 lines.

**Format**: `"[observation] (learned M/D)"`

### Session learnings
