"use client"
import { useParams } from 'next/navigation'
import LetsConnectSection from '@/components/LetsConnectSection';
import FaqSection from '@/components/FaqSection';
import ProducstsSection from '../components/ProductsSection';
import PageNameDisp from '@/components/ui/PageNameDisp';
import { ColorGradientBg } from '@/components/ui/ColorGradient';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import { getCondition, conditionType } from '@/actions/conditions';
import SlugHero from '../components/Hero';




const Page = () => {
    const params = useParams<{ slug: string }>();
    const [condition, setCondition] = useState<conditionType | null>(null)

    useEffect(() => {
        async function getConditionDetails() {
            const data = await getCondition();
            const filteredCondition = data.filter((e) => e.slug == params.slug)

            setCondition(filteredCondition[0] ?? null)
        }
        getConditionDetails()
    }, [params])

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
                    label: condition?.condition,

                }
            ]} />
            <ColorGradientBg />
            <SlugHero condition={condition} />
            <Banner img={condition?.bannerImg ?? "/assets/images/ui/throatpain.png"} condition={condition} />

            <ProducstsSection condition={condition?.condition} products={condition?.products} />

            <FaqSection />
            <LetsConnectSection />
        </main>
    )
}

export default Page