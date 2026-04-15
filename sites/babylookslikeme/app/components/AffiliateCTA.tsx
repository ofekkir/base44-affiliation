'use client'

import { BASE44_AFFILIATE_URL, buildPromptForUrl, trackEvent } from '../../lib/analytics'

interface Props {
  className?: string
  location: string
  pageUrl: string
  children: React.ReactNode
}

export function AffiliateCTA({ className, location, pageUrl, children }: Props) {
  const handleClick = () => {
    trackEvent('affiliate_cta_click', { location, pageUrl })
    const prompt = buildPromptForUrl(pageUrl)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('base44:cta-click', { detail: { location, prompt, pageUrl } }),
      )
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
