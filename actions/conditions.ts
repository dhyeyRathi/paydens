"use server"
import { client } from "@/sanity/lib/client";
import { productType } from "./products";

export type conditionType = {
    condition: string,
    _id: string,
    products: productType[]
    slug: string,
    nhs: boolean
    description: string
}

const CONDITION_QUERY = `*[_type == "conditions"] | order(_createdAt desc) {
    _id,
    condition,
    description,
    "slug": slug.current ,
    nhs,
    "products": products[]-> {
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

