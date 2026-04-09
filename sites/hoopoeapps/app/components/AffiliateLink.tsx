'use client'

import { trackEvent, BASE44_AFFILIATE_URL } from '../../lib/analytics'

export function AffiliateLink() {
  return (
    <a
      href={BASE44_AFFILIATE_URL}
      className="step-link"
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackEvent('affiliate_link_click', { destination: 'base44' })}
    >
      Start building on Base44 →
    </a>
  )
}
