'use client'

import { BASE44_AFFILIATE_URL, trackEvent } from '../../lib/analytics'

interface Props {
  className?: string
  location: string
  children: React.ReactNode
}

export function AffiliateCTA({ className, location, children }: Props) {
  const handleClick = () => {
    trackEvent('affiliate_cta_click', { location })
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('base44:cta-click', { detail: { location } }))
    }
  }

  return (
    <a
      href={BASE44_AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
