"use client"
import { useParams } from 'next/navigation'
import LetsConnectSection from '@/components/LetsConnectSection';
import FaqSection from '@/components/FaqSection';
import ProducstsSection from '../components/ProductsSection';
import PageNameDisp from '@/components/ui/PageNameDisp';
import { ColorGradientBg } from '@/components/ui/ColorGradient';
import Banner from '../components/Banner';
import SlugHero from '../components/Hero';
const Page = () => {
    const params = useParams<{ slug: string }>();
    return (
        <main aria-label={params.slug} className='px-4 md:px-8 lg:px-15 flex flex-col gap-[clamp(40px,5vw,80px)] w-full'>
            <PageNameDisp PageName={[
                {
                    label: "Home",
                    href: "/"
                },
                {
                    label: "All Conditions",
                    href: "/allconditions-health"
                },
                {
                    label: "Sore Throat",

                }
            ]} />
            <ColorGradientBg />
            <SlugHero />
            <Banner />

            <ProducstsSection condition='Sore Throat' />

            <FaqSection />
            <LetsConnectSection />
        </main>
    )
}

export default Page