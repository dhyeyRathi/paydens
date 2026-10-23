import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.paydens.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio', '/account'],
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/allconditions-health/sitemap.xml`,
    ],
  };
}
