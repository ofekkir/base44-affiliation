'use client'

import { BASE44_AFFILIATE_URL, trackEvent } from '../../lib/analytics'

interface Props {
  className?: string
  location: string
  children: React.ReactNode
}

export function AffiliateCTA({ className, location, children }: Props) {
  return (
    <a
      href={BASE44_AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
      onClick={() => trackEvent('affiliate_cta_click', { location })}
    >
      {children}
    </a>
  )
}
