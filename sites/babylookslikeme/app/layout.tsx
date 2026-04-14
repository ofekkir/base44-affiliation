import type { Metadata, Viewport } from 'next'
import { Manrope, Fraunces } from 'next/font/google'
import { CookieConsentBanner } from './components/CookieConsentBanner'
import { PromptRevealModal } from './components/PromptRevealModal'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const GTM_ID = (process.env.NEXT_PUBLIC_GTM_ID || '').trim()

export const viewport: Viewport = {
  themeColor: '#E8618C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hoopoeapps.com'),
  title: 'Baby Look Alike App: Who Does My Baby Look Like? | Baby Looks Like Me',
  description:
    'Build your own baby look alike app in minutes — AI scores how much your baby resembles mom or dad, feature by feature, with a shareable result card. Free to try.',
  alternates: { canonical: 'https://hoopoeapps.com/babylook' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Baby Look Alike App: Who Does My Baby Look Like?',
    description:
      'Build your own baby look alike app that scores how much your baby resembles mom or dad — feature by feature, shareable in one tap.',
    url: 'https://hoopoeapps.com/babylook',
    siteName: 'Baby Looks Like Me',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Look Alike App: Who Does My Baby Look Like?',
    description: 'Build your own baby look alike app. AI scores mom vs dad, feature by feature. No coding.',
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
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'hello@hoopoeapps.com',
                    contactType: 'customer support',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://hoopoeapps.com/babylook/#website',
                  url: 'https://hoopoeapps.com/babylook',
                  name: 'Baby Looks Like Me',
                  inLanguage: 'en-US',
                  publisher: { '@id': 'https://hoopoeapps.com/#organization' },
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://hoopoeapps.com/babylook/#webpage',
                  url: 'https://hoopoeapps.com/babylook',
                  name: 'Baby Look Alike App: Who Does My Baby Look Like?',
                  isPartOf: { '@id': 'https://hoopoeapps.com/babylook/#website' },
                  inLanguage: 'en-US',
                  description:
                    'Build your own baby look alike app that scores how much your baby resembles mom or dad, with a shareable feature-by-feature breakdown.',
                  datePublished: '2026-04-01',
                  dateModified: '2026-04-14',
                  breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'HoopoeApps', item: 'https://hoopoeapps.com/' },
                      { '@type': 'ListItem', position: 2, name: 'Baby Looks Like Me', item: 'https://hoopoeapps.com/babylook' },
                    ],
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://hoopoeapps.com/babylook/#app',
                  name: 'Baby Look Alike App',
                  applicationCategory: 'LifestyleApplication',
                  operatingSystem: 'Web',
                  description:
                    'AI-powered baby look alike app that scores how much your baby resembles mom or dad across eyes, nose, mouth, and face shape — with a shareable result card.',
                  featureList: [
                    'Photo upload for baby, mom, and dad',
                    'Feature-by-feature resemblance scoring',
                    'Shareable result card with percentage breakdown',
                  ],
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Base44', url: 'https://base44.com' },
                  },
                  isPartOf: { '@id': 'https://hoopoeapps.com/babylook/#webpage' },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
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

        <a href="#main-content" className="skip-link">Skip to main content</a>

        {children}

        <PromptRevealModal />
        <CookieConsentBanner gtmConfigured={!!GTM_ID} />
      </body>
    </html>
  )
}
