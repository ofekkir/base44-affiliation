import { AvatarMom, AvatarDad } from './MockAvatars'

// Shared score-card screen used in the hero phone and demo step 3.
// Non-competitive, warm phrasing — "a little bit of both", not "winner" / "verdict".
export function ScoreCardMock() {
  return (
    <div className="mock-app mock-app--score">
      <div className="mock-app-header">A little bit of both</div>

      <div className="mock-score-avatars" aria-hidden="true">
        <div className="mock-score-avatar mock-score-avatar--parent">
          <AvatarMom />
          <span>Mom</span>
        </div>
        <div className="mock-score-avatar mock-score-avatar--baby">
          <img
            src="/baby-avatar.jpg"
            alt=""
            width="56"
            height="56"
            className="mock-score-baby-photo"
          />
          <span>Baby</span>
        </div>
        <div className="mock-score-avatar mock-score-avatar--parent">
          <AvatarDad />
          <span>Dad</span>
        </div>
      </div>

      <div className="mock-score">
        <div className="mock-score-percent"><span className="mock-score-label-mom">38% Mom</span> · <span className="mock-score-label-dad">62% Dad</span></div>
        <div className="mock-score-bar">
          <div className="mock-score-bar-fill" style={{ right: '62%' }} />
        </div>
        <ul className="mock-feature-list">
          <li>Eyes <strong>Mom</strong></li>
          <li>Nose <strong>Dad</strong></li>
          <li>Smile <strong>Mom</strong></li>
          <li>Face shape <strong>Dad</strong></li>
        </ul>
      </div>

      <div className="mock-share-row" aria-hidden="true">
        <span className="mock-share-btn-single">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
