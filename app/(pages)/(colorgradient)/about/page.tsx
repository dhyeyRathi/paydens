import LetsConnectSection from '@/components/LetsConnectSection'
import Testimonial from '@/components/Testimonial'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import PageNameDisp from '@/components/ui/PageNameDisp'
import CoveredIssues from './components/CoveredIssues'
import Doctors from './components/Doctors'
import Stats from './components/Stats'
import Hero from './components/Hero'
import type { Metadata } from 'next'
import { createMetadata } from '@/components/GetMetaData';

export const generateMetadata = createMetadata("About Us");


const page = () => {
    return (
        <main aria-label='about us page' className='px-4 md:px-8 lg:px-15 flex flex-col gap-[clamp(40px,5vw,80px)] w-full [scroll-snap-align: bottom]'>
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