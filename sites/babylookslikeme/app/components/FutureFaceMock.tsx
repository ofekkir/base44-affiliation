import Image from 'next/image'

const AGES = ['NB', '1 y', '2 y', '3 y', '5 y']
const ACTIVE_INDEX = 2

export function FutureFaceMock() {
  return (
    <div className="mock-app mock-future">
      <div className="mock-app-header">Your future baby</div>

      <div className="mock-future-parents">
        <div className="mock-future-parent">
          <Image
            src="/babylook/mom.jpg"
            alt=""
            width={44}
            height={44}
            className="mock-future-parent-photo"
          />
          <span>Mom</span>
        </div>
        <div className="mock-future-parents-divider" aria-hidden="true">+</div>
        <div className="mock-future-parent">
          <Image
            src="/babylook/dad.jpg"
            alt=""
            width={44}
            height={44}
            className="mock-future-parent-photo"
          />
          <span>Dad</span>
        </div>
      </div>

      <div className="mock-future-hslider" aria-hidden="true">
        <div className="mock-future-hslider-track">
          <span
            className="mock-future-hslider-thumb"
            style={{ left: `${(ACTIVE_INDEX / (AGES.length - 1)) * 100}%` }}
          />
        </div>
        <div className="mock-future-hslider-labels">
          {AGES.map((age, i) => (
            <span
              key={age}
              className={`mock-future-hslider-label ${
                i === ACTIVE_INDEX ? 'mock-future-hslider-label--active' : ''
              }`}
            >
              {age}
            </span>
          ))}
        </div>
      </div>

      <div className="mock-future-stage">
        <div className="mock-future-baby-frame">
          <Image
            src="/babylook/future-baby.jpg"
            alt=""
            width={140}
            height={140}
            className="mock-future-baby-photo-lg"
          />
          <span className="mock-future-baby-badge">Age 2</span>
        </div>
      </div>
    </div>
  )
}
