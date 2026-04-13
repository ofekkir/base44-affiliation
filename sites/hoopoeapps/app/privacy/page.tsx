import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | HoopoeApps',
  description: 'How HoopoeApps collects, uses, and protects your data.',
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
        When you submit your app, we collect the information you provide: your app name, app URL,
        description, target audience, budget range, and email address. We also collect standard
        analytics data (pages visited, referring source) via Google Tag Manager if you consent.
      </p>

      <h2>How we use it</h2>
      <p>
        We use your submission data solely to evaluate your app and contact you about onboarding.
        We do not sell your data to third parties.
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
