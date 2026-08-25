"use client"
import React, { useState } from 'react'
import styles from './ui.css/findButton.module.css'

const FindPharmacyButton = () => {
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
            <button className={`paydence-shadow ${styles.button} relative text-primary font-[600] `} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
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
            {drop && <FindPharmacyCard onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} />}
        </>
    )
}

export default FindPharmacyButton

interface FindPharmacyCardProps {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}


export const FindPharmacyCard = ({ onMouseEnter, onMouseLeave }: FindPharmacyCardProps) => {
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