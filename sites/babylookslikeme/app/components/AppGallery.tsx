'use client'

import { useRouter } from 'next/navigation'
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import { ALL_SLUGS, APPS, type AppSlug } from '../../lib/apps'
import { ScoreCardMock } from './ScoreCardMock'
import { FutureFaceMock } from './FutureFaceMock'
import { GenderRevealMock } from './GenderRevealMock'
import { ShowerGameMock } from './ShowerGameMock'
import { MonthlyCollageMock } from './MonthlyCollageMock'

const MOCKS: Record<AppSlug, () => React.JSX.Element> = {
  'look-alike': ScoreCardMock,
  'future-face': FutureFaceMock,
  'gender-reveal': GenderRevealMock,
  'shower-game': ShowerGameMock,
  'monthly-collage': MonthlyCollageMock,
}

const N = ALL_SLUGS.length
const RENDERED = [...ALL_SLUGS, ...ALL_SLUGS, ...ALL_SLUGS]
const SWIPE_THRESHOLD = 50
const DRAG_IGNORE_CLICK = 8

export function AppGallery({ focused }: { focused: AppSlug }) {
  const router = useRouter()
  const [virtualIndex, setVirtualIndex] = useState(() => N + ALL_SLUGS.indexOf(focused))
  const [instantSnap, setInstantSnap] = useState(false)
  const lastSyncedSlug = useRef<AppSlug>(focused)
  const pointerStart = useRef<{ x: number; id: number } | null>(null)
  const draggedRef = useRef(false)

  // Mirror virtualIndex → URL (?app=slug). Skip the silent snap frames.
  useEffect(() => {
    if (instantSnap) return
    const slug = ALL_SLUGS[virtualIndex % N]
    if (slug !== lastSyncedSlug.current) {
      lastSyncedSlug.current = slug
      router.replace(`?app=${slug}`, { scroll: false })
    }
  }, [virtualIndex, instantSnap, router])

  // If focused prop changes from outside (deep link, manual URL), jump virtualIndex.
  useEffect(() => {
    if (lastSyncedSlug.current === focused) return
    lastSyncedSlug.current = focused
    setVirtualIndex(N + ALL_SLUGS.indexOf(focused))
  }, [focused])

  // After the track's own slide-transition ends, if we've wandered into the
  // outer copies, silently snap back into the middle copy so there's always a
  // card in either direction.
  //
  // We must filter the event: transitionend bubbles, so each card's opacity /
  // transform / filter transition also hits this handler. Without the filter,
  // a single wrap click would fire the snap once per card-property and
  // virtualIndex would fall out of [0, 3N-1] entirely — all cards would get a
  // huge data-distance and go opacity: 0 (the "everything disappears" glitch).
  const onTrackTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    if (e.propertyName !== 'transform') return
    if (instantSnap) return
    if (virtualIndex >= 2 * N) {
      setInstantSnap(true)
      setVirtualIndex((v) => v - N)
    } else if (virtualIndex < N) {
      setInstantSnap(true)
      setVirtualIndex((v) => v + N)
    }
  }

  // Re-enable CSS transition the frame after a silent snap.
  useEffect(() => {
    if (!instantSnap) return
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setInstantSnap(false)),
    )
    return () => cancelAnimationFrame(id)
  }, [instantSnap])

  const go = (delta: number) => setVirtualIndex((v) => v + delta)

  const goToRealIndex = (realIndex: number) => {
    // Stay in whichever copy we're currently in to keep the animation direction sensible
    const base = Math.floor(virtualIndex / N) * N
    setVirtualIndex(base + realIndex)
  }

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return
    pointerStart.current = { x: e.clientX, id: e.pointerId }
    draggedRef.current = false
  }
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = pointerStart.current
    if (!s || s.id !== e.pointerId) return
    if (Math.abs(e.clientX - s.x) > DRAG_IGNORE_CLICK) draggedRef.current = true
  }
  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current
    pointerStart.current = null
    if (!start || start.id !== e.pointerId) return
    const dx = e.clientX - start.x
    if (Math.abs(dx) < SWIPE_THRESHOLD) return
    go(dx < 0 ? 1 : -1)
  }
  const onPointerCancel = () => {
    pointerStart.current = null
    draggedRef.current = false
  }

  const trackStyle = {
    '--focused-index': String(virtualIndex),
    ...(instantSnap ? { transition: 'none' } : {}),
  } as CSSProperties

  const activeRealIndex = virtualIndex % N

  return (
    <div
      className="gallery"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <button
        type="button"
        className="gallery-arrow gallery-arrow--prev"
        onClick={() => go(-1)}
        aria-label="Previous app"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="gallery-viewport">
        <div
          className={`gallery-track${instantSnap ? ' gallery-track--instant' : ''}`}
          style={trackStyle}
          role="list"
          onTransitionEnd={onTrackTransitionEnd}
        >
          {RENDERED.map((slug, i) => {
            const Mock = MOCKS[slug]
            const app = APPS[slug]
            const isFocused = i === virtualIndex
            const distance = Math.min(Math.abs(i - virtualIndex), 4)
            return (
              <button
                type="button"
                key={`${slug}-${i}`}
                onClick={(e) => {
                  if (draggedRef.current) {
                    e.preventDefault()
                    return
                  }
                  if (i !== virtualIndex) setVirtualIndex(i)
                }}
                className={`gallery-card ${isFocused ? 'gallery-card--focused' : ''}`}
                aria-current={isFocused ? 'true' : undefined}
                role="listitem"
                data-distance={distance}
                data-slug={slug}
                tabIndex={isFocused ? 0 : -1}
                aria-label={`${app.thumbTitle} — ${app.occasion}`}
              >
                <div className="phone-frame">
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <Mock />
                  </div>
                </div>
                <span className="gallery-card-occasion">{app.occasion}</span>
                <span className="gallery-card-title">{app.thumbTitle}</span>
              </button>
            )
          })}
        </div>
      </div>

      <button
        type="button"
        className="gallery-arrow gallery-arrow--next"
        onClick={() => go(1)}
        aria-label="Next app"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="gallery-dots" role="tablist" aria-label="Pick a baby moment app">
        {ALL_SLUGS.map((slug, i) => (
          <button
            type="button"
            key={slug}
            onClick={() => goToRealIndex(i)}
            role="tab"
            aria-selected={i === activeRealIndex}
            aria-label={APPS[slug].thumbTitle}
            className={`gallery-dot ${i === activeRealIndex ? 'gallery-dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
