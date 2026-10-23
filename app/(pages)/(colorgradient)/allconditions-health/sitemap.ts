import type { MetadataRoute } from 'next';
import { getCondition } from '@/actions/conditions';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.paydens.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const conditions = await getCondition();

  return conditions.map((item) => ({
    url: `${baseUrl}/allconditions-health/${item.slug}`,
    lastModified: new Date(),
  }));
}
