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
                <span className="section-label">Who we are</span>
                <p className="team-bio-text">
                  We&apos;re Ofek and Dan — both Forbes 30 Under 30, both builders who&apos;ve shipped
                  products at scale.
                </p>
                <p className="team-bio-text">
                  We&apos;re building something big. Stay tuned.
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
        <div className="container footer-bottom">
          <a href="mailto:hello@hoopoeapps.com" className="footer-contact">Contact</a>
          <p className="footer-copyright">&copy; 2026 HoopoeApps (in formation)</p>
        </div>
      </footer>
    </>
  )
}
