'use client'

import { trackEvent } from '../../lib/analytics'

interface Props {
  href: string
  className: string
  children: React.ReactNode
}

export function CTAButton({ href, className, children }: Props) {
  return (
    <a href={href} className={className} onClick={() => trackEvent('cta_click')}>
      {children}
    </a>
  )
}
