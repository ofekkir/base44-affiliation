import { AffiliateCTA } from './components/AffiliateCTA'
import { PageEffects } from './components/PageEffects'
import { CookiePreferencesLink } from './components/CookiePreferencesLink'
import { DemoCarousel } from './components/DemoCarousel'
import { ShareRow } from './components/ShareRow'
import { ScoreCardMock } from './components/ScoreCardMock'
import { AvatarBaby, AvatarMom, AvatarDad } from './components/MockAvatars'

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
          <AffiliateCTA className="btn-nav" location="nav">Build It Now</AffiliateCTA>
        </div>
      </nav>

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="hero">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-content">
                <h1 className="hero-headline hero-anim hero-anim-2">
                  <span className="hero-headline-kicker">Who does your baby look more like,</span>
                  <em>mom <span className="hero-amp">or</span> dad?</em>
                </h1>
                <p className="hero-subheadline hero-anim hero-anim-3">
                  Settle the family debate. Build your own app that scores how much your baby
                  resembles each parent — with a shareable feature-by-feature breakdown.
                </p>
                <div className="hero-cta-group hero-anim hero-anim-4">
                  <AffiliateCTA className="btn-primary" location="hero">Build It Now</AffiliateCTA>
                  <span className="hero-note">Your app is ready in minutes — no coding needed</span>
                </div>
              </div>

              {/* Hero phone mockup — resemblance score card */}
              <div className="hero-phone hero-anim hero-anim-3">
                <div className="phone-frame phone-frame--tilt">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <ScoreCardMock />
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
                        <div className="mock-upload-row mock-upload-row--filled">
                          <AvatarBaby />
                          <span>Baby</span>
                          <svg className="mock-upload-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <div className="mock-upload-row">
                          <AvatarMom />
                          <span>Mom</span>
                          <span className="mock-upload-add" aria-hidden="true">+</span>
                        </div>
                        <div className="mock-upload-row">
                          <AvatarDad />
                          <span>Dad</span>
                          <span className="mock-upload-add" aria-hidden="true">+</span>
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
                <h3 className="demo-step-title">Feature-by-feature comparison</h3>
                <p className="demo-step-body">The app analyzes each feature and scores it against both parents.</p>
              </div>

              {/* Step 3: Share the score card */}
              <div className="demo-step">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <ScoreCardMock />
                  </div>
                </div>
                <span className="demo-step-number" aria-hidden="true">03</span>
                <h3 className="demo-step-title">A little bit of both</h3>
                <p className="demo-step-body">One tap sends the verdict to the family group chat.</p>
              </div>
            </DemoCarousel>
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
              <AffiliateCTA className="btn-primary" location="how_it_works">Build It Now</AffiliateCTA>
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
              <AffiliateCTA className="btn-primary btn-primary--lg" location="final_cta">Build It Now</AffiliateCTA>
              <span className="final-cta-note">No coding required. Built on Base44.</span>
              <p className="final-cta-share-label">Or ask a friend to build it for you</p>
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
            <p className="footer-disclaimer">The mockups and screenshots shown on this page are illustrations of what a resemblance-scoring app could look like. The actual app you build on Base44 is generated fresh from your prompt and will look different — its final design, features, and look-and-feel are up to you.</p>
            <p className="footer-copyright">&copy; 2026 Baby Looks Like Me</p>
          </div>
        </div>
      </footer>
    </>
  )
}
