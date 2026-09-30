import React from 'react'
import styles from "./homepage.css/treatments.module.css"
import { ArrowButton, Button } from '../ui/Button'
import WhiteGradient from '../ui/WhiteGradient';
import Link from 'next/link';
import IconChevronRight from '../Icon/IconChevronRight';

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
                <h2 className='w-full text-center md:text-start px-4 text-xl md:text-3xl lg:text-heading font-bold'>
                    Care and <em className='text-button-hover'>Treatments </em>You Can Trust
                </h2>
                <ArrowButton className='hidden md:flex' />
            </div>
            <div className={`${styles.cardsContainer}`}>
                {
                    cardItem.map((item) => (
                        <div key={item.title} className={`${styles.card}`}>
                            <h4>{item.title}</h4>
                            {
                                item.items.map((e, index: number) => (
                                    <button className={`${styles.cardItem}`} key={index}>
                                        <h2> {e}</h2>
                                        {e && <IconChevronRight className="text-[#444444]" />}
                                    </button>
                                ))
                            }

                            <Link scroll={false} href='/all-conditions'>See More</Link>
                        </div>))
                }
            </div>
            <Link scroll={false} href={'/all-conditions'} className='self-center'>
                <Button className='text-sm sm:text-base md:text-lg lg:text-xl !self-center'>View All Treatments</Button>
            </Link>


        </section>
    )
}

export default Treatments