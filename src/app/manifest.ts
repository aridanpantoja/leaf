import { siteConfig } from '@/config'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    id: 'leaf-theme',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    categories: ['category1', 'category2', 'category3'],
    lang: 'en',
    dir: 'ltr',
    prefer_related_applications: false,
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '92x92',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
