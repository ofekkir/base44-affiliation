import type { Metadata } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import { CookieConsentBanner } from './components/CookieConsentBanner'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

// Distinctive serif display font — paired with Manrope for h1/h2 only
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const GTM_ID = (process.env.NEXT_PUBLIC_GTM_ID || '').trim()

export const metadata: Metadata = {
  metadataBase: new URL('https://hoopoeapps.com'),
  title: {
    default: 'HoopoeApps — On a mission to revolutionize the way apps sell',
    template: '%s | HoopoeApps',
  },
  description:
    'We believe every great app deserves to find its audience. HoopoeApps is building the tools to make it happen.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'HoopoeApps — On a mission to revolutionize the way apps sell',
    description:
      'We believe every great app deserves to find its audience. HoopoeApps is building the tools to make it happen.',
    url: 'https://hoopoeapps.com/',
    siteName: 'HoopoeApps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HoopoeApps — On a mission to revolutionize the way apps sell',
    description: 'We believe every great app deserves to find its audience.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        {GTM_ID && <link rel="preconnect" href="https://www.googletagmanager.com" />}
        {/* Google Consent Mode + dataLayer init — inline, runs during parse */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
              dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
            `,
            }}
          />
        )}

        {/* Google Tag Manager — external script always executes */}
        {GTM_ID && (
          <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://hoopoeapps.com/#organization',
                  name: 'HoopoeApps',
                  url: 'https://hoopoeapps.com/',
                  description: 'On a mission to revolutionize the way apps sell.',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://hoopoeapps.com/opengraph-image',
                  },
                  sameAs: [
                    'https://www.linkedin.com/in/ofekkirzner/',
                    'https://www.linkedin.com/in/danriesel/',
                  ],
                  founder: [
                    { '@type': 'Person', name: 'Ofek Kirzner', url: 'https://www.linkedin.com/in/ofekkirzner/' },
                    { '@type': 'Person', name: 'Dan Riesel', url: 'https://www.linkedin.com/in/danriesel/' },
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'hello@hoopoeapps.com',
                    contactType: 'customer support',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://hoopoeapps.com/#website',
                  url: 'https://hoopoeapps.com/',
                  name: 'HoopoeApps',
                  publisher: { '@id': 'https://hoopoeapps.com/#organization' },
                },
              ],
            }),
          }}
        />
      </head>
      <body>

        <a href="#main-content" className="skip-link">Skip to main content</a>

        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {children}

        <CookieConsentBanner gtmConfigured={!!GTM_ID} />
      </body>
    </html>
  )
}
