import PageNameDisp from '@/components/ui/PageNameDisp'
import React from 'react'
import GetInTouch from './components/GetInTouch'
import LetsConnectSection from '@/components/LetsConnectSection'
import FaqSection from '../../components/FaqSection'

const page = () => {
    return (
        <main className='px-4 md:px-8 lg:px-15 flex flex-col gap-8 md:gap-12 lg:gap-16 w-full'>
            <PageNameDisp PageName={[{
                label: "Home",

            },
            {
                label: "Account",
                href: "/account"
            }]} />
            <GetInTouch />
            <FaqSection />
            <LetsConnectSection />
        </main>
    )
}

export default page