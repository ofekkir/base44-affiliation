import Image from 'next/image'
import { CTAButton } from './components/CTAButton'

import { AffiliateLink } from './components/AffiliateLink'
import { ApplyForm } from './components/ApplyForm'
import { PageEffects } from './components/PageEffects'

export default function HomePage() {
  return (
    <>
      <PageEffects />

      {/* ── Nav ── */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo nav-logo-badge" aria-label="HoopoeApps">
            HoopoeApps
          </a>
          <CTAButton href="#apply" className="btn-nav">Submit Your App →</CTAButton>
        </div>
      </nav>

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <span className="section-label hero-anim hero-anim-1">Free ad management for builders</span>
              <h1 className="hero-headline hero-anim hero-anim-2">
                Built a vibe-coded app?<br />
                We&apos;ll run your ads <em>for free.</em>
              </h1>
              <p className="hero-subheadline hero-anim hero-anim-3">
                We set up and manage your Google and Meta ad campaigns.
                You fund the spend. We handle everything else — free.
              </p>
              <div className="hero-cta-group hero-anim hero-anim-4">
                <CTAButton href="#apply" className="btn-primary">Submit Your App →</CTAButton>
                <span className="hero-note">
                  We review every submission personally.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="how">
          <div className="container">
            <div className="how-header reveal">
              <span className="section-label">How it works</span>
              <h2>Three steps from app to audience</h2>
            </div>

            <div className="steps reveal">
              <div className="step">
                <span className="step-number" aria-hidden="true">01</span>
                <h3 className="step-title">Build your app</h3>
                <p className="step-body">
                  Use any vibe coding tool to bring your idea to life. Don&apos;t have an app yet?
                  We recommend Base44 — you can go from idea to live app in a weekend.
                </p>
                <AffiliateLink />
              </div>

              <div className="step">
                <span className="step-number" aria-hidden="true">02</span>
                <h3 className="step-title">Submit it to us</h3>
                <p className="step-body">
                  Tell us what your app does and who it&apos;s for. We review every submission personally
                  and reach out when we&apos;re ready to onboard your app.
                </p>
              </div>

              <div className="step">
                <span className="step-number" aria-hidden="true">03</span>
                <h3 className="step-title">We run your campaigns</h3>
                <p className="step-body">
                  We handle strategy, ad copy, targeting, and ongoing optimization.
                  You connect your ad account and decide your budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What&apos;s Included ── */}
        <section className="included">
          <div className="container">
            <div className="reveal">
              <span className="section-label">What you get</span>
              <h2>Free Google and Meta ad management — everything included</h2>
            </div>

            <div className="included-grid reveal">
              <div className="included-col">
                <h3>We handle</h3>
                <ul className="included-list">
                  <li>Campaign strategy tailored to your app</li>
                  <li>Ad copy and creatives</li>
                  <li>Audience targeting setup</li>
                  <li>Ongoing optimization</li>
                  <li>Performance reporting</li>
                </ul>
              </div>

              <div className="included-col">
                <h3>You bring</h3>
                <ul className="included-list">
                  <li>Your app (live URL)</li>
                  <li>Your Google or Meta Ads account</li>
                  <li>Your ad budget — you decide how much</li>
                  <li>15 minutes to brief us</li>
                </ul>
              </div>
            </div>

            <p className="included-statement reveal">
              Our management work is completely free. No retainer, no commission on spend.
            </p>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="team">
          <div className="container">
            <div className="team-layout reveal">
              <div className="team-photo-wrap">
                <Image
                  src="/images/team.jpg"
                  alt="Ofek and Dan, founders of HoopoeApps"
                  width={1200}
                  height={999}
                  className="team-photo"
                  loading="lazy"
                />
              </div>
              <div className="team-content">
                <span className="section-label">Why we&apos;re doing this</span>
                <h2>Two builders on a mission</h2>
                <p className="team-bio-text">
                  We&apos;re Ofek and Dan — both Forbes 30 Under 30, both builders who&apos;ve shipped
                  products at scale. We&apos;ve seen too many well-crafted apps stay invisible simply
                  because their makers didn&apos;t know how to run ads. We started HoopoeApps to fix that.
                </p>
                <div className="team-links">
                  <a href="https://www.linkedin.com/in/ofekkirzner/" className="team-linkedin-link" target="_blank" rel="noopener noreferrer">
                    Ofek Kirzner →
                  </a>
                  <a href="https://www.linkedin.com/in/danriesel/" className="team-linkedin-link" target="_blank" rel="noopener noreferrer">
                    Dan Riesel →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Application Form ── */}
        <section className="apply" id="apply">
          <div className="container">
            <div className="apply-layout">
              <div className="apply-sidebar reveal">
                <span className="section-label">Ready to grow?</span>
                <h2>Get your app in front of the right audience</h2>
                <p>
                  Tell us about your app and what you&apos;re trying to achieve. We review every submission
                  personally and follow up when we&apos;re ready to take you on.
                </p>
                <div className="apply-trust">
                  <span className="apply-trust-item">No upfront commitment required</span>
                  <span className="apply-trust-item">We review every submission personally</span>
                  <span className="apply-trust-item">Management is completely free</span>
                  <span className="apply-trust-item">You keep full control of your ad account</span>
                </div>
              </div>

              <div className="reveal">
                <ApplyForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="/" className="footer-logo nav-logo-badge nav-logo-badge--sm" aria-label="HoopoeApps">
              HoopoeApps
            </a>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
              <a href="mailto:hello@hoopoeapps.com">Contact</a>
            </nav>
          </div>

          <div className="footer-legal">
            <p className="footer-disclaimer">
              This service is offered on a best-effort basis. We reserve the right to limit, modify,
              or discontinue availability at any time. Submission does not guarantee onboarding or
              campaign delivery.
            </p>
            <p className="footer-affiliate">
              * This page contains affiliate links. We may earn a commission if you sign up to tools
              we recommend, at no cost to you.
            </p>
            <p className="footer-copyright">© 2026 HoopoeApps</p>
          </div>
        </div>
      </footer>
    </>
  )
}
