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
  themeColor: '#FDFBF9',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hoopoeapps.com'),
  title: 'Baby Moment Apps: A Little App for Every Milestone | Baby Looks Like Me',
  description:
    'Every baby moment deserves its own little app. Build look-alike scores, future-baby previews, gender reveals, shower games, and monthly photo collages — no coding. Free to try.',
  alternates: { canonical: 'https://hoopoeapps.com/babylook' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Baby Moment Apps: A Little App for Every Milestone',
    description:
      'Every baby moment deserves its own little app. Look-alike scores, gender reveals, shower games, and more — built on Base44 in minutes.',
    url: 'https://hoopoeapps.com/babylook',
    siteName: 'Baby Looks Like Me',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Moment Apps: A Little App for Every Milestone',
    description: 'Build a little app for every baby moment — look-alike, gender reveal, shower game, and more. No coding.',
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
                  '@type': 'CollectionPage',
                  '@id': 'https://hoopoeapps.com/babylook/#webpage',
                  url: 'https://hoopoeapps.com/babylook',
                  name: 'Baby Moment Apps: A Little App for Every Milestone',
                  isPartOf: { '@id': 'https://hoopoeapps.com/babylook/#website' },
                  inLanguage: 'en-US',
                  description:
                    'A gallery of little apps for every baby moment — look-alike scores, future-baby previews, gender reveals, shower games, and monthly photo collages. Built on Base44, no coding needed.',
                  datePublished: '2026-04-01',
                  dateModified: '2026-04-15',
                  breadcrumb: {
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'HoopoeApps', item: 'https://hoopoeapps.com/' },
                      { '@type': 'ListItem', position: 2, name: 'Baby Looks Like Me', item: 'https://hoopoeapps.com/babylook' },
                    ],
                  },
                  mainEntity: {
                    '@type': 'ItemList',
                    name: 'Baby moment apps',
                    itemListElement: [
                      { '@type': 'ListItem', position: 1, name: 'Future baby preview', description: 'Upload photos of mom and dad. Preview your future baby with an age slider.' },
                      { '@type': 'ListItem', position: 2, name: 'Gender reveal', description: 'A shareable countdown page with a scratch-to-reveal card and confetti.' },
                      { '@type': 'ListItem', position: 3, name: 'Baby shower game', description: 'Guests vote look-alike, guess due date, and rank names — all on their phones.' },
                      { '@type': 'ListItem', position: 4, name: 'Baby look-alike score', description: 'AI scores how much your baby resembles mom or dad, feature by feature.' },
                      { '@type': 'ListItem', position: 5, name: 'Monthly photo collage', description: 'One photo a month builds a twelve-tile collage for the first-birthday slideshow.' },
                    ],
                  },
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
