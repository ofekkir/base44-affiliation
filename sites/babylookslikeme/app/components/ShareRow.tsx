'use client'

import { useState } from 'react'

const SHARE_URL = 'https://babylookslikeme.com'
const SHARE_TEXT = 'Who does your baby look more like — mom or dad? Build your own AI app to settle it:'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    hj?: (...args: unknown[]) => void
  }
}

function track(channel: string) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'share_click', { method: channel })
  }
  if (typeof window.hj === 'function') {
    window.hj('event', `share_${channel}`)
  }
}

export function ShareRow() {
  const [copied, setCopied] = useState(false)

  const nativeShare = async () => {
    track('native')
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: 'Baby Looks Like Me',
          text: SHARE_TEXT,
          url: SHARE_URL,
        })
      } catch {
        /* user cancelled */
      }
    }
  }

  const copyLink = async () => {
    track('copy')
    try {
      await navigator.clipboard.writeText(SHARE_URL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked */
    }
  }

  const waHref = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)}`
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`

  return (
    <div className="share-row" aria-label="Share this page">
      <span className="share-row-label">Or share it with a friend</span>
      <div className="share-row-buttons">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
          aria-label="Share on WhatsApp"
          onClick={() => track('whatsapp')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.15-1.75-.86-2-.96-.3-.1-.5-.15-.7.15-.2.3-.8.96-1 1.16-.2.2-.4.22-.7.07-.3-.15-1.25-.46-2.4-1.47-.9-.8-1.5-1.78-1.66-2.08-.17-.3 0-.47.13-.62.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.7-1.66-.93-2.27-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.52.07-.8.37-.3.3-1.1 1.07-1.1 2.62 0 1.55 1.13 3.04 1.28 3.25.15.2 2.2 3.36 5.34 4.72.75.32 1.33.5 1.8.66.75.24 1.44.2 1.98.12.6-.09 1.85-.75 2.1-1.48.27-.73.27-1.35.2-1.48-.08-.14-.27-.22-.57-.37ZM12.04 3C7.04 3 3 7.03 3 12c0 1.77.52 3.42 1.4 4.8L3 21l4.37-1.38A9 9 0 0 0 12.04 21c5 0 9.04-4.03 9.04-9 0-2.4-.94-4.66-2.64-6.36A9.02 9.02 0 0 0 12.04 3Z"/>
          </svg>
        </a>
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
          aria-label="Share on X"
          onClick={() => track('x')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2H21l-6.52 7.45L22 22h-6.828l-5.35-6.99L3.6 22H.844l6.975-7.97L0 2h6.914l4.84 6.396L18.244 2Zm-1.196 18.52h1.52L6.884 3.39h-1.62l11.784 17.13Z"/>
          </svg>
        </a>
        <a
          href={fbHref}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
          aria-label="Share on Facebook"
          onClick={() => track('facebook')}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.4 21v-8h2.6l.4-3h-3V8.1c0-.86.24-1.45 1.48-1.45H16.6V4c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9V10H8v3h2.52v8h2.88Z"/>
          </svg>
        </a>
        <button
          type="button"
          className="share-btn share-btn--native"
          aria-label="Share via device"
          onClick={nativeShare}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </button>
        <button
          type="button"
          className="share-btn share-btn--copy"
          aria-label={copied ? 'Link copied' : 'Copy link'}
          onClick={copyLink}
        >
          {copied ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/>
              <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
