# HoopoeApps Landing Page — Implementation Plan

## What We're Building

A landing page at **hoopoeapps.com** for a service where we set up and manage paid ad campaigns
(Google/Meta) for vibe-coded apps — free of charge. The user funds their own ad account; we handle
strategy, setup, copy, targeting, and optimization.

The page serves two purposes:

1. Acquire users via a waitlist (which doubles as a sales pipeline for a future paid offering)
2. Guide users who haven't built an app yet toward building one with Base44 (affiliate link)

---

## Tech Requirements

- Static site or simple Next.js — no backend needed except a form submission handler
- Form submissions go to an email or a simple tool like Tally / Airtable / Notion (decide before building)
- Mobile responsive
- Fast load — no heavy frameworks
- Domain: hoopoeapps.com

---

## Page Structure & Content

### Section 1 — Nav

```
[HoopoeApps logo/wordmark]        [Submit Your App →]
```

---

### Section 2 — Hero

**Headline:**
> "Built a vibe-coded app? We'll run your ads for free."

**Subheadline:**
> "We set up and manage your Google and Meta campaigns — professionally. You fund the ads. We do the work, at no charge."

**CTA button:** `Submit Your App →`

**Below button (small text):**
> "We review every submission and reach out when we're ready to onboard your app."

---

### Section 3 — How It Works

Three columns:

| Step 1 | Step 2 | Step 3 |
|---|---|---|
| **Build your app** | **Submit it to us** | **We run your campaigns** |
| Use any vibe coding tool to build your app. Don't have one yet? We recommend Base44. [Start building →] *(affiliate link)* | Tell us what your app does and who it's for. We review every submission. | We handle strategy, ad copy, targeting, and ongoing optimization. You connect your ad account and set your budget. |

**Important:** The Base44 link in Step 1 must be:
- Labeled as a recommendation, not a requirement ("We recommend")
- Accompanied by a visible affiliate disclosure (see Footer)
- A tracked affiliate URL provided by the Base44 dashboard

---

### Section 4 — What's Included

**Left column — We handle:**
- Campaign strategy tailored to your app
- Ad copy and creatives
- Audience targeting setup
- Ongoing optimization
- Performance reporting

**Right column — You bring:**
- Your app (live URL)
- Your Google or Meta Ads account
- Your ad budget — you decide how much
- 15 minutes to brief us

**Below both columns:**
> "Our management work is completely free. No retainer, no commission on spend."

---

### Section 5 — Who We Are

**Headline:** "Why we're doing this"

**Body:**
> "We're [Name] and [Name] — builders with a background in paid acquisition and distribution.
> We've run campaigns across Google, Meta, and more. We started HoopoeApps because too many
> well-built apps never find their audience. We're changing that, one app at a time."

Two avatar/photo placeholders with names and LinkedIn links.

---

### Section 6 — Application Form

**Headline:** "Get Your App in Front of the Right Audience"

**Fields:**
- App name
- App URL
- What does your app do? (2-3 sentences)
- Who is it for?
- Monthly ad budget you're comfortable with:
  `( ) $50–150  ( ) $150–500  ( ) $500+  ( ) Not sure yet`
- Your email

**Submit button:** `Submit Your App`

**Below button:**
> "We review every submission personally and reach out when we're ready to onboard your app."

---

### Section 7 — Footer

```
© 2026 HoopoeApps

This service is offered on a best-effort basis. We reserve the right to limit, modify,
or discontinue availability at any time. Submission does not guarantee onboarding or
campaign delivery.

* This page contains affiliate links. We may earn a commission if you sign up to tools
  we recommend, at no cost to you.

[Privacy Policy]  [Terms]  [Contact]
```

---

## Key Constraints

| Constraint | Detail |
|---|---|
| Affiliate disclosure | Must be visible on page per FTC rules and Base44 T&C §4.8 |
| No Base44 brand in paid ads | If running paid ads to this page, cannot use "Base44" in keywords or ad creative |
| No scale claims | Don't say "team of experts", "hundreds of campaigns", or similar |
| No AI mention | Don't reference AI tooling in copy — focus on outputs, not process |
| Waitlist framing | Never say "we're full" or "limited spots" — frame as a selective review process |

---

## Form Submission Handling

On submit → show confirmation message:
> "We've received your app. We'll review it and be in touch."

All submissions feed into a list (Airtable / Notion / email — implementer to decide) that serves
as the waitlist CRM. No autoresponder that promises a timeline or specific deliverable.

This list is the sales pipeline. Three paths per submission:

- **Path A:** We can serve them now → onboard for free
- **Path B:** Can't serve for free → approach with paid offer
- **Path C:** Not yet → periodic nurture email

---

## What This Page Is NOT

- Not a SaaS signup flow
- Not promising free ad spend — only free management
- Not committing to a delivery timeline
- Not an agency portfolio site

---

## Post-Build: Promoting the Page

Once live, use the following skills in a new Claude session:

1. **`/ads-dna`** on hoopoeapps.com — extract brand profile for consistent creative
2. **`/ads-create`** — generate campaign concepts targeting generic keywords such as:
   - "promote my app"
   - "app marketing"
   - "no-code app advertising"
   - "vibe coding"

Do NOT use "Base44" as a keyword in any paid campaign promoting this page (affiliate terms §3.7, §8.1).

---

## Open Decisions (Resolve Before Building)

1. Where do form submissions go? (Tally, Airtable, direct email)
2. Do you have a logo/wordmark for HoopoeApps?
3. Real names and photos for the "Who We Are" section?
4. What is the actual Base44 affiliate tracking URL?
5. Tech stack preference: plain HTML/CSS, Next.js, or a no-code builder?
