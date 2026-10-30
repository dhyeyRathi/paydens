// "use server"
// import React from 'react'
import type { Metadata } from "next";
import { conditionType, getConditionMeta } from "@/actions/conditions";

import { getMeta, metaProps } from '@/actions/meta';

interface MetaDataProps {
    PageName?: string
    icon?: boolean
    slug?: string
    temp?: String
}

const getMetaData = async ({ PageName, icon = false, slug = "" }: MetaDataProps) => {
    const meta = slug ? await getConditionMeta() : await getMeta();
    const pageMeta: conditionType = meta?.filter((title) => slug ? title.slug === slug : title.page === PageName)[0];

    const metadata: Metadata = {
        title: `Paydens | ${pageMeta?.title}`,
        description: pageMeta?.description,
        ...(icon && {
            icons: {
                icon: '/favicon.ico'
            }
        }),
        robots: {
            index: !pageMeta.noIndex,
            follow: !pageMeta.noFollow
        },
        keywords: pageMeta?.keywords,
        alternates: {
            canonical: slug ? `https://paydens.vercel.app/allconditions-health/${slug}` :
                `https://paydens.vercel.app${pageMeta.canonUrl}`,
        },
        openGraph: {
            title: pageMeta?.ogTitle || pageMeta.title,
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
    return async function generateMetadata({
        params,
    }: {
        params?: Promise<{ slug?: string }>;
    }): Promise<Metadata> {
        const { slug } = (await params) ?? {};
        const temp = slug && PageName

        if (!slug) return getMetaData({
            PageName,
            icon,
            slug,
        });
        return getMetaData({
            temp,
            icon,
            slug,
        });
    };
}