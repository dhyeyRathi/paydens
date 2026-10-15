import FaqSection from '@/components/FaqSection'
import LetsConnectSection from '@/components/LetsConnectSection'
import OurteamHero from './components/OurteamHero'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import PageNameDisp from '@/components/ui/PageNameDisp'
import JobsCarousel from './components/JobsCarousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Paydens | Join Our Team',
    description: 'Apply to join the Paydens Team',
}

const page = () => {
    return (
        <main aria-label='join our team page' className='px-4 md:px-8 lg:px-15 flex flex-col gap-[clamp(40px,5vw,80px)] w-full'>
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