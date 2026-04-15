import Image from 'next/image'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Four different baby photos for the first four filled tiles.
const FILLED: { index: number; src: string }[] = [
  { index: 0, src: '/babylook/baby-1.jpg' },
  { index: 1, src: '/babylook/baby-2.jpg' },
  { index: 2, src: '/babylook/baby-3.jpg' },
  { index: 3, src: '/babylook/baby-4.jpg' },
]
const FILLED_MAP = new Map(FILLED.map((f) => [f.index, f.src]))

export function MonthlyCollageMock() {
  return (
    <div className="mock-app">
      <div className="mock-app-header">Month 4 · Hello, May</div>
      <div className="mock-collage-grid mock-collage-grid--spaced">
        {MONTHS.map((label, i) => {
          const src = FILLED_MAP.get(i)
          return (
            <div
              key={label}
              className={`mock-collage-tile ${src ? 'mock-collage-tile--filled' : ''}`}
            >
              {src ? (
                <Image src={src} alt="" width={40} height={40} />
              ) : (
                <>
                  <span className="mock-collage-tile-month">{label}</span>
                  <span className="mock-collage-tile-plus" aria-hidden="true">+</span>
                </>
              )}
            </div>
          )
        })}
      </div>
      <div className="mock-collage-cta-spacer" aria-hidden="true" />
      <div className="mock-btn">Create collage</div>
    </div>
  )
}
