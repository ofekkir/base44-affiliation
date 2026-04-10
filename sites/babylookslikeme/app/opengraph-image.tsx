import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Baby Looks Like Me — Who Does Your Baby Look Like, Mom or Dad?'
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
            fontSize: '44px',
            fontWeight: 800,
            fontStyle: 'italic',
            color: '#E8618C',
            letterSpacing: '-0.01em',
            fontFamily: 'Georgia, serif',
            marginBottom: '48px',
          }}
        >
          Baby Looks Like Me
        </span>

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
              color: '#FDFBF9',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Who does your baby
          </span>
          <span
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#FDFBF9',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            look like — mom or dad?
          </span>
        </div>

        <span
          style={{
            fontSize: '28px',
            color: '#a3a3a3',
            textAlign: 'center',
          }}
        >
          Settle the debate. Build your own app — no coding needed.
        </span>
      </div>
    ),
    { ...size }
  )
}
