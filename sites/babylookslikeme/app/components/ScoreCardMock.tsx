import { AvatarBaby, AvatarMom, AvatarDad } from './MockAvatars'

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
          <AvatarBaby />
          <span>Baby</span>
        </div>
        <div className="mock-score-avatar mock-score-avatar--parent">
          <AvatarDad />
          <span>Dad</span>
        </div>
      </div>

      <div className="mock-score">
        <div className="mock-score-percent">62% Dad · 38% Mom</div>
        <div className="mock-score-bar">
          <div className="mock-score-bar-fill" style={{ right: '38%' }} />
        </div>
        <div className="mock-score-labels">
          <span className="mock-score-label-dad">Dad</span>
          <span className="mock-score-label-mom">Mom</span>
        </div>
        <ul className="mock-feature-list">
          <li>Eyes <strong>Mom</strong></li>
          <li>Nose <strong>Dad</strong></li>
          <li>Smile <strong>Mom</strong></li>
        </ul>
      </div>

      <div className="mock-share-row" aria-hidden="true">
        <span className="mock-share-btn mock-share-btn--whatsapp" title="WhatsApp">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.6-3.2-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.4 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
        </span>
        <span className="mock-share-btn mock-share-btn--instagram" title="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <span className="mock-share-btn mock-share-btn--copy" title="Copy link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 1 0-7.07-7.07l-1.5 1.5" />
            <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 1 0 7.07 7.07l1.5-1.5" />
          </svg>
        </span>
      </div>
    </div>
  )
}
