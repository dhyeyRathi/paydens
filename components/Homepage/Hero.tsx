import React from 'react'
import styles from './homepage.css/hero.module.css'
import Image from 'next/image'
import heroBan from '@/public/assets/images/homepage/herobg.png'
import { BlueGradient, CyanGradient, GreenGradient } from '../ui/ColorGradient'
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

interface carditemProps {
    label: string
    icon: React.ReactNode
    id: number
}

const Hero = () => {
    const cardItems = [
        {
            id: 1,
            label: "COPD",
            icon: <Lungs />,
        },
        {
            id: 2,
            label: "Weight Loss",
            icon: <Weightloss />,
        },
        {
            id: 3,
            label: "Acne",
            icon: <Acne />
        },
        {
            id: 4,
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
                            cardItems.map((item: carditemProps) => (
                                <button key={item.id} className={`${styles.card}`} aria-label={item.label} >
                                    <div className='flex gap-4 items-center w-auto '>
                                        <div className='h-[44px]'>
                                            {item.icon}
                                        </div>
                                        <span className='text-xl font-[300] font-quicksand'> {item.label}</span>
                                    </div>

                                    <IconHeroChevronRight className="text-[#666666]" />

                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-full'>

                <ul className={`${styles.statsSection}`}>
                    <li>
                        <em>55+ </em>
                        Years of care
                    </li>
                    <li>
                        <NHS />
                        NHS Prescriptions
                    </li>
                    <li>
                        <em>100+ </em>
                        Pharmacies Served
                    </li>
                    <li>
                        <GPHC />
                        GPhC Registered
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Hero