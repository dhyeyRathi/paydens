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
        keywords: pageMeta?.keywords
    };

    return metadata

}

export default getMetaData

export function createMetadata(PageName: string, icon = false) {
    return async function generateMetadata(): Promise<Metadata> {
        return await getMetaData({ PageName, icon });
    };
}