import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Baby Looks Like Me',
  description:
    'Terms of service for Baby Looks Like Me — entertainment disclaimer, affiliate relationship with Base44, and age restriction.',
  alternates: { canonical: 'https://hoopoeapps.com/babylook/terms' },
}

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem' }}>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.9375rem',
          color: '#E8618C',
          textDecoration: 'none',
          marginBottom: '2rem',
        }}
      >
        ← Back to Baby Looks Like Me
      </Link>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Terms of Service</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>What this site is</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          Baby Looks Like Me is a gallery of &ldquo;baby moment&rdquo; app ideas — little apps for
          pregnancy, gender reveals, baby showers, look-alike scoring, and the first year. For
          each app, we provide a description and an affiliate link that opens Base44 with a
          prompt pre-filled, so you can build the app yourself. We do not build, host, deploy, or
          maintain apps on your behalf. The apps you build live on Base44 and are governed by
          Base44&apos;s terms.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Illustrative mockups</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          The mockups, screenshots, sliders, charts, and UI examples shown in the gallery are
          illustrations of what each app idea could look like. They are not the app you will
          receive. When you click a &ldquo;Build your app&rdquo; button, Base44 generates a new
          app from the prompt we pass along, which points back to this page. The app&apos;s
          layout, features, copy, color palette, and look-and-feel are determined by Base44&apos;s
          generator and by any customizations you make — they will differ from the mockups on
          this site. We make no guarantee that the app you build will match the visuals or
          features shown here.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Entertainment purposes</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          All content on this site — and anything you might build from the ideas shown here — is
          intended for entertainment and celebration. AI-generated output such as resemblance
          scores, future-baby previews, and shower-game tallies is fictional. None of it is
          medical analysis, genetic analysis, paternity analysis, or any kind of professional
          advice, and it should never be used for such purposes.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Affiliate relationship</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          This site participates in the Base44 affiliate program. We may earn a commission when
          you create an app through our affiliate links, at no additional cost to you. We are not
          endorsed by, sponsored by, or officially associated with Base44 or Wix.com Ltd. Base44
          is a trademark of its respective owners.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Stock imagery</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          Photos of parents, babies, and families shown on this site are royalty-free stock
          photos used for illustrative purposes. They do not represent real users of the apps,
          real families, or real results produced by any app you build.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Age restriction</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          This site is intended for adults and is not directed at children under 13 years of age.
          By using this site, you confirm that you are at least 13 years old. If you build an app
          on Base44, any uploads or inputs you provide there are subject to Base44&apos;s own
          terms and age policies.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Changes</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          We reserve the right to modify these terms at any time. Continued use of the site
          constitutes acceptance of the updated terms.
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
