import type { MetadataRoute } from 'next';
import { getConditionMeta } from '@/actions/conditions';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://paydens.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const conditions = await getConditionMeta();
  const data = conditions.filter(item => item.noIndex === false || null)
  console.log("Conditions:", conditions);
  console.log("First condition:", conditions[0]);
  console.log("noIndex values:", conditions.map(item => item.noIndex));

  return data.map((item) => ({
    url: `${baseUrl}/allconditions-health/${item.slug}`,
    lastModified: new Date(),
  }));
}
