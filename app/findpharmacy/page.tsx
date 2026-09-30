import LetsConnectSection from '@/components/LetsConnectSection';
import { Button } from '@/components/ui/Button';
import { InputBarVar2 } from '@/components/ui/InputBar';
import PageNameDisp from '@/components/ui/PageNameDisp';
import styles from "./page.module.css"
import { FindPharmacyCardVar2 } from '@/components/ui/FindPharmacyButton';
import GoogleMapsWrapper from '@/components/GoogleMapWrapper';
import IconSailorLocation from '@/components/Icon/IconSailorLocation';
import IconChevronRight from '@/components/Icon/IconChevronRight';


const page = () => {
    const pharmacies = [
        {
            name: "A A Beggs",
            distance: "0.3 Miles",
            address: "32 Pencester Road, Dover, Kent, CT16 1B",
            phone: "01304 205406",

        },
        {
            name: "Baxters Pharmacy",
            distance: "0.3 Miles",
            address: "164 Canterbury Road, Garlinge, Margate, Kent, CT9 5JW",
            phone: "01304 205406",

        },
        {
            name: "Bridge Pharmacy",
            distance: "0.3 Miles",
            address: "32 Pencester Road, Dover, Kent, CT16 1B",
            phone: "01304 205406",

        },
        {
            name: "Blooms Pharmacy",
            distance: "0.3 Miles",
            address: "55-57 Bohemia Road, St Leonards on Sea, East Sussex, TN37 6RE",
            phone: "01304 205406",

        },

    ];

    const pagination = [1, 2, 3, 4, "...", 10, "Next"]
    return (
        <main className='px-4 md:px-8 lg:px-15 flex flex-col gap-[30px] w-full'>
            <PageNameDisp PageName={[{
                label: "Home",

            },
            {
                label: "Find Pharmacy",
                href: "/findpharmacy"
            }]} />
            <h1 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-heading font-bold mt-10'>
                Find Your Nearest <em className='text-button-hover'> Paydens </em> Pharmacy
            </h1>
            <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
                <InputBarVar2 placeholder='Enter postcode or place name' divClassName='!self-center  !w-[70%] lg:!w-[40%]'><Button className='!rounded-md text-sm ld:text-base'>Find</Button></InputBarVar2>
                <button className='flex gap-4 self-center text-lg items-center'>
                    <IconSailorLocation className="w-6 h-6 fill-[#444444]" />
                    <em className='hover:underline hover:text-primary transition-all duration-300 cursor-pointer'>Use my location</em>
                </button>
                <div className={`${styles.pharmacyCont}`}>
                    <div className={`${styles.pharmacyListCont}`}>
                        <div className={`${styles.pharmacyList}`}>
                            {pharmacies.map((pharmacy) => (
                                <FindPharmacyCardVar2 key={pharmacy.name} distance={pharmacy.distance} className=''
                                    name={pharmacy.name} address={pharmacy.address} phone={pharmacy.phone} />


                            ))}
                        </div>
                        <div className={`${styles.pagination}`}>
                            {
                                pagination.map((n: string | number, index: number) => (
                                    <button key={index} className={`${index === 0 && styles.active}`}>
                                        {n}
                                        {n == "Next" && <IconChevronRight className="fill-text-secondary group-hover:fill-white" />}

                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='relative w-[100%] h-100%'>
                        <GoogleMapsWrapper />
                    </div>

                </div>

            </div>

            <LetsConnectSection />
        </main>
    )
}

export default page