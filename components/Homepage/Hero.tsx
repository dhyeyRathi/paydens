import React from 'react'
import styles from './homepage.css/hero.module.css'
import Image from 'next/image'
import heroBan from '@/public/assets/images/homepage/herobg.png'
import ColorGradient, { BlueGradient, CyanGradient, GreenGradient } from '../ui/ColorGradient'
import { Button } from '../ui/Button'
import lungs from "@/public/assets/images/homepage/icons/lungs.png";
import waist from "@/public/assets/images/homepage/icons/waist.png";
import acne from "@/public/assets/images/homepage/icons/acne.png";
import diabetes from "@/public/assets/images/homepage/icons/diabetes.png";
import nhs from "@/public/assets/images/ui/nhs.png"
import gphc from "@/public/assets/images/ui/gphc.png"

const Hero = () => {
    const cardItems = [
        {
            label: "COPD",
            icon: lungs,
        },
        {
            label: "Weight Loss",
            icon: waist,
        },
        {
            label: "Acne",
            icon: acne
        },
        {
            label: "Diabetes",
            icon: diabetes
        }
    ]
    return (
        <section className={`${styles.heroCont}`}>
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
                        <h1 className='text-3xl sm:text-5xl lg:text-5xl font-bold'><em className='text-link font-bold'>Healthcare</em> at your fingertips.</h1>
                        <p className='text-lg'>From common ailments to daily medications, our pharmacists provide professional guidance and prescriptions delivered safely to you.</p>
                        <Button className=' paydens-shadow'>Book Appointment</Button>
                    </div>
                    <div className={`${styles.cardsCont}`}>
                        {
                            cardItems.map((item: any, index: number) => (
                                <button key={index} className={`${styles.card}`} aria-label={item.label} role='button'>
                                    <div className='flex gap-4 items-center '>
                                        <Image src={item.icon} height="60" width="60" alt={item.label} />
                                        <h1 className='text-xl font-[300] font-quicksand'> {item.label}</h1>
                                    </div>

                                    <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 14.6924L1.1898 16L7.67036 8.8734C7.77483 8.75921 7.85773 8.62342 7.9143 8.47384C7.97088 8.32426 8 8.16386 8 8.00185C8 7.83984 7.97088 7.67944 7.9143 7.52986C7.85773 7.38029 7.77483 7.24449 7.67036 7.1303L1.1898 0L0.00112152 1.30763L6.08359 8L0 14.6924Z" fill="#666666" />
                                    </svg>

                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <hr className='w-full h-[1px] bg-text-secondary/60 border-none my-2' />
                <div className={`${styles.statsSection}`}>
                    <h1>
                        <em>55+ </em>
                        Years of care
                    </h1>
                    <h1>
                        <Image src={nhs} alt='nhs' className='scale-60' />
                        NHS Prescriptions
                    </h1>
                    <h1>
                        <em>100+ </em>
                        Pharmacies Served
                    </h1>
                    <h1>
                        <Image src={gphc} alt='gphc' className='scale-60' />
                        GPhC Registered
                    </h1>
                </div>
                <hr className='w-full h-[1px] bg-text-secondary/60 border-none my-2' />
            </div>
        </section>
    )
}

export default Hero