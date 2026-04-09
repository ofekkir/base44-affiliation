import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | HoopoeApps',
  description: 'Terms governing use of the HoopoeApps free ad management service.',
}

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: '80px auto', padding: '0 24px', lineHeight: 1.7 }}>
      <h1>Terms of Service</h1>
      <p><em>Last updated: April 2026</em></p>

      <p>
        By submitting your app to HoopoeApps, you agree to the following terms.
      </p>

      <h2>Service description</h2>
      <p>
        HoopoeApps provides free ad campaign management (strategy, copy, targeting, optimisation)
        for eligible apps. You retain full ownership of your ad accounts and all ad spend. We earn
        no commission on your spend.
      </p>

      <h2>Eligibility and acceptance</h2>
      <p>
        Submission does not guarantee onboarding. We review each application individually and
        reserve the right to accept or decline at our discretion.
      </p>

      <h2>Our right to modify or discontinue</h2>
      <p>
        We reserve the right to limit, modify, or discontinue the service at any time without
        prior notice. We are not liable for any loss arising from such changes.
      </p>

      <h2>Affiliate links</h2>
      <p>
        Our website contains affiliate links. We may earn a commission if you sign up to tools we
        recommend, at no additional cost to you.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href="mailto:hello@hoopoeapps.com">hello@hoopoeapps.com</a>.
      </p>

      <p><a href="/">← Back to HoopoeApps</a></p>
    </main>
  )
}
