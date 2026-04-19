import Link from 'next/link'
import { AffiliateCTA } from './components/AffiliateCTA'
import { PageEffects } from './components/PageEffects'
import { CookiePreferencesLink } from './components/CookiePreferencesLink'
import { ShareRow } from './components/ShareRow'
import { AppGallery } from './components/AppGallery'
import { APPS, resolveSlug } from '../lib/apps'
import { buildPageUrl } from '../lib/analytics'

export default function HomePage({
  searchParams,
}: {
  searchParams?: { app?: string | string[] }
}) {
  const slug = resolveSlug(searchParams?.app)
  const app = APPS[slug]
  const pageUrl = buildPageUrl(slug)

  return (
    <>
      <PageEffects />

      {/* ── Nav ── */}
      <nav className="nav">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo nav-wordmark" aria-label="Baby Looks Like Me">
            Baby Looks Like Me
          </Link>
          <AffiliateCTA className="btn-nav" location="nav" pageUrl={pageUrl}>
            Try it free
          </AffiliateCTA>
        </div>
      </nav>

      <main id="main-content">
        {/* ── Hero ── */}
        <section className="hero hero--celebration">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-content">
                <h1 className="hero-headline hero-anim hero-anim-2">
                  <em>
                    <span className="hero-highlight">5 fun apps</span> for your
                    baby&apos;s first year.
                  </em>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="gallery-section" id="gallery">
          <AppGallery focused={slug} />
          <div className="container">
            <div className="gallery-cta">
              <AffiliateCTA className="btn-primary" location="gallery_cta" pageUrl={pageUrl}>
                Try it free
              </AffiliateCTA>
            </div>
            <div className="gallery-header reveal">
              <span className="section-label">Every baby moment, its own app</span>
              <h2>A little app for every celebration</h2>
              <p className="gallery-intro">
                Every new baby brings moments worth celebrating. Pick one — we&apos;ve
                pre-written the spec and your app will be built instantly.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3 steps (text-only) ── */}
        <section className="demo">
          <div className="container">
            <div className="demo-header reveal">
              <span className="section-label">Your own app in 3 steps</span>
              <h2>From click to your own app in minutes</h2>
            </div>

            <ol className="steps-simple reveal">
              <li>
                <span className="steps-simple-num" aria-hidden="true">01</span>
                <h3>Sign up to Base44</h3>
                <p>A free account takes about 20 seconds. No credit card.</p>
              </li>
              <li>
                <span className="steps-simple-num" aria-hidden="true">02</span>
                <h3>Paste the prompt, hit Build</h3>
                <p>Base44 reads this page and builds the app you picked — instantly.</p>
              </li>
              <li>
                <span className="steps-simple-num" aria-hidden="true">03</span>
                <h3>Share it with family</h3>
                <p>Your app is live. Send the link to the group chat and let everyone play.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq" id="faq">
          <div className="container">
            <div className="faq-header reveal">
              <span className="section-label">Common questions</span>
              <h2>How the baby moment apps work</h2>
            </div>
            <div className="faq-list reveal">
              <details className="faq-item">
                <summary>What is a &ldquo;baby moment app&rdquo;?</summary>
                <p>A little web app tailor-made for a single occasion around a new baby — a look-alike score, a gender reveal page, a baby-shower game, a monthly photo collage. Each one lives on its own link you can share.</p>
              </details>
              <details className="faq-item">
                <summary>How is the app actually built?</summary>
                <p>You build it on Base44, a no-code AI app builder. Click a &ldquo;Build your app&rdquo; button and we hand Base44 the URL of this page. Base44 reads the spec and generates a working app for you. You can tweak anything afterwards — design, copy, features.</p>
              </details>
              <details className="faq-item">
                <summary>Do I need to write the prompt myself?</summary>
                <p>No. We pre-wrote the prompt: &ldquo;Please build the application that is described at this URL…&rdquo; with a link back to this page. Base44&apos;s AI reads the page, picks up the spec of the app you selected, and builds it.</p>
              </details>
              <details className="faq-item">
                <summary>Is it free?</summary>
                <p>Base44 has a free tier, so you can get started without a credit card. Some apps may need a paid plan if they grow — Base44&apos;s pricing details live on their site.</p>
              </details>
              <details className="faq-item">
                <summary>Which apps can I build here?</summary>
                <p>Today: a baby look-alike scorer, a future-baby preview, a gender reveal page, a baby shower game, and a monthly photo collage. More baby moments coming.</p>
              </details>
              <details className="faq-item">
                <summary>Can grandparents use the apps?</summary>
                <p>Absolutely. The apps you build are simple web pages — anyone in the family can open the link and play. No account, no setup, no tech skills needed.</p>
              </details>
              <details className="faq-item">
                <summary>Is this endorsed by Base44?</summary>
                <p>No. This is an independent fan site that links to Base44 via an affiliate partnership. We&apos;re not officially associated with Base44.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="final-cta">
          <div className="container">
            <div className="final-cta-inner reveal">
              <span className="section-label">Ready?</span>
              <h2>Build your own baby moment app</h2>
              <p className="final-cta-sub">One click. One prompt. Your app is live in minutes.</p>
              <AffiliateCTA
                className="btn-primary btn-primary--lg"
                location="final_cta"
                pageUrl={pageUrl}
              >
                Try it free
              </AffiliateCTA>
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
            <Link href="/" className="footer-logo nav-wordmark nav-wordmark--sm" aria-label="Baby Looks Like Me">
              Baby Looks Like Me
            </Link>
            <nav className="footer-links" aria-label="Footer navigation">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
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
              This site is intended for entertainment purposes. Any AI-generated output (resemblance
              scores, future-baby previews, etc.) is fictional, not medical or genetic analysis, and
              should not be used to determine parentage. This site is not directed at children under 13.
            </p>
            <p className="footer-disclaimer">
              The mockups and screenshots shown on this page are illustrations of what each app
              could look like. The actual app you build on Base44 is generated fresh from the prompt
              and will look different — its final design, features, and look-and-feel are up to you.
            </p>
            <p className="footer-copyright">&copy; 2026 Baby Looks Like Me</p>
          </div>
        </div>
      </footer>
    </>
  )
}
