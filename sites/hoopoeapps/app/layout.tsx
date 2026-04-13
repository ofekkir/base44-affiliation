import type { Metadata } from 'next'
import Script from 'next/script'
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

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://hoopoeapps.com'),
  title: 'HoopoeApps — On a mission to revolutionize the way apps sell',
  description:
    'We believe every great app deserves to find its audience. HoopoeApps is building the tools to make it happen.',
  openGraph: {
    title: 'HoopoeApps — On a mission to revolutionize the way apps sell',
    description:
      'We believe every great app deserves to find its audience. HoopoeApps is building the tools to make it happen.',
    url: 'https://hoopoeapps.com',
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
        {/* Google Consent Mode — init BEFORE GTM */}
        {GTM_ID && (
          <Script id="gcm-init" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `}
          </Script>
        )}

        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script id="gtm-init" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
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
                  url: 'https://hoopoeapps.com',
                  description: 'On a mission to revolutionize the way apps sell.',
                  founder: [
                    { '@type': 'Person', name: 'Ofek Kirzner', url: 'https://www.linkedin.com/in/ofekkirzner/' },
                    { '@type': 'Person', name: 'Dan Riesel', url: 'https://www.linkedin.com/in/danriesel/' },
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://hoopoeapps.com/#website',
                  url: 'https://hoopoeapps.com',
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
