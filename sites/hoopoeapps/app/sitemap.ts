import type { MetadataRoute } from 'next'

const LAST_MODIFIED = new Date('2026-04-14')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://hoopoeapps.com/',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://hoopoeapps.com/privacy',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://hoopoeapps.com/terms',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
