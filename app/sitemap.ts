import type { MetadataRoute } from 'next'
import { siteUrl } from './layout'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date() }, { url: `${siteUrl}/portfolio`, lastModified: new Date() }]
}
