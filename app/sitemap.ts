import { MetadataRoute } from 'next'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['','/about','/contact','/book','/fleets','/services','/locations'].map((p)=> ({
    url: `${SITE}${p || '/'}`,
    changefreq: 'weekly',
    priority: p ? 0.7 : 1.0
  }))
  const services = [
    'airport-limousine','wedding-limousine','night-out-ride-limousine','prom-limousine',
    'corporate-travel','point-to-point','hourly-chauffeur','city-to-city','roadshows','events',
    'business-van','casino-limousine','bachelor-parties-limousine'
  ].map(slug => ({
    url: `${SITE}/services/${slug}`,
    changefreq: 'monthly',
    priority: 0.6
  }))
  return [...routes, ...services]
}
