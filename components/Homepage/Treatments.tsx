import React from 'react'
import styles from "./homepage.css/treatments.module.css"
import { ArrowButton, Button } from '../ui/Button'
import WhiteGradient from '../ui/WhiteGradient';
import Link from 'next/link';

const Treatments = () => {

    const cardItem = [
        {
            title: "Asthma",
            items: [
                "Advair",
                "Xopenex",
                "Fluticasone + Salmeterol",
                "Levalbuterol",
                "",
            ],
        },
        {
            title: "Stop Smoking",
            items: [
                "Bupropion SR",
                "Chantix",
                "Varenicline",
                "Varenicline",
                "",
            ],
        },
        {
            title: "HRT",
            items: [
                "Premetrium",
                "Xopenex",
                "Fluticasone + Salmeterol",
                "Levalbuterol",
                "",
            ],
        },
    ];
    return (
        <section className={`${styles.treatmentSection}`}>
            <div className='flex w-full justify-between items-baseline gap-[20px]'>
                <h1 className='w-full text-center md:text-start px-4 pt-10 md:pt-20 text-xl md:text-3xl lg:text-5xl font-bold'>
                    Care and <em className='text-button-hover'>Treatments </em>You Can Trust
                </h1>
                <ArrowButton className='hidden md:flex' />
            </div>
            <div className={`${styles.cardsContainer}`}>
                {
                    cardItem.map((item) => (
                        <div key={item.title} className={`${styles.card}`}>
                            <h1>{item.title}</h1>
                            {
                                item.items.map((e, index: number) => (
                                    <button className={`${styles.cardItem}`} key={index}>
                                        <h2> {e}</h2>
                                        {e && <svg
                                            width="10"
                                            height="15"
                                            viewBox="0 0 6 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                                                fill="#444444"
                                            />
                                        </svg>}
                                    </button>
                                ))
                            }

                            <Link href='/all-conditions'>See More</Link>
                        </div>))
                }
            </div>
            <Link href={'/all-conditions'} className='self-center'>
                <Button className='text-sm sm:text-base md:text-lg lg:text-xl !self-center'>View All Treatments</Button>
            </Link>


        </section>
    )
}

export default Treatments