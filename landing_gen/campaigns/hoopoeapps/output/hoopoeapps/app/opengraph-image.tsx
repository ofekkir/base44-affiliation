import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'HoopoeApps — Free ad management for app builders'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f0f0e',
          fontFamily: "'Arial Black', system-ui, sans-serif",
          padding: '80px',
        }}
      >
        {/* Logo pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#D9541E',
            borderRadius: '16px',
            padding: '18px 48px',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              fontSize: '52px',
              fontWeight: 900,
              color: '#FAFAF7',
              letterSpacing: '3px',
            }}
          >
            HOOPOEAPPS
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: '#FAFAF7',
            textAlign: 'center',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}
        >
          Free ad management
          <br />
          for app builders
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: '28px',
            color: '#a3a3a3',
            textAlign: 'center',
          }}
        >
          Google &amp; Meta campaigns — professionally run, at no charge
        </div>
      </div>
    ),
    { ...size }
  )
}
