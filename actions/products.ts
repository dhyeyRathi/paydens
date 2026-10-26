"use server"
import { client } from "@/sanity/lib/client";
import { conditionType } from "./conditions";

export type productType = {
    name: string,
    _id: string,
    desc: string,
    price: string,
    imageUrl: string
    conditions: conditionType[]

}

const PRODUCT_QUERY = `*[_type == "product"] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url
    "conditions": conditions[]-> {
            _id,
            condition
    }
}`;

export async function getProducts() {
    const conditions = await client.fetch<productType[]>(PRODUCT_QUERY);

    if (conditions.length === 0) {
        return []
    }

    return conditions
}