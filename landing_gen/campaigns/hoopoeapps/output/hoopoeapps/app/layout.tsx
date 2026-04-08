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
const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || ''

export const metadata: Metadata = {
  title: 'HoopoeApps — We run your ads for free',
  description:
    'Built a vibe-coded app? We set up and manage your Google and Meta ad campaigns professionally, at no charge. You fund the ads. We do the work.',
  openGraph: {
    title: 'HoopoeApps — We run your ads for free',
    description:
      'We set up and manage your Google and Meta campaigns — professionally. You fund the ads. We do the work, at no charge.',
    url: 'https://hoopoeapps.com',
    siteName: 'HoopoeApps',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HoopoeApps — We run your ads for free',
    description: 'Free ad management for vibe-coded apps. You set the budget. We handle everything else.',
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

        {/* Hotjar */}
        {HOTJAR_ID && (
          <Script id="hotjar-init" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}
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

        <CookieConsentBanner gtmConfigured={!!GTM_ID} hotjarConfigured={!!HOTJAR_ID} />
      </body>
    </html>
  )
}
