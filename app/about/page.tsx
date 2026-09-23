import LetsConnectSection from '@/components/LetsConnectSection'
import Testimonial from '@/components/Testimonial'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import PageNameDisp from '@/components/ui/PageNameDisp'
import React from 'react'
import CoveredIssues from './components/CoveredIssues'
import Doctors from './components/Doctors'
import Stats from './components/Stats'
import Hero from './components/Hero'

const page = () => {
    return (
        <main className='px-4 md:px-8 lg:px-15 flex flex-col gap-[40px] lg:gap-[80px] w-full'>
            <PageNameDisp PageName={[{
                label: "Home",

            },
            {
                label: "About",
                href: "/about"
            }]} />
            <ColorGradientBg />

            <Hero />
            <Stats />
            <Doctors />
            <CoveredIssues />


            <Testimonial />
            <LetsConnectSection />
        </main>
    )
}

export default page