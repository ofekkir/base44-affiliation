import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | HoopoeApps',
  description: 'Terms governing use of the HoopoeApps website.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | HoopoeApps',
    description: 'Terms governing use of the HoopoeApps website.',
    url: 'https://hoopoeapps.com/terms',
    siteName: 'HoopoeApps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | HoopoeApps',
    description: 'Terms governing use of the HoopoeApps website.',
  },
}

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: '80px auto', padding: '0 24px', lineHeight: 1.7 }}>
      <h1>Terms of Service</h1>
      <p><em>Last updated: April 2026</em></p>

      <p>
        By using the HoopoeApps website, you agree to the following terms.
      </p>

      <h2>About this site</h2>
      <p>
        HoopoeApps is a company in formation, founded by Ofek Kirzner and Dan Riesel. This website
        describes our mission and provides links to related projects and tools we use and recommend.
        We do not currently operate a paid service through this site.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Our website contains affiliate links. We may earn a commission if you sign up to tools we
        recommend, at no additional cost to you.
      </p>

      <h2>Changes to the site</h2>
      <p>
        We reserve the right to modify, update, or discontinue any part of the website at any time
        without prior notice. We are not liable for any loss arising from such changes.
      </p>

      <h2>No warranty</h2>
      <p>
        The content on this site is provided &ldquo;as is&rdquo; for informational purposes. We make
        no warranties regarding accuracy, completeness, or fitness for a particular purpose.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@hoopoeapps.com">hello@hoopoeapps.com</a>.
      </p>

      <p><a href="/">← Back to HoopoeApps</a></p>
    </main>
  )
}
