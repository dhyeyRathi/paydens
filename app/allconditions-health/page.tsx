import FaqSection from '@/components/FaqSection'
import LetsConnectSection from '@/components/LetsConnectSection'
import ConditionsHero from './components/ConditionsHero'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import PageNameDisp from '@/components/ui/PageNameDisp'
import ConditionsCarousel from './components/ConditionsCarousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Paydens | Conditions',
    description: 'Find details about the Conditions you or your loved ones have',
}

const page = () => {
    return (
        <main aria-label='allconditions-health page' className='px-4 md:px-8 lg:px-15 flex flex-col gap-[40px] lg:gap-[80px] w-full'>
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