"use client"
import React, { useState } from 'react'
import styles from './ui.css/findButton.module.css'
import { useRouter } from 'next/navigation'
import IconMapPin from '../Icon/IconMapPin'
import IconPhoneOutline from '../Icon/IconPhoneOutline'
import IconChevronRight from '../Icon/IconChevronRight'

interface findPharmacyProps {
    className?: string
    card?: boolean
}

const FindPharmacyButton = ({ className, card = false }: findPharmacyProps) => {

    const router = useRouter();
    const [drop, setDrop] = useState<boolean>(false);
    function handleHover(e: boolean) {
        if (e) {
            setDrop(true);
            return;
        }
        else {
            setDrop(false);
        };

    }


    return (
        <>
            <button aria-label="button" className={`paydence-shadow ${styles.button} relative text-primary font-[600] ${className} `} onClick={() => router.push('/findpharmacy')} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                <IconMapPin />

                Find Pharmacy
                {drop && <div className='absolute h-30 w-50 z-2 inset-0' onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}></div>}

            </button>
            {drop && card && <FindPharmacyCard onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} />}
        </>
    )
}

export default FindPharmacyButton

interface FindPharmacyCardProps {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const FindPharmacyCard = ({ onMouseEnter, onMouseLeave }: FindPharmacyCardProps) => {
    return (
        <div className={`${styles.pharmacyCard} w-[90%] md:w-[30%] lg:w-[25%] xl:w-[20%] min-w-[280px] max-w-[360px] paydens-shadow`} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className={`${styles.pharmacyCardCont} flex flex-col justify-start items-start`}>
                <h3 className='flex justify-between items-center w-full text-xl font-bold'>A A Beggs <em ><IconChevronRight className="text-[#444444]" />
                </em></h3>
                <p className='text-sm font-[500]'>32 Pencester Road, Dover, Kent, CT16 1B</p>
                <div className='flex gap-4 text-sm underline text-link'>
                    <p>01622 754977</p>
                    <p>contact@paydens.com</p>
                </div>
                <div className='flex gap-1 text-sm items-center'>
                    <p>Today’s opening hours </p>
                    <h2 className='rounded-full bg-primary-soft p-2 text-xs'>9:00 AM - 5:30 PM</h2>
                </div>
            </div>
            <hr className={`h-[1px] w-full bg-text-ph/60 ${styles.hr} `} />
            <div className={`${styles.pharmacyCardCont2} `}>
                <h3 className='flex justify-between items-center w-full group hover:text-primary transition-all duration-200 ease-in-out '>choose another pharmacy <em className={`${styles.hr} `}>
                    <IconChevronRight className="group-hover:text-primary text-text-secondary" />
                </em></h3>
            </div>
        </div>
    )
}


interface pharmacyCardVar2Props {
    name?: string;
    distance?: string;
    address?: string;
    phone?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
}


const FindPharmacyCardVar2 = ({ onMouseEnter, onMouseLeave, name, distance, address, phone, className }: pharmacyCardVar2Props) => {
    return (
        <div className={`${styles.pharmacyCardVar2} ${className} shadow-lg`} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className={`${styles.pharmacyCardContVar2} flex flex-col justify-start sm:text-lg items-start`}>
                <h2 className='flex justify-between items-center w-full text-2xl sm:text-25 font-bold pb-4'>{name} <em className='text-12 font-normal' >
                    {distance}
                </em></h2>

                <div className='flex flex-col gap-4 font-[300]  '>
                    <p className=' flex gap-4 items-center text-16'> <IconMapPin className="text-[#444444]" />
                        {address}</p>
                    <p className='flex  gap-4 items-center text-16  '><IconPhoneOutline className="text-[#444444]" />
                        {phone}</p>

                </div>
                <div className='flex gap-1  font-bold items-center mt-4 text-16'>
                    <p>Closed - Opens at 9:00 AM </p>

                </div>
            </div>
            {/* <hr className={`h-[1px] w-full bg-text-ph/60 ${styles.hr} `} /> */}
            <div className={`${styles.pharmacyCardVar2Cont2} `}>
                <button aria-label='Button' className='flex gap-4 hover:gap-6 justify-center items-center w-full text-primary transition-all duration-200 ease-in-out pb-2'>
                    View Pharmacy Details <em className={`${styles.hr} `}>
                        <IconChevronRight className="text-primary" />
                    </em></button>
            </div>
        </div>
    )
}

export { FindPharmacyCard, FindPharmacyCardVar2 }