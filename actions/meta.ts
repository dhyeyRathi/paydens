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

  twitterCard?: "summary" | "summary_large_image"
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterSite?: string
  noFollow?: boolean;
  noIndex?: boolean;
  canonUrl?: URL;
}
const META_QUERY = `*[_type == "meta"] {
  "page": seo.page,
  "title": seo.title,
  "description": seo.description,
  "keywords": seo.keywords,
  "ogTitle": seo.ogTitle,
  "ogDescription": seo.ogDescription,
  "ogImage": seo.ogImage,
  "ogUrl": seo.ogUrl,
  "ogType": seo.ogType,
  "twitterCard": seo.twitterCard,
  "twitterTitle": seo.twitterTitle,
  "twitterDescription": seo.twitterDescription,
  "twitterImage": seo.twitterImage,
  "twitterSite": seo.twitterSite,
    "noFollow": seo.nofollow,
    "noIndex" : seo.noindex,
    "canonUrl" : seo.canonurl,
}`;
export const getMeta = async () => {
  const data = await client.fetch<metaProps[]>(META_QUERY);

  return (data ?? [])
}