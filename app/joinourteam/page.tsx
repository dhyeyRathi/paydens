import FaqSection from '@/components/FaqSection'
import LetsConnectSection from '@/components/LetsConnectSection'
import React from 'react'
import OurteamHero from './components/OurteamHero'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import PageNameDisp from '@/components/ui/PageNameDisp'
import JobsCarousel from './components/JobsCarousel'

const page = () => {
    return (
        <main className='px-4 md:px-8 lg:px-15 flex flex-col gap-[40px] lg:gap-[80px] w-full'>
            <PageNameDisp PageName={[{
                label: "Home",

            },
            {
                label: "Join Our Team",
                href: "/joinourteam"
            }]} />
            <ColorGradientBg />
            <OurteamHero />
            <JobsCarousel />
            <FaqSection />
            <LetsConnectSection />

        </main>
    )
}

export default page