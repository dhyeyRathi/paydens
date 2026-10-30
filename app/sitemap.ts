import { getMeta } from '@/actions/meta';
import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paydens.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getMeta();

  const data = routes.filter(item => item.noIndex === false || null)

  return data.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
