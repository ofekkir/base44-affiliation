import Image from 'next/image'

export function ShowerGameMock() {
  const momVotes = 12
  const dadVotes = 9
  const max = Math.max(momVotes, dadVotes)
  const momHeight = (momVotes / max) * 100
  const dadHeight = (dadVotes / max) * 100

  return (
    <div className="mock-app">
      <div className="mock-app-header">Who will baby look like?</div>

      <div className="mock-poll">
        <div className="mock-poll-column">
          <span className="mock-poll-count">{momVotes}</span>
          <div className="mock-poll-bar-track">
            <div
              className="mock-poll-bar mock-poll-bar--mom"
              style={{ height: `${momHeight}%` }}
            />
          </div>
          <Image
            src="/babylook/mom.jpg"
            alt=""
            width={32}
            height={32}
            className="mock-poll-avatar"
          />
          <span className="mock-poll-label">Mom</span>
        </div>

        <div className="mock-poll-column">
          <span className="mock-poll-count">{dadVotes}</span>
          <div className="mock-poll-bar-track">
            <div
              className="mock-poll-bar mock-poll-bar--dad"
              style={{ height: `${dadHeight}%` }}
            />
          </div>
          <Image
            src="/babylook/dad.jpg"
            alt=""
            width={32}
            height={32}
            className="mock-poll-avatar"
          />
          <span className="mock-poll-label">Dad</span>
        </div>
      </div>

      <p className="mock-vote-footer">21 guests voted</p>
      <div className="mock-share-row" aria-hidden="true">
        <span className="mock-share-btn-single">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          Share
        </span>
      </div>
    </div>
  )
}
