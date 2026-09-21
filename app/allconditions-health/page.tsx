import FaqSection from '@/components/FaqSection'
import LetsConnectSection from '@/components/LetsConnectSection'
import React from 'react'
import ConditionsHero from './components/ConditionsHero'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import PageNameDisp from '@/components/ui/PageNameDisp'
import ConditionsCarousel from './components/ConditionsCarousel'

const page = () => {
    return (
        <main className='px-4 md:px-8 lg:px-15 flex flex-col gap-8 md:gap-12 lg:gap-16 w-full'>
            <PageNameDisp PageName={[
                {
                    label: "Home",
                },
                {
                    label: "All Conditions",
                }
            ]} />
            <ColorGradientBg />
            <ConditionsHero />
            <ConditionsCarousel />
            <FaqSection />
            <LetsConnectSection />
        </main>
    )
}

export default page