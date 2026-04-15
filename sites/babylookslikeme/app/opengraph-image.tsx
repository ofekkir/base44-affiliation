import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Baby Looks Like Me — Every baby moment deserves its own little app'
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
          background: '#1a1216',
          fontFamily: "'Arial Black', system-ui, sans-serif",
          padding: '80px',
        }}
      >
        <span
          style={{
            fontSize: '40px',
            fontWeight: 800,
            fontStyle: 'italic',
            color: '#E8618C',
            letterSpacing: '-0.01em',
            fontFamily: 'Georgia, serif',
            marginBottom: '40px',
          }}
        >
          Baby Looks Like Me
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
              fontSize: '60px',
              fontWeight: 800,
              fontStyle: 'italic',
              color: '#FDFBF9',
              textAlign: 'center',
              lineHeight: 1.15,
              fontFamily: 'Georgia, serif',
            }}
          >
            Every baby moment deserves
          </span>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
            <span
              style={{
                fontSize: '60px',
                fontWeight: 800,
                fontStyle: 'italic',
                color: '#FDFBF9',
                lineHeight: 1.15,
                fontFamily: 'Georgia, serif',
              }}
            >
              its own
            </span>
            <span
              style={{
                fontSize: '60px',
                fontWeight: 800,
                fontStyle: 'italic',
                color: '#E8618C',
                lineHeight: 1.15,
                fontFamily: 'Georgia, serif',
              }}
            >
              little app.
            </span>
          </div>
        </div>

        <span
          style={{
            fontSize: '26px',
            color: '#c9b9bf',
            textAlign: 'center',
            lineHeight: 1.4,
            maxWidth: '900px',
          }}
        >
          Look-alike scores · Future-baby previews · Gender reveals · Shower games · Monthly collages
        </span>

        <span
          style={{
            fontSize: '22px',
            color: '#8a7a80',
            textAlign: 'center',
            marginTop: '28px',
          }}
        >
          Built on Base44 in minutes — no coding needed
        </span>
      </div>
    ),
    { ...size }
  )
}
