import React from 'react'
import styles from './homepage.css/hero.module.css'
import Image from 'next/image'
import heroBan from '@/public/assets/images/homepage/herobg.png'
import ColorGradient, { BlueGradient, CyanGradient, GreenGradient } from '../ui/ColorGradient'
import { Button } from '../ui/Button'
import {
    Acne,

    Diabetes,

    Lungs,

    Weightloss,
} from "@/components/Icon/diseases/diseases";
import NHS from '../Icon/Logo/NHS'
import GPHC from '../Icon/Logo/GPHC'
import IconHeroChevronRight from '../Icon/IconHeroChevronRight';

const Hero = () => {
    const cardItems = [
        {
            label: "COPD",
            icon: <Lungs />,
        },
        {
            label: "Weight Loss",
            icon: <Weightloss />,
        },
        {
            label: "Acne",
            icon: <Acne />
        },
        {
            label: "Diabetes",
            icon: <Diabetes />
        }
    ]
    return (
        <section className={`${styles.heroCont} animationPopUp`}>
            <div className={`${styles.heroBan}`}>
                <div className={`${styles.bgWrapper}`}>
                    <Image src={heroBan} alt="hero banner background" fill className='opacity-40 object-cover ' />
                    <div className={`${styles.whiteOL}`}> </div>
                    <GreenGradient className={`${styles.greenGrad}`} />
                    <BlueGradient className={`${styles.blueGrad}`} />
                    <CyanGradient className={`${styles.cyanGrad}`} />
                </div>
                <div className={`${styles.contenCont}`}>
                    <div className={`${styles.textCont}`}>
                        <h1 className='text-3xl sm:text-5xl lg:text-[64px] font-bold'><em className='text-link font-bold'>Healthcare</em> at<br /> your fingertips.</h1>
                        <p className='text-[16px] font-quicksand font-[300]'>From common ailments to daily medications, our pharmacists provide professional guidance and prescriptions delivered safely to you.</p>
                        <Button className=' paydens-shadow'>Book Appointment</Button>
                    </div>
                    <div className={`${styles.cardsCont}`}>
                        {
                            cardItems.map((item: any, index: number) => (
                                <button key={index} className={`${styles.card}`} aria-label={item.label} role='button'>
                                    <div className='flex gap-4 items-center w-auto '>
                                        <div className='h-[44px]'>
                                            {item.icon}
                                        </div>
                                        <h1 className='text-xl font-[300] font-quicksand'> {item.label}</h1>
                                    </div>

                                    <IconHeroChevronRight className="text-[#666666]" />

                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <hr className='w-full h-[1px] bg-text-secondary/60 border-none' />
                <div className={`${styles.statsSection}`}>
                    <h4>
                        <em>55+ </em>
                        Years of care
                    </h4>
                    <h4>
                        <NHS />
                        NHS Prescriptions
                    </h4>
                    <h4>
                        <em>100+ </em>
                        Pharmacies Served
                    </h4>
                    <h4>
                        <GPHC />
                        GPhC Registered
                    </h4>
                </div>
                <hr className='w-full h-[1px] bg-text-secondary/60 border-none ' />
            </div>
        </section>
    )
}

export default Hero