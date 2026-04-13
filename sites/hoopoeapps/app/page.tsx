import Image from 'next/image'
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
          <span />  {/* spacer for nav layout */}
        </div>
      </nav>

      <main id="main-content">
        {/* ── Mission ── */}
        <section className="team team--hero">
          <div className="container">
            <div className="team-layout reveal">
              <div className="team-photo-wrap">
                <Image
                  src="/images/team.jpg"
                  alt="Ofek and Dan, founders of HoopoeApps"
                  width={1200}
                  height={999}
                  className="team-photo"
                  priority
                />
              </div>
              <div className="team-content">
                <span className="section-label">Our mission</span>
                <h1>On a mission to revolutionize the way apps sell</h1>
                <p className="team-bio-text">
                  We&apos;re Ofek and Dan — both Forbes 30 Under 30, both builders who&apos;ve shipped
                  products at scale. We&apos;ve seen too many well-crafted apps stay invisible simply
                  because their makers didn&apos;t know how to run ads.
                </p>
                <p className="team-bio-text">
                  We started HoopoeApps to change that. We believe every great app deserves
                  to find its audience — and we&apos;re building the tools to make it happen.
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
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-links-area">
          <div className="footer-col">
            <h4 className="footer-col-heading">HoopoeApps</h4>
            <a href="mailto:hello@hoopoeapps.com">Contact</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-heading">Friends</h4>
            <a href="https://www.israelevcharge.com" target="_blank" rel="noopener noreferrer">Israel EV Charge</a>
            <a href="https://www.israelevcharge.com/blog" target="_blank" rel="noopener noreferrer">EV Charging Blog</a>
            <a href="https://www.israelevcharge.com/quiz" target="_blank" rel="noopener noreferrer">Find Your Charger</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p className="footer-copyright">&copy; 2026 HoopoeApps (in formation)</p>
        </div>
      </footer>
    </>
  )
}
