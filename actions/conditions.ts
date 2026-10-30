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

const CONDITION_META_QUERY = `*[_type == "conditions"]  {
    _id,
    condition,
    "slug": slug.current,
    "title":coalesce(seo.title, condition),
    "description": coalesce(seo.description, description),
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
    "canonUrl" : seo.canonurl
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

