// "use server"
// import React from 'react'
import type { Metadata } from "next";

import { getMeta } from '@/actions/meta';

interface MetaDataProps {
    PageName: string
    icon?: boolean
}

const getMetaData = async ({ PageName, icon = false }: MetaDataProps) => {
    const iconCont = icon ? '/favicon.ico' : ''

    const meta = await getMeta();
    const pageMeta = meta?.filter((title) => title.page === PageName)[0]

    const metadata: Metadata = {
        title: `Paydens | ${pageMeta?.title}`,
        description: pageMeta?.description,
        ...(icon && {
            icons: {
                icon: '/favicon.ico'
            }
        }),
        keywords: pageMeta?.keywords,
        openGraph: {
            title: pageMeta.ogTitle || pageMeta.title,
            description: pageMeta.ogDescription || pageMeta.description,
            url: pageMeta.ogUrl,
            type: pageMeta.ogType || "website",
            images: pageMeta.ogImage ? [pageMeta.ogImage] : [],
        },
        twitter: {
            card: pageMeta.twitterCard || "summary_large_image",
            title: pageMeta.twitterTitle || pageMeta.ogTitle || pageMeta.title,
            description: pageMeta.twitterDescription || pageMeta.ogDescription || pageMeta.description,
            images: pageMeta.twitterImage ? [pageMeta.twitterImage] : pageMeta.ogImage ? [pageMeta.ogImage] : [],
            ...(pageMeta.twitterSite && {
                site: pageMeta.twitterSite,
            }),
        },
    };

    return metadata

}

export default getMetaData

export function createMetadata(PageName: string, icon = false) {
    return async function generateMetadata(): Promise<Metadata> {
        return await getMetaData({ PageName, icon });
    };
}