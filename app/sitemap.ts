import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.pinglestone.com'

  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/accommodation`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), priority: 0.2 },
    { url: `${base}/terms`, lastModified: new Date(), priority: 0.2 },
  ]
}
