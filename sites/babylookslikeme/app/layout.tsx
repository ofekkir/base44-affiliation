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

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || ''

export const viewport: Viewport = {
  themeColor: '#E8618C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hoopoeapps.com/babylook'),
  title: 'Who Does My Baby Look Like — Mom or Dad? | Baby Looks Like Me',
  description:
    'Wondering who your baby looks like — mom or dad? Build your own AI resemblance app in minutes that scores each feature and shares the verdict. Free to try.',
  alternates: { canonical: 'https://hoopoeapps.com/babylook' },
  icons: {
    icon: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Who Does Your Baby Look Like — Mom or Dad?',
    description:
      'Settle the family debate. Build your own AI resemblance app that scores your baby against mom and dad — with a shareable breakdown.',
    url: 'https://hoopoeapps.com/babylook',
    siteName: 'Baby Looks Like Me',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who Does Your Baby Look Like — Mom or Dad?',
    description: 'Settle the family debate with an AI resemblance app. Built in minutes, no coding.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        {/* Google Consent Mode — init BEFORE GTM */}
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
            `,
            }}
          />
        )}

        {/* Google Tag Manager */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  '@id': 'https://hoopoeapps.com/babylook/#website',
                  url: 'https://hoopoeapps.com/babylook',
                  name: 'Baby Looks Like Me',
                  inLanguage: 'en-US',
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://hoopoeapps.com/babylook/#webpage',
                  url: 'https://hoopoeapps.com/babylook',
                  name: 'Who Does My Baby Look Like — Mom or Dad?',
                  isPartOf: { '@id': 'https://hoopoeapps.com/babylook/#website' },
                  inLanguage: 'en-US',
                  description:
                    'Build an AI app that scores how much your baby resembles mom vs dad, with a shareable feature-by-feature breakdown.',
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://hoopoeapps.com/babylook/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Who does my baby look like — is there an app for that?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. Build your own baby resemblance app in minutes: upload photos of your baby, mom, and dad, and AI scores the resemblance feature by feature. You get a percentage result plus a breakdown by eyes, nose, mouth, and face shape — all shareable in one tap.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How accurate is AI baby resemblance scoring?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Baby resemblance apps are entertainment tools, not scientific analysis. The AI compares visual features across photos and generates a playful score — think personality quiz, not DNA test. Results vary with photo quality, lighting, and angles.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Does my baby look more like mom or dad?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Babies change a lot during the first year. Research suggests newborns often look slightly more like their fathers in the early weeks, but this shifts quickly. An AI app gives you a fun, shareable score for your own baby right now — just upload three photos.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Is the baby resemblance app free to use?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You build your own version on Base44, a no-code app builder. Base44 offers a free tier so you can get started without a credit card.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What features does the baby resemblance app compare?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'The app analyzes eyes, nose, mouth, and overall face shape — scoring each one against both parents and producing a total percentage score with a shareable card.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can grandparents use a baby resemblance app?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Absolutely. The app is designed to be simple enough for anyone — upload a photo of the baby, mom, and dad, tap Compare, and the result is instant. No account needed to try.',
                      },
                    },
                  ],
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
