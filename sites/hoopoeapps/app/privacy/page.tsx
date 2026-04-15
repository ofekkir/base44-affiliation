import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | HoopoeApps',
  description: 'How HoopoeApps collects, uses, and protects your data.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | HoopoeApps',
    description: 'How HoopoeApps collects, uses, and protects your data.',
    url: 'https://hoopoeapps.com/privacy',
    siteName: 'HoopoeApps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | HoopoeApps',
    description: 'How HoopoeApps collects, uses, and protects your data.',
  },
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '80px auto', padding: '0 24px', lineHeight: 1.7 }}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: April 2026</em></p>

      <p>
        HoopoeApps (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy.
        This page describes what data we collect and how we use it.
      </p>

      <h2>What we collect</h2>
      <p>
        On this website we collect standard analytics data (pages visited, referring source,
        approximate location, device type) via Google Tag Manager and Microsoft Clarity — only after
        you grant consent via the cookie banner. If you email us directly, we receive the contents
        of your message and your email address.
      </p>

      <h2>How we use it</h2>
      <p>
        We use analytics data to understand how visitors use the site and to improve it. We use any
        email you send us solely to respond. We do not sell your data to third parties.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies for analytics (Google Analytics via GTM) and session recording (Microsoft Clarity),
        only after you grant consent via the banner on our homepage.
      </p>

      <h2>Contact</h2>
      <p>
        For any privacy-related questions, email us at{' '}
        <a href="mailto:hello@hoopoeapps.com">hello@hoopoeapps.com</a>.
      </p>

      <p><a href="/">← Back to HoopoeApps</a></p>
    </main>
  )
}
