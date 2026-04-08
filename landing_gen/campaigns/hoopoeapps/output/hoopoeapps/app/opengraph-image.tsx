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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1A1512',
            borderRadius: '16px',
            padding: '18px 48px',
            marginBottom: '48px',
          }}
        >
          <span
            style={{
              fontSize: '52px',
              fontWeight: 800,
              fontStyle: 'italic',
              color: '#FAFAF7',
              letterSpacing: '0.01em',
              fontFamily: 'Georgia, serif',
            }}
          >
            HoopoeApps
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#FAFAF7',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Free ad management
          </span>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#FAFAF7',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            for app builders
          </span>
        </div>

        <span
          style={{
            fontSize: '28px',
            color: '#a3a3a3',
            textAlign: 'center',
          }}
        >
          Google & Meta campaigns — professionally run, at no charge
        </span>
      </div>
    ),
    { ...size }
  )
}
