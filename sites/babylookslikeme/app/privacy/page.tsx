import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Baby Looks Like Me',
  description:
    'Baby Looks Like Me privacy policy — what data we collect, how we use cookies and analytics, and our affiliate link disclosure.',
  alternates: { canonical: 'https://hoopoeapps.com/babylook/privacy' },
}

export default function PrivacyPage() {
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
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Privacy Policy</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>About this site</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          Baby Looks Like Me is a gallery of &ldquo;baby moment&rdquo; app ideas — little apps you
          can build yourself on Base44 to celebrate events like pregnancy, gender reveals, baby
          showers, and a baby&apos;s first year. This page runs on hoopoeapps.com. Base44 is a
          separate, third-party platform with its own privacy policy.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>What we collect</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          We do not collect personal information through forms on this site. You do not need an
          account to browse the gallery. If you click an affiliate link to Base44, you will be
          redirected to Base44 — once there, any information you provide is handled by Base44
          under its own privacy policy, not ours.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Cookies and analytics</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          We may use Google Tag Manager and Microsoft Clarity to understand how visitors interact
          with this site — which apps in the gallery get the most attention, which sections
          convert, and so on. These tools use cookies and similar technologies. You can accept or
          decline cookies via the banner shown on your first visit. Declining cookies disables
          analytics tracking entirely.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Affiliate links</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          This site contains affiliate links to Base44. When you click a &ldquo;Build your app&rdquo;
          button, a tracking parameter is included in the URL so that Base44 can attribute your
          visit to us, and we pass along a prompt describing the app you selected from the
          gallery. We may earn a commission if you make a purchase through these links. We do not
          receive any personal data about you from Base44.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Images on this site</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          The photos of parents, babies, and families you see on this page are royalty-free stock
          photos used to illustrate what an app could look like. They do not depict real users,
          real families, or results of any app you build. No photo you might upload to an app
          you build on Base44 is ever processed by this site.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Contact</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          Questions about this policy? Email us at{' '}
          <a href="mailto:hello@hoopoeapps.com" style={{ color: '#E8618C' }}>hello@hoopoeapps.com</a>.
        </p>
      </section>
    </main>
  )
}
