import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'HoopoeApps — On a mission to revolutionize the way apps sell'
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
              fontSize: '48px',
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

        <span
          style={{
            fontSize: '26px',
            color: '#c8a96a',
            textAlign: 'center',
            letterSpacing: '0.04em',
            marginBottom: '28px',
            fontStyle: 'italic',
            fontFamily: 'Georgia, serif',
          }}
        >
          Our mission
        </span>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              fontSize: '58px',
              fontWeight: 800,
              fontStyle: 'italic',
              color: '#FAFAF7',
              textAlign: 'center',
              lineHeight: 1.15,
              fontFamily: 'Georgia, serif',
            }}
          >
            Revolutionizing the way
          </span>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
            <span
              style={{
                fontSize: '58px',
                fontWeight: 800,
                fontStyle: 'italic',
                color: '#FAFAF7',
                lineHeight: 1.15,
                fontFamily: 'Georgia, serif',
              }}
            >
              apps
            </span>
            <span
              style={{
                fontSize: '58px',
                fontWeight: 800,
                fontStyle: 'italic',
                color: '#c8a96a',
                lineHeight: 1.15,
                fontFamily: 'Georgia, serif',
              }}
            >
              find their audience.
            </span>
          </div>
        </div>

        <span
          style={{
            fontSize: '26px',
            color: '#a3a3a3',
            textAlign: 'center',
            lineHeight: 1.4,
            maxWidth: '900px',
          }}
        >
          Every great app deserves to be found. We&apos;re building the tools to make it happen.
        </span>
      </div>
    ),
    { ...size }
  )
}
