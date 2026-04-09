import { AffiliateCTA } from './components/AffiliateCTA'
import { PageEffects } from './components/PageEffects'

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
                <span className="section-label hero-anim hero-anim-1">AI Baby Look-Alike Generator</span>
                <h1 className="hero-headline hero-anim hero-anim-2">
                  See what your<br />
                  <em>future baby</em> could look like
                </h1>
                <p className="hero-subheadline hero-anim hero-anim-3">
                  Build your own baby look-alike app in minutes. Upload two parent photos,
                  let AI imagine the rest, and share the results with everyone you love.
                </p>
                <div className="hero-cta-group hero-anim hero-anim-4">
                  <AffiliateCTA className="btn-primary" location="hero">Build Your Baby App Now &rarr;</AffiliateCTA>
                  <span className="hero-note">Your app is ready in minutes — no coding needed</span>
                </div>
              </div>

              {/* Hero phone mockup */}
              <div className="hero-phone hero-anim hero-anim-3">
                <div className="phone-frame phone-frame--tilt">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">Baby Look-Alike</div>
                      <div className="mock-result">
                        <div className="mock-result-icon">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3"/><circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2"/><path d="M10 42c0-8 6-14 14-14s14 6 14 14" stroke="currentColor" strokeWidth="2"/></svg>
                        </div>
                        <span className="mock-result-label">Your baby could look like this!</span>
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

            <div className="demo-steps reveal">
              {/* Step 1: Upload */}
              <div className="demo-step">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">Upload Photos</div>
                      <div className="mock-upload-area">
                        <div className="mock-upload-box">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="1" y="1" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3"/><circle cx="16" cy="13" r="4" stroke="currentColor" strokeWidth="2"/><path d="M8 27c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2"/></svg>
                          <span>Mom&apos;s Photo</span>
                        </div>
                        <div className="mock-upload-box">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="1" y="1" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3"/><circle cx="16" cy="13" r="4" stroke="currentColor" strokeWidth="2"/><path d="M8 27c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2"/></svg>
                          <span>Dad&apos;s Photo</span>
                        </div>
                      </div>
                      <div className="mock-btn">Generate Baby</div>
                    </div>
                  </div>
                </div>
                <span className="demo-step-number" aria-hidden="true">01</span>
                <h3 className="demo-step-title">Upload two photos</h3>
                <p className="demo-step-body">Users add a photo of each parent — that&apos;s all the app needs.</p>
              </div>

              {/* Step 2: Generate */}
              <div className="demo-step">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">Generating...</div>
                      <div className="mock-loading">
                        <div className="mock-spinner" />
                        <span className="mock-loading-text">AI is imagining<br />your baby...</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="demo-step-number" aria-hidden="true">02</span>
                <h3 className="demo-step-title">AI works its magic</h3>
                <p className="demo-step-body">The app analyzes both faces and generates a baby prediction in seconds.</p>
              </div>

              {/* Step 3: Share */}
              <div className="demo-step">
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="mock-app">
                      <div className="mock-app-header">Your Baby!</div>
                      <div className="mock-result">
                        <div className="mock-result-icon">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="20" r="2" fill="currentColor"/><circle cx="30" cy="20" r="2" fill="currentColor"/><path d="M16 30c2 4 12 4 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        </div>
                        <span className="mock-result-label">Your baby could look like this!</span>
                      </div>
                      <div className="mock-share-row">
                        <span className="mock-share-btn">WhatsApp</span>
                        <span className="mock-share-btn">Instagram</span>
                        <span className="mock-share-btn">Copy Link</span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="demo-step-number" aria-hidden="true">03</span>
                <h3 className="demo-step-title">Share the results</h3>
                <p className="demo-step-body">One tap to share with partner, family, or the whole internet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Build Your Own ── */}
        <section className="benefits">
          <div className="container">
            <div className="benefits-header reveal">
              <span className="section-label">Why build it yourself?</span>
              <h2>More than just a fun tool</h2>
            </div>

            <div className="benefits-grid reveal">
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 5C8.5 5 5 9.5 7 14c2 4.5 7 9 7 9s5-4.5 7-9c2-4.5-1.5-9-7-9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3>Surprise your partner</h3>
                <p>Build a personalized app just for the two of you. Way more memorable than a generic website.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="18" cy="10" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 24c0-4 3-7 7-7h6c4 0 7 3 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Share with family</h3>
                <p>Send your custom app to grandparents, friends, and family. Built-in sharing makes it effortless.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Make it yours</h3>
                <p>Your name, your branding, your domain. This is your app, not someone else&apos;s.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 14l4-8 4 4 4-6 4 6 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Go viral</h3>
                <p>Baby look-alike results are irresistibly shareable. Your app could spread on its own.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/><path d="M11 11v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M14 17v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M11 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h3>Monetize it</h3>
                <p>Charge others to use your app. Turn a fun idea into a side income stream.</p>
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
                  Hit the button and Base44 opens with your baby look-alike app already described.
                  No blank page, no setup.
                </p>
              </div>

              <div className="step">
                <span className="step-number" aria-hidden="true">02</span>
                <h3 className="step-title">Your app gets built</h3>
                <p className="step-body">
                  AI generates a fully functional app — photo upload, face analysis,
                  baby generation, sharing — all in minutes.
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
              <AffiliateCTA className="btn-primary" location="how_it_works">Build Your Baby App &rarr;</AffiliateCTA>
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
                <h3>Gender reveal parties</h3>
                <p>Add an extra layer of excitement — let guests see what the baby might look like.</p>
              </div>
              <div className="use-case-item">
                <h3>Baby showers</h3>
                <p>The ultimate icebreaker. Guests upload their own photos and compare results.</p>
              </div>
              <div className="use-case-item">
                <h3>Pregnancy announcements</h3>
                <p>Share the news with a twist — include an AI prediction of your little one.</p>
              </div>
              <div className="use-case-item">
                <h3>Couples just for fun</h3>
                <p>Curious what your future baby might look like? Now you can find out.</p>
              </div>
              <div className="use-case-item">
                <h3>Friends competing</h3>
                <p>&ldquo;Whose genes are stronger?&rdquo; — the debate finally has an answer.</p>
              </div>
              <div className="use-case-item">
                <h3>Content creators</h3>
                <p>Baby look-alike content goes viral. Build an app, create the content, own the audience.</p>
              </div>
            </div>

            <p className="use-cases-stat reveal">
              Over 2,900% growth in searches for baby look-alike tools. The trend is real.
            </p>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="final-cta">
          <div className="container">
            <div className="final-cta-inner reveal">
              <span className="section-label">Ready?</span>
              <h2>Build your baby look-alike app right now</h2>
              <p className="final-cta-sub">One click. One prompt. Your app is live in minutes.</p>
              <AffiliateCTA className="btn-primary btn-primary--lg" location="final_cta">Build Your Baby App &rarr;</AffiliateCTA>
              <span className="final-cta-note">No coding required. Built on Base44.</span>
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
              This site is intended for entertainment purposes. AI-generated images are fictional and do not
              predict actual genetic outcomes. This site is not directed at children under 13.
            </p>
            <p className="footer-copyright">&copy; 2026 Baby Looks Like Me</p>
          </div>
        </div>
      </footer>
    </>
  )
}
