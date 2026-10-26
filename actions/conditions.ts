"use server"
import { client } from "@/sanity/lib/client";


export type conditionType = {
    condition: string,
    _id: string,

    slug: string,
    nhs: boolean
    description: string,
    bannerImg: string
}

const CONDITION_QUERY = `*[_type == "conditions"] | order(_createdAt desc) {
    _id,
    condition,
    description,
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

