"use client"
import React, { useState } from 'react'
import styles from './ui.css/findButton.module.css'
import { useRouter } from 'next/navigation'

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
            <button className={`paydence-shadow ${styles.button} relative text-primary font-[600] ${className} `} onClick={() => router.push('/findpharmacy')} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2016_2062)">
                        <path d="M10 0C6.48574 0 3.55469 2.83086 3.55469 6.44531C3.55469 7.82039 3.96789 9.04656 4.7609 10.1955L9.50676 17.601C9.73699 17.961 10.2635 17.9603 10.4932 17.601L15.2597 10.1704C16.0356 9.07344 16.4453 7.78543 16.4453 6.44531C16.4453 2.89137 13.5539 0 10 0ZM10 9.375C8.38465 9.375 7.07031 8.06066 7.07031 6.44531C7.07031 4.82996 8.38465 3.51562 10 3.51562C11.6154 3.51562 12.9297 4.82996 12.9297 6.44531C12.9297 8.06066 11.6154 9.375 10 9.375Z" fill="#37B43D" />
                        <path d="M14.5806 13.4648L11.6302 18.0776C10.8665 19.2683 9.12926 19.2644 8.36922 18.0787L5.41398 13.4661C2.81383 14.0672 1.21094 15.1685 1.21094 16.4846C1.21094 18.7682 5.73938 20.0002 10 20.0002C14.2606 20.0002 18.7891 18.7682 18.7891 16.4846C18.7891 15.1676 17.1839 14.0657 14.5806 13.4648Z" fill="#37B43D" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2016_2062">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

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
                <h1 className='flex justify-between items-center w-full text-xl font-bold'>A A Beggs <em ><svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z" fill="#444444" />
                </svg>
                </em></h1>
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
                <h1 className='flex justify-between items-center w-full group hover:text-primary transition-all duration-200 ease-in-out '>choose another pharmacy <em className={`${styles.hr} `}>
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-primary fill-text-secondary" d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z" />
                    </svg>
                </em></h1>
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
                <h1 className='flex justify-between items-center w-full text-2xl sm:text-3xl font-bold pb-4'>{name} <em className='text-xs font-normal' >
                    {distance}
                </em></h1>

                <div className='flex flex-col gap-4 font-[300]  '>
                    <p className=' flex gap-4 items-center'> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_3_16490)">
                            <path d="M10 0C6.48574 0 3.55469 2.83086 3.55469 6.44531C3.55469 7.82039 3.96789 9.04656 4.7609 10.1955L9.50676 17.601C9.73699 17.961 10.2635 17.9603 10.4932 17.601L15.2597 10.1704C16.0356 9.07344 16.4453 7.78543 16.4453 6.44531C16.4453 2.89137 13.5539 0 10 0ZM10 9.375C8.38465 9.375 7.07031 8.06066 7.07031 6.44531C7.07031 4.82996 8.38465 3.51562 10 3.51562C11.6154 3.51562 12.9297 4.82996 12.9297 6.44531C12.9297 8.06066 11.6154 9.375 10 9.375Z" fill="#444444" />
                            <path d="M14.5806 13.4648L11.6302 18.0776C10.8665 19.2683 9.12926 19.2644 8.36922 18.0787L5.41398 13.4661C2.81383 14.0672 1.21094 15.1685 1.21094 16.4846C1.21094 18.7682 5.73938 20.0002 10 20.0002C14.2606 20.0002 18.7891 18.7682 18.7891 16.4846C18.7891 15.1676 17.1839 14.0657 14.5806 13.4648Z" fill="#444444" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3_16490">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                        {address}</p>
                    <p className='flex  gap-4 items-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8465 8.39146C16.8705 5.57171 14.4689 2.98674 11.4929 2.62929C11.4337 2.62227 11.3692 2.61159 11.301 2.60028C11.1537 2.57587 11.0013 2.55078 10.8476 2.55078C10.2376 2.55078 10.0746 2.97923 10.0317 3.23476C9.98993 3.4832 10.0297 3.69184 10.1498 3.85513C10.3518 4.12979 10.7072 4.17855 10.9927 4.21761C11.0763 4.22917 11.1553 4.23991 11.2214 4.25476C13.8951 4.85221 14.7955 5.79153 15.2355 8.44258C15.2462 8.50736 15.251 8.58718 15.2562 8.67184C15.2754 8.98873 15.3154 9.64805 16.0242 9.64805H16.0243C16.0833 9.64805 16.1467 9.64296 16.2127 9.63289C16.8728 9.53258 16.8521 8.92991 16.8422 8.64035C16.8394 8.55879 16.8367 8.48165 16.8436 8.43035C16.8455 8.41743 16.8464 8.40445 16.8465 8.39146Z" fill="#444444" />
                        <path d="M10.6744 1.59553C10.7536 1.60124 10.8286 1.60671 10.891 1.61627C15.2816 2.29149 17.3008 4.37174 17.8604 8.79671C17.8699 8.87192 17.8714 8.96366 17.8729 9.06081C17.8785 9.40652 17.89 10.1257 18.6624 10.1406L18.6863 10.1409C18.9286 10.1409 19.1212 10.0678 19.2591 9.9236C19.4995 9.67211 19.4827 9.29851 19.4692 8.99826C19.4659 8.92459 19.4627 8.85522 19.4635 8.79447C19.5194 4.26888 15.602 0.165093 11.0804 0.0124845C11.0617 0.0118634 11.0438 0.0128571 11.0257 0.0154037C11.0168 0.0167081 11.0004 0.018323 10.9722 0.018323C10.9271 0.018323 10.8716 0.0144099 10.8128 0.0104348C10.7417 0.00559006 10.6611 0 10.5793 0C9.85925 0 9.72236 0.511801 9.70484 0.816894C9.66447 1.52199 10.3466 1.57161 10.6744 1.59553Z" fill="#444444" />
                        <path d="M17.6485 14.5164C17.5552 14.4451 17.4586 14.3714 17.3683 14.2986C16.8889 13.9128 16.3789 13.5572 15.8857 13.2133C15.7833 13.142 15.6809 13.0706 15.579 12.9991C14.9472 12.5553 14.3791 12.3396 13.8425 12.3396C13.1197 12.3396 12.4895 12.739 11.9694 13.5265C11.739 13.8756 11.4594 14.0454 11.1149 14.0454C10.9111 14.0454 10.6796 13.9873 10.4269 13.8725C8.38759 12.9477 6.93138 11.5299 6.09864 9.65824C5.6961 8.75365 5.82659 8.16234 6.53504 7.6811C6.93734 7.40806 7.68616 6.89974 7.63311 5.92632C7.57305 4.82092 5.13405 1.49489 4.10641 1.11713C3.67131 0.957127 3.21417 0.955636 2.74523 1.1134C1.56386 1.51054 0.716095 2.208 0.293362 3.13023C-0.115147 4.02135 -0.0966998 5.06769 0.346716 6.15613C1.62858 9.30309 3.43082 12.0468 5.70355 14.311C7.92815 16.5274 10.6624 18.3429 13.8302 19.7069C14.1157 19.8298 14.4152 19.8968 14.6339 19.9457C14.7085 19.9625 14.7728 19.9768 14.8197 19.9896C14.8455 19.9966 14.8721 20.0004 14.8987 20.0007L14.9237 20.0008C14.9237 20.0008 14.9237 20.0008 14.9239 20.0008C16.4138 20.0008 18.2028 18.6393 18.7522 17.0871C19.2336 15.728 18.3547 15.0562 17.6485 14.5164Z" fill="#444444" />
                        <path d="M11.3314 5.19C11.0763 5.19646 10.5454 5.20962 10.3592 5.75031C10.272 6.00298 10.2825 6.22236 10.3902 6.40236C10.5484 6.66646 10.8513 6.74739 11.1269 6.7918C12.1264 6.95217 12.6397 7.50484 12.7423 8.53093C12.79 9.00937 13.1122 9.34347 13.5259 9.34347C13.5564 9.34347 13.5877 9.34167 13.6189 9.33788C14.1164 9.27869 14.3576 8.91316 14.3358 8.25155C14.3437 7.56105 13.9823 6.77714 13.3677 6.15273C12.751 5.52639 12.0076 5.17366 11.3314 5.19Z" fill="#444444" />
                    </svg>
                        {phone}</p>

                </div>
                <div className='flex gap-1  font-bold items-center mt-4'>
                    <p>Closed - Opens at 9:00 AM </p>

                </div>
            </div>
            {/* <hr className={`h-[1px] w-full bg-text-ph/60 ${styles.hr} `} /> */}
            <div className={`${styles.pharmacyCardVar2Cont2} `}>
                <h1 className='flex gap-4 hover:gap-6 justify-center items-center w-full text-primary transition-all duration-200 ease-in-out pb-2'>View Pharmacy Details <em className={`${styles.hr} `}>
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-primary " d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z" />
                    </svg>
                </em></h1>
            </div>
        </div>
    )
}

export { FindPharmacyCard, FindPharmacyCardVar2 }