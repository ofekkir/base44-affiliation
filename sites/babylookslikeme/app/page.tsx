import { AffiliateCTA } from './components/AffiliateCTA'
import { PageEffects } from './components/PageEffects'
import { CookiePreferencesLink } from './components/CookiePreferencesLink'
import { DemoCarousel } from './components/DemoCarousel'
import { ShareRow } from './components/ShareRow'

export default function HomePage() {
  return (
    <>
      <PageEffects />

      {/* ── Nav ── */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="/" className="nav-logo nav-wordmark" aria-label="Baby Looks Like Me">
            Baby Looks Like Me
          </a>
          <AffiliateCTA className="btn-nav" location="nav">Build Your App &rarr;</AffiliateCTA>
        </div>
      </nav>

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-content">
                <span className="section-label hero-anim hero-anim-1">AI Baby Resemblance App</span>
                <h1 className="hero-headline hero-anim hero-anim-2">
                  <span className="hero-headline-kicker">Who does your baby look more like,</span>
                  <em>mom <span className="hero-amp">or</span> dad?</em>
                </h1>
                <p className="hero-subheadline hero-anim hero-anim-3">
                  Settle the family debate. Build your own AI app that scores how much your baby
                  resembles each parent — with a shareable feature-by-feature breakdown.
                </p>
                <div className="hero-cta-group hero-anim hero-anim-4">
                  <AffiliateCTA className="btn-primary" location="hero">Build Your App — Free &rarr;</AffiliateCTA>
                  <span className="hero-note">Your app is ready in minutes — no coding needed</span>
                </div>
              </div>

              {/* Hero phone mockup — resemblance score card */}
              <div className="hero-phone hero-anim hero-anim-3">
                <div className="phone-frame phone-frame--tilt">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">Who&apos;s the winner?</div>
                      <div className="mock-score">
                        <div className="mock-score-percent">62% Dad</div>
                        <div className="mock-score-bar" aria-hidden="true">
                          <div className="mock-score-bar-fill" style={{ width: '62%' }} />
                        </div>
                        <div className="mock-score-labels">
                          <span className="mock-score-label-dad">Dad 62%</span>
                          <span className="mock-score-label-mom">Mom 38%</span>
                        </div>
                        <ul className="mock-feature-list">
                          <li><span>Eyes</span><strong>Mom</strong></li>
                          <li><span>Nose</span><strong>Dad</strong></li>
                          <li><span>Mouth</span><strong>Mom</strong></li>
                          <li><span>Face shape</span><strong>Dad</strong></li>
                        </ul>
                      </div>
                      <div className="mock-share-row">
                        <span className="mock-share-btn">Share</span>
                        <span className="mock-share-btn">Save</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── App Demo ── */}
        <section className="demo">
          <div className="container">
            <div className="demo-header reveal">
              <span className="section-label">See it in action</span>
              <h2>Your app, three simple steps</h2>
            </div>

            <DemoCarousel>
              {/* Step 1: Upload baby + parents */}
              <div className="demo-step">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">Upload 3 photos</div>
                      <div className="mock-upload-stack">
                        <div className="mock-upload-row">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="2"/></svg>
                          <span>Baby</span>
                        </div>
                        <div className="mock-upload-row">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="2"/></svg>
                          <span>Mom</span>
                        </div>
                        <div className="mock-upload-row">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="2"/></svg>
                          <span>Dad</span>
                        </div>
                      </div>
                      <div className="mock-btn">Compare</div>
                    </div>
                  </div>
                </div>
                <span className="demo-step-number" aria-hidden="true">01</span>
                <h3 className="demo-step-title">Upload three photos</h3>
                <p className="demo-step-body">Baby, mom, and dad — that&apos;s all the app needs.</p>
              </div>

              {/* Step 2: Analyze features */}
              <div className="demo-step">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">Analyzing...</div>
                      <div className="mock-analyze">
                        <div className="mock-spinner" />
                        <ul className="mock-analyze-list">
                          <li className="mock-analyze-item mock-analyze-item--done">Eyes <span>✓</span></li>
                          <li className="mock-analyze-item mock-analyze-item--done">Nose <span>✓</span></li>
                          <li className="mock-analyze-item">Mouth <span>…</span></li>
                          <li className="mock-analyze-item mock-analyze-item--dim">Face shape</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="demo-step-number" aria-hidden="true">02</span>
                <h3 className="demo-step-title">AI compares features</h3>
                <p className="demo-step-body">The app analyzes each feature and scores it against both parents.</p>
              </div>

              {/* Step 3: Share the score card */}
              <div className="demo-step">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">The verdict</div>
                      <div className="mock-score">
                        <div className="mock-score-percent">62% Dad</div>
                        <div className="mock-score-bar" aria-hidden="true">
                          <div className="mock-score-bar-fill" style={{ width: '62%' }} />
                        </div>
                        <div className="mock-score-labels">
                          <span className="mock-score-label-dad">Dad 62%</span>
                          <span className="mock-score-label-mom">Mom 38%</span>
                        </div>
                      </div>
                      <div className="mock-share-row">
                        <span className="mock-share-btn">WhatsApp</span>
                        <span className="mock-share-btn">Instagram</span>
                        <span className="mock-share-btn">Copy</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="demo-step-number" aria-hidden="true">03</span>
                <h3 className="demo-step-title">Share the score card</h3>
                <p className="demo-step-body">One tap to send the result to family, friends, or the group chat.</p>
              </div>
            </DemoCarousel>
          </div>
        </section>

        {/* ── Why Build Your Own ── */}
        <section className="benefits">
          <div className="container">
            <div className="benefits-header reveal">
              <span className="section-label">Why build it yourself?</span>
              <h2>More than just a family debate</h2>
            </div>

            <div className="benefits-grid reveal">
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 5C8.5 5 5 9.5 7 14c2 4.5 7 9 7 9s5-4.5 7-9c2-4.5-1.5-9-7-9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3>Settle the debate</h3>
                <p>Every family argues about it. Let AI score the resemblance and finally end the discussion.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="10" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 24c0-4 3-7 7-7h6c4 0 7 3 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Shareable score cards</h3>
                <p>Every result is a ready-to-share card. Drop it in the family WhatsApp and watch the reactions.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Feature-by-feature breakdown</h3>
                <p>Not just a single number — eyes, nose, mouth, face shape, all scored individually.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14l4-8 4 4 4-6 4 6 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Grandparent-friendly</h3>
                <p>Simple enough that anyone in the family can upload photos and get a result in seconds.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/><path d="M11 11v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14 17v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M11 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Make it yours</h3>
                <p>Your name, your branding, your domain. Run it as a fun side project — or monetize it.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 22l4-8 4 3 4-6 4 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="21" cy="7" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                </span>
                <h3>No code needed</h3>
                <p>The entire app gets built from a single prompt. Click one button and it&apos;s done.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="how">
          <div className="container">
            <div className="how-header reveal">
              <span className="section-label">How it works</span>
              <h2>From click to live app in minutes</h2>
            </div>

            <div className="steps reveal">
              <div className="step">
                <span className="step-number" aria-hidden="true">01</span>
                <h3 className="step-title">Click the button below</h3>
                <p className="step-body">
                  Hit the button and Base44 opens with your baby resemblance app already described.
                  No blank page, no setup.
                </p>
              </div>

              <div className="step">
                <span className="step-number" aria-hidden="true">02</span>
                <h3 className="step-title">Your app gets built</h3>
                <p className="step-body">
                  AI generates a fully functional app — photo upload, feature analysis,
                  resemblance scoring, shareable cards — all in minutes.
                </p>
              </div>

              <div className="step">
                <span className="step-number" aria-hidden="true">03</span>
                <h3 className="step-title">Customize and launch</h3>
                <p className="step-body">
                  Add your name, tweak the design, connect a domain if you want.
                  Then share it with the world.
                </p>
              </div>
            </div>

            <div className="how-cta reveal">
              <AffiliateCTA className="btn-primary" location="how_it_works">Build Your App — Free &rarr;</AffiliateCTA>
            </div>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section className="use-cases">
          <div className="container">
            <div className="reveal">
              <span className="section-label">Perfect for</span>
              <h2>Every occasion, one app</h2>
            </div>

            <div className="use-cases-grid reveal">
              <div className="use-case-item">
                <h3>Family WhatsApp debates</h3>
                <p>Every family has the argument. Settle it with a score card everyone can see.</p>
              </div>
              <div className="use-case-item">
                <h3>First-birthday posts</h3>
                <p>A year in, everyone has an opinion. Post the AI verdict and watch the comments roll in.</p>
              </div>
              <div className="use-case-item">
                <h3>Meet-the-baby announcements</h3>
                <p>Introduce the baby with a twist — reveal who they take after alongside the first photos.</p>
              </div>
              <div className="use-case-item">
                <h3>Grandparent gifts</h3>
                <p>Grandparents love proof the baby looks like their side. Give them the receipts.</p>
              </div>
              <div className="use-case-item">
                <h3>Baby shower games</h3>
                <p>Play the ultimate guess-who game — show a newborn photo and let guests vote before the AI verdict drops.</p>
              </div>
              <div className="use-case-item">
                <h3>Content creators</h3>
                <p>Resemblance reveals are pure engagement bait. Build the app, own the content, own the audience.</p>
              </div>
            </div>

            <p className="use-cases-stat reveal">
              Every family has the argument. Now the debate ends with a score card.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq" id="faq">
          <div className="container">
            <div className="faq-header reveal">
              <span className="section-label">Questions parents ask</span>
              <h2>Who does my baby look like? Here&apos;s how to find out.</h2>
            </div>
            <div className="faq-list reveal">
              <details className="faq-item">
                <summary>Who does my baby look like — is there an app for that?</summary>
                <p>Yes. This page shows you how to build your own baby resemblance app in minutes. Upload photos of your baby, mom, and dad — the app scores the resemblance feature by feature and gives you a shareable verdict with a percentage (for example, &ldquo;62% Dad, 38% Mom&rdquo;).</p>
              </details>
              <details className="faq-item">
                <summary>How accurate is AI baby resemblance scoring?</summary>
                <p>It&apos;s entertainment, not science. The AI compares visual features across photos — think personality quiz, not DNA test. Results vary with photo quality, lighting, and angles. It&apos;s meant to be fun and shareable, not authoritative.</p>
              </details>
              <details className="faq-item">
                <summary>Does my baby look more like mom or dad?</summary>
                <p>Babies change a lot during the first year. Research suggests newborns often look slightly more like their fathers early on, but this shifts fast. For your own baby, the AI gives you a fun percentage score right now — just upload three photos.</p>
              </details>
              <details className="faq-item">
                <summary>Is the app free to use?</summary>
                <p>You build your own version on Base44, a no-code app builder. Base44 has a free tier, so you can get started without a credit card.</p>
              </details>
              <details className="faq-item">
                <summary>What features does the app compare?</summary>
                <p>Eyes, nose, mouth, and overall face shape — each scored against both parents. The final output is a percentage score plus a feature-by-feature breakdown on a shareable card.</p>
              </details>
              <details className="faq-item">
                <summary>Can grandparents use it?</summary>
                <p>Absolutely. The app is simple enough for anyone in the family to use — upload three photos, tap Compare, get a result. No account, no setup, no tech skills needed.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="final-cta">
          <div className="container">
            <div className="final-cta-inner reveal">
              <span className="section-label">Ready?</span>
              <h2>Build your baby resemblance app right now</h2>
              <p className="final-cta-sub">One click. One prompt. Your app is live in minutes.</p>
              <AffiliateCTA className="btn-primary btn-primary--lg" location="final_cta">Build Your App — Free &rarr;</AffiliateCTA>
              <span className="final-cta-note">No coding required. Built on Base44.</span>
              <ShareRow />
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="/" className="footer-logo nav-wordmark nav-wordmark--sm" aria-label="Baby Looks Like Me">
              Baby Looks Like Me
            </a>
            <nav className="footer-links" aria-label="Footer navigation">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms</a>
              <CookiePreferencesLink />
              <a href="mailto:hello@hoopoeapps.com">Contact</a>
            </nav>
          </div>

          <div className="footer-legal">
            <p className="footer-affiliate">
              This page contains affiliate links to Base44. If you create an app through our links,
              we may earn a commission at no additional cost to you. We are not endorsed by, sponsored by,
              or officially associated with Base44.
            </p>
            <p className="footer-disclaimer">
              This site is intended for entertainment purposes. AI resemblance scores are fictional,
              not medical or genetic analysis, and should not be used to determine parentage.
              This site is not directed at children under 13.
            </p>
            <p className="footer-copyright">&copy; 2026 Baby Looks Like Me</p>
          </div>
        </div>
      </footer>
    </>
  )
}
