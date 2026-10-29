import LetsConnectSection from '@/components/LetsConnectSection';
import FaqSection from '@/components/FaqSection';
import ProducstsSection from '../components/ProductsSection';
import PageNameDisp from '@/components/ui/PageNameDisp';
import { ColorGradientBg } from '@/components/ui/ColorGradient';
import Banner from '../components/Banner';
import { getCondition, conditionType } from '@/actions/conditions';
import SlugHero from '../components/Hero';
import { createMetadata } from '@/components/GetMetaData';

export const generateMetadata = createMetadata("Details");

interface PageProps {
    params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const data = await getCondition();
    const condition = data.find((e) => e.slug === slug) ?? null;



    return (
        <main aria-label={slug} className='px-4 md:px-8 lg:px-15 flex flex-col gap-[clamp(40px,5vw,80px)] w-full'>
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