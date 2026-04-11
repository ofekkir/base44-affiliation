import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Baby Looks Like Me',
  description:
    'Terms of service for Baby Looks Like Me — entertainment disclaimer, affiliate relationship, and age restriction.',
  alternates: { canonical: 'https://babylookslikeme.com/terms' },
}

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Terms of Service</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Service description</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          Baby Looks Like Me is an informational website that showcases the concept of a baby resemblance
          scoring app. We provide affiliate links to Base44, a third-party platform where you can
          build your own app. We do not build, host, or maintain apps on your behalf.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Illustrative mockups</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          The mockups, screenshots, and UI examples shown on this site are illustrations of what a
          resemblance-scoring app could look like. They are not the app you will receive. When you
          click a build button, Base44 generates a new app from the prompt we pass along. Your app&apos;s
          layout, features, copy, color palette, and look-and-feel are determined by Base44&apos;s
          generator and your own customizations — they will differ from the mockups on this site.
          We make no guarantee that the app you build will match the visuals shown here.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Entertainment purposes</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          All content on this site related to baby resemblance scoring is for entertainment purposes only.
          AI-generated resemblance scores are fictional and are not medical, genetic, or parentage analysis.
          No medical or genetic claims are made.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Affiliate relationship</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          This site participates in the Base44 affiliate program. We may earn a commission when you
          create an app through our affiliate links. We are not endorsed by, sponsored by, or officially
          associated with Base44 or Wix.com Ltd.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Age restriction</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          This site is not directed at children under 13 years of age. By using this site, you confirm
          that you are at least 13 years old.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Changes</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          We reserve the right to modify these terms at any time. Continued use of the site constitutes
          acceptance of updated terms.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Contact</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          Questions? Email us at{' '}
          <a href="mailto:hello@hoopoeapps.com" style={{ color: '#E8618C' }}>hello@hoopoeapps.com</a>.
        </p>
      </section>
    </main>
  )
}
