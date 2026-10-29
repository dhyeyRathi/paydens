import { client } from "@/sanity/lib/client";

export type metaProps = {
  title: string
  page: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: "website" | "article"

  twitterCard?: "summary" | "summary_large_image"
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  twitterSite?: string
}
const META_QUERY = `*[_type == "meta"] {
  title,
  page,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType,
  "ogImage": ogImage.asset->url,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterSite,
  "twitterImage": twitterImage.asset->url
}`;

export const getMeta = async () => {
  const data = await client.fetch<metaProps[]>(META_QUERY);

  return (data ?? [])
}