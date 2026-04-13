import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Baby Looks Like Me',
  description:
    'Baby Looks Like Me privacy policy — what data we collect, how we use cookies and analytics, and our affiliate link disclosure.',
  alternates: { canonical: 'https://hoopoeapps.com/babylook/privacy' },
}

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Privacy Policy</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>What we collect</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          We do not collect personal information through forms on this site. If you click an affiliate link,
          you will be redirected to a third-party platform (Base44) which has its own privacy policy.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Cookies and analytics</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          We may use Google Tag Manager and Microsoft Clarity to understand how visitors interact with this site.
          These tools use cookies and similar technologies. You can accept or decline cookies via the
          banner shown on your first visit. Declining cookies disables analytics tracking entirely.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Affiliate links</h2>
        <p style={{ lineHeight: 1.7, color: '#7A6B70' }}>
          This site contains affiliate links to Base44. When you click these links, a tracking parameter
          is included in the URL so that Base44 can attribute your visit to us. We may earn a commission
          if you make a purchase through these links. We do not receive any personal data about you from Base44.
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
