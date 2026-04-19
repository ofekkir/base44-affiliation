'use client'

import { useEffect } from 'react'
import { trackEvent } from '../../lib/analytics'

export function PageEffects() {
  // Scroll-reveal animation
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Scroll depth tracking (25/50/75/100%)
  useEffect(() => {
    const thresholds = [25, 50, 75, 100]
    const fired = new Set<number>()

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const percent = Math.round((scrollTop / docHeight) * 100)

      for (const t of thresholds) {
        if (percent >= t && !fired.has(t)) {
          fired.add(t)
          trackEvent('scroll_depth', { percent: t })
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
