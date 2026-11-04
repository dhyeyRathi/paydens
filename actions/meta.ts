import { client } from "@/sanity/lib/client";
import { Slug } from "sanity";

export interface metaProps {
  title: string
  page: string
  description: string
  slug: string;
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: "website" | "article"
  desc?: string
  priority?: number
  twitterCard?: "summary" | "summary_large_image"
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterSite?: string
  noFollow?: boolean;
  noIndex?: boolean;
  canonUrl?: string | URL;
}
const META_QUERY = `*[_type == "meta"] {
  "page": seo.page,
  "title": seo.seo.title,
  "description": seo.seo.description,
  "keywords": seo.seo.keywords,
  "ogTitle": seo.seo.openGraph.title,
  "ogDescription": seo.seo.openGraph.description,
  "ogImage": coalesce(seo.seo.openGraph.image.asset->url, seo.seo.openGraph.imageUrl),
  "ogUrl": seo.seo.openGraph.url,
  "ogType": seo.seo.openGraph.type,
  "twitterCard": seo.seo.twitter.card,
  "twitterTitle": seo.seo.twitter.title,
  "twitterDescription": seo.seo.twitter.description,
  "twitterImage": coalesce(seo.seo.twitter.image.asset->url, seo.seo.twitter.imageUrl),
  "twitterSite": seo.seo.twitter.site,
  "noFollow": coalesce(seo.seo.robots.noFollow, false),
  "noIndex": coalesce(seo.seo.robots.noIndex, false),
  "canonUrl": seo.seo.canonicalUrl,
  "priority": seo.priority
}`;
export const getMeta = async () => {
  const data = await client.fetch<metaProps[]>(META_QUERY);

  return (data ?? [])
}