'use client'

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { trackEvent } from '../../lib/analytics'

interface Props {
  children: ReactNode
}

/**
 * Desktop: renders children in a 3-column grid (no behavior change).
 * Mobile: horizontal scroll-snap carousel with synced dot indicators.
 *         Step 1 is always the initial view — no auto-cycling so users
 *         don't miss the first step.
 */
export function DemoCarousel({ children }: Props) {
  const slides = Children.toArray(children)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const seenSlides = useRef(new Set<number>([0]))

  const onSlideChange = useCallback((index: number) => {
    if (!seenSlides.current.has(index)) {
      seenSlides.current.add(index)
      trackEvent('carousel_slide_view', { slide: index + 1, total_slides: slides.length })
    }
  }, [slides.length])

  // Sync active dot with scroll position (mobile only)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let raf = 0
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth
        if (w === 0) return
        const i = Math.round(el.scrollLeft / w)
        const clamped = Math.max(0, Math.min(slides.length - 1, i))
        setActive(clamped)
        onSlideChange(clamped)
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [slides.length, onSlideChange])

  const goTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    trackEvent('carousel_dot_click', { slide: i + 1 })
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="demo-carousel reveal">
      <div className="demo-steps" ref={trackRef}>
        {slides}
      </div>
      <div className="demo-dots" role="tablist" aria-label="Demo steps">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-label={`Go to step ${i + 1}`}
            aria-selected={active === i}
            className={`demo-dot${active === i ? ' demo-dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
