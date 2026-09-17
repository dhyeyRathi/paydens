import PageNameDisp from '@/components/ui/PageNameDisp'
import React from 'react'
import GetInTouch from './components/GetInTouch'
import LetsConnectSection from '@/components/LetsConnectSection'
import FaqSection from '../../components/FaqSection'

const page = () => {
    return (
        <div className='px-4 md:px-8 lg:px-15 flex flex-col gap-8 lg:gap-16'>
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
        </div>
    )
}

export default page