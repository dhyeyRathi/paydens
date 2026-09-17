import LetsConnectSection from '@/components/LetsConnectSection';
import { Button } from '@/components/ui/Button';
import { InputBarVar2 } from '@/components/ui/InputBar';
import PageNameDisp from '@/components/ui/PageNameDisp';
import styles from "./page.module.css"
import { FindPharmacyCardVar2 } from '@/components/ui/FindPharmacyButton';
import GoogleMapsWrapper from '@/components/GoogleMapWrapper';


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
        <main className='px-4 md:px-8 lg:px-15 flex flex-col gap-8 lg:gap-16 w-full'>
            <PageNameDisp PageName={[{
                label: "Home",

            },
            {
                label: "Find Pharmacy",
                href: "/findpharmacy"
            }]} />
            <h1 className='w-full text-center px-4 pt-10 md:pt-10 text-2xl md:text-3xl lg:text-5xl font-bold'>
                Find Your Nearest <em className='text-button-hover'> Paydens </em> Pharmacy
            </h1>
            <InputBarVar2 placeholder='Enter postcode or place name' divClassName='!self-center !h-10 lg:!h-auto !w-[70%] lg:!w-[40%]'><Button className='!rounded-md text-sm ld:text-base'>Find</Button></InputBarVar2>
            <button className='flex gap-4 self-center text-lg items-center'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V3.78363C7.29215 4.14029 4.14029 7.29215 3.78363 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H3.78363C4.14029 16.7079 7.29215 19.8597 11.25 20.2164V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V20.2164C16.7079 19.8597 19.8597 16.7079 20.2164 12.75H22C22.4142 12.75 22.75 12.4142 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25H20.2164C19.8597 7.29215 16.7079 4.14029 12.75 3.78363V2ZM8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z" fill="#444444" />
            </svg><em className='hover:underline hover:text-primary transition-all duration-300 cursor-pointer'>Use my location</em></button>
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
                                    {n === "Next" &&
                                        <svg
                                            width="10"
                                            height="15"
                                            viewBox="0 0 6 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                                                className='fill-text-secondary group-hover:fill-white'
                                            />
                                        </svg>}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className='relative w-[100%] h-100%'>
                    <GoogleMapsWrapper />
                </div>

            </div>
            <LetsConnectSection />
        </main>
    )
}

export default page