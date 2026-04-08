'use client'

import { useEffect, useRef } from 'react'
import { registerSession } from '../../lib/analytics'

export function PageEffects() {
  const sessionRegistered = useRef(false)

  useEffect(() => {
    if (sessionRegistered.current) return
    sessionRegistered.current = true
    registerSession()
  }, [])

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

  return null
}
