import FaqSection from '@/components/FaqSection'
import LetsConnectSection from '@/components/LetsConnectSection'
import ConditionsHero from './components/ConditionsHero'
import { ColorGradientBg } from '@/components/ui/ColorGradient'
import PageNameDisp from '@/components/ui/PageNameDisp'
import ConditionsCarousel from './components/ConditionsCarousel'
import { createMetadata } from '@/components/GetMetaData';

export const generateMetadata = createMetadata("All Conditions - Health");

const page = () => {
    return (
        <main aria-label='allconditions-health page' className='px-4 md:px-8 lg:px-15 flex flex-col gap-[clamp(40px,5vw,80px)] w-full'>
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