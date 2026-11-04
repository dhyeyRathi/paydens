"use server"
import { client } from "@/sanity/lib/client";
import { productType } from "./products";
import { metaProps } from "./meta";



export interface conditionType extends metaProps {
    condition?: string;
    _id?: string;
    products?: productType[];
    slug: string;
    nhs?: boolean;
    desc?: string;
    bannerImg?: string;

};

const CONDITION_META_QUERY = `*[_type == "conditions"] {
    _id,
    condition,
    "slug": slug.current,
    "title": coalesce(seo.seo.title, condition),
    "description": coalesce(seo.seo.description, description),
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

const CONDITION_QUERY = `*[_type == "conditions"] {
    _id,
    condition,
    "desc" : description,
    "slug": slug.current ,
    nhs,
    "bannerImg": bannerImg.asset->url,
    "products": *[_type == "product" && references(^._id)] {
        _id,
        name,
        "desc": description,
        price,
        "imageUrl": image.asset->url
    }
    }`;

export async function getCondition() {
    const conditions = await client.fetch<conditionType[]>(CONDITION_QUERY);

    if (conditions.length === 0) {
        return []
    }

    return conditions
}


export async function getConditionMeta() {
    const conditions = await client.fetch<conditionType[]>(CONDITION_META_QUERY);

    if (conditions.length === 0) {
        return []
    }

    return conditions
}

