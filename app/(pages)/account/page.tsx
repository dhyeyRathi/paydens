import PageNameDisp from '@/components/ui/PageNameDisp'
import GetInTouch from './components/GetInTouch'
import LetsConnectSection from '@/components/LetsConnectSection'
import FaqSection from '@/components/FaqSection'
import { createMetadata } from '@/components/GetMetaData';

export const generateMetadata = createMetadata("Account")

const page = () => {
    return (
        <main aria-label="account page" className='px-4 md:px-8 lg:px-15 flex flex-col gap-[clamp(40px,5vw,80px)] w-full'>
            <PageNameDisp PageName={[{
                label: "Home",

            },
            {
                label: "Account",
                href: "/account"
            }]} />
            <GetInTouch />
            <FaqSection />
            <LetsConnectSection />
        </main>
    )
}

export default page