import { siteConfig } from '@/config'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    siteConfig.url

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/*',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
