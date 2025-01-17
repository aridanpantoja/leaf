import { siteConfig } from '@/config'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const dateFallback = new Date().toISOString()
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    siteConfig.url

  return [
    {
      url: SITE_URL,
      lastModified: dateFallback,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: dateFallback,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: dateFallback,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}
