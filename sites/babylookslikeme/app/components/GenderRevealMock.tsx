export function GenderRevealMock() {
  return (
    <div className="mock-app mock-app--reveal">
      <div className="mock-app-header">It&apos;s a …</div>
      <div className="mock-reveal-card">
        <div className="mock-reveal-question" aria-hidden="true">?</div>
        <p className="mock-reveal-hint">Reveals when the timer hits zero</p>
      </div>
      <div className="mock-countdown" aria-hidden="true">
        <span>
          <strong>02</strong>
          <em>days</em>
        </span>
        <span>
          <strong>14</strong>
          <em>hrs</em>
        </span>
        <span>
          <strong>37</strong>
          <em>min</em>
        </span>
      </div>
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
