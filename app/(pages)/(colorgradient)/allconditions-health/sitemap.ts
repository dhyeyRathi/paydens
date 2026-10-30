import type { MetadataRoute } from 'next';
import { getConditionMeta } from '@/actions/conditions';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paydens.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const conditions = await getConditionMeta();
  const data = conditions.filter(item => item.noIndex === false || null)
  return data.map((item) => ({
    url: `${baseUrl}/allconditions-health/${item.slug}`,
    lastModified: new Date(),
  }));
}
