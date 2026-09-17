import FaqSection from '@/components/FaqSection'
import LetsConnectSection from '@/components/LetsConnectSection'
import MobileAppBanner from '@/components/ui/MobileAppBanner'
import PageNameDisp from '@/components/ui/PageNameDisp'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import React from 'react'
import Working from './components/Working'
import PresHero from './components/PresHero'


const page = () => {
    return (
        <main className='px-4 md:px-8 lg:px-15 flex flex-col gap-8 lg:gap-16 w-full '>
            <div className='flex flex-col gap-10'>
                <PageNameDisp PageName={[
                    {
                        label: "Home",
                        href: "/"
                    },
                    {
                        label: "NHS Prescriptions"
                    }
                ]} />
                <ColorGradientBg className="" />
                <PresHero />
            </div>

            <Working />
            <MobileAppBanner />
            <FaqSection />
            <LetsConnectSection />
        </main >
    )
}

export default page