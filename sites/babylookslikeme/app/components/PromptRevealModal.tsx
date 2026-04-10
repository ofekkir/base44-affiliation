'use client'

import { useEffect, useRef, useState } from 'react'
import { BASE44_FULL_PROMPT, trackEvent } from '../../lib/analytics'

export function PromptRevealModal() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onCtaClick = () => {
      setOpen(true)
      setCopied(false)
    }
    window.addEventListener('base44:cta-click', onCtaClick)
    return () => window.removeEventListener('base44:cta-click', onCtaClick)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    // Focus the dialog for accessibility
    dialogRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BASE44_FULL_PROMPT)
      setCopied(true)
      trackEvent('prompt_copied')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard API may be blocked; fall back to a select + execCommand
      const ta = document.createElement('textarea')
      ta.value = BASE44_FULL_PROMPT
      ta.style.position = 'fixed'
      ta.style.left = '-9999px'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch {
        /* no-op */
      }
      document.body.removeChild(ta)
    }
  }

  if (!open) return null

  return (
    <div
      className="prompt-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
    >
      <div
        ref={dialogRef}
        className="prompt-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="prompt-modal-title"
        tabIndex={-1}
      >
        <button
          className="prompt-modal-close"
          onClick={() => setOpen(false)}
          aria-label="Close"
          type="button"
        >
          &times;
        </button>

        <div className="prompt-modal-check" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2" />
            <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h2 id="prompt-modal-title" className="prompt-modal-title">
          Base44 is opening in a new tab
        </h2>

        <p className="prompt-modal-body">
          Sign in or create an account, then paste the prompt below into Base44&apos;s
          text box if it isn&apos;t already there. You can come back to this page any time
          to copy it again.
        </p>

        <div className="prompt-modal-prompt" aria-label="Prompt to paste into Base44">
          {BASE44_FULL_PROMPT}
        </div>

        <button
          type="button"
          className={`prompt-modal-copy ${copied ? 'prompt-modal-copy--copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? 'Copied to clipboard ✓' : 'Copy prompt'}
        </button>

        <button
          type="button"
          className="prompt-modal-dismiss"
          onClick={() => setOpen(false)}
        >
          Got it
        </button>
      </div>
    </div>
  )
}
