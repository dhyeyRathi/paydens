import { client } from "@/sanity/lib/client";

export type metaProps = {
    title: string
    page: string
    description: string
    keywords?: string[]
}

const META_QUERY = `*[_type == "meta"] {
title,
page,
description,
keywords
}`

export const getMeta = async () => {
    const data = await client.fetch<metaProps[]>(META_QUERY);

    return (data ?? [])
}