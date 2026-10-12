import FaqSection from '@/components/FaqSection'
import LetsConnectSection from '@/components/LetsConnectSection'
import PageNameDisp from '@/components/ui/PageNameDisp'
import Treatments from './components/Treatments'
import ConditionsHero from './components/ConditionsHero'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Paydens | Conditions',
    description: 'Find cure & medications for common conditions',
}

const page = () => {
    return (
        <main aria-label='all-conditions' className='px-4 md:px-8 lg:px-15 flex flex-col gap-[40px] lg:gap-[80px] w-full'>
            <PageNameDisp PageName={[{
                label: "Home",

            },
            {
                label: "All Conditions",
                href: "/all-conditions"
            }]} />

            <ColorGradientBg />
            <ConditionsHero />

            <Treatments />
            <FaqSection />
            <LetsConnectSection />
        </main>
    )
}

export default page