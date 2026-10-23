import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.paydens.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/prescriptions',
    '/findpharmacy',
    '/allconditions-health',
    '/all-conditions',
    '/about',
    '/joinourteam',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
