"use server"
import { client } from "@/sanity/lib/client";

export type productType = {
    name: string,
    _id: string,
    desc: string,
    price: string,
    imageUrl: string

}

const PRODUCT_QUERY = `*[_type == "product"] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url`;

export async function getProducts() {
    const conditions = await client.fetch<productType[]>(PRODUCT_QUERY);

    if (conditions.length === 0) {
        return []
    }

    return conditions
}