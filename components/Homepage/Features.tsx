import React from 'react'
import styles from "./homepage.css/features.module.css"
import { ButtonVar2 } from '../ui/Button'
import scope from "@/assets/images/homepage/ui/scope.png"
import pills from "@/assets/images/homepage/ui/pills.png"
import hand from "@/assets/images/homepage/ui/hand.png"
import papers from "@/assets/images/homepage/ui/papers.png"
import meter from "@/assets/images/homepage/ui/meter.png"
import meds from "@/assets/images/homepage/ui/meds.png"
import arrow from "@/assets/images/ui/arrow_up_right.png"
import Image from 'next/image'

const Features = () => {
    return (
        <section className={`${styles.sectionCont}`}>
            <h1 className='w-full text-center px-4 pt-10 md:pt-20 text-2xl md:text-3xl lg:text-4xl font-bold'>
                <em className='text-button-hover'>Expert</em>, Friendly <em className='text-button-hover'>Care</em> on Your High Street and Online
            </h1>
            <div className={`${styles.cardCont}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.docService} ${styles.boxes} paydens-shadow`}>
                        <h1>Explore Online doctor services</h1>
                        <ButtonVar2 className='scale-120 ml-4'>Start Consultation</ButtonVar2>
                        <Image src={scope} alt='icons' className='absolute scale-60 top-[-2%] left-[60%] ' />
                    </div>
                    <div className={`${styles.instantHelp} ${styles.boxes} paydens-shadow`}>
                        <h1>Get instant help for minor ailments (private)</h1>
                        <ButtonVar2 className='scale-120 ml-4'>Get Help Now</ButtonVar2>
                        <Image src={pills} alt='icons' className='absolute scale-30 right-[-37%] ' />
                    </div>
                </div>
                <div className={`${styles.container2}`}>
                    <div className={`${styles.twinRow}`}>
                        <div className={`${styles.fluJab} paydens-shadow`}>
                            <h1>get your <em>Flu Jab</em></h1>
                            <ButtonVar2 className='scale-120 ml-4'>Book Now</ButtonVar2>
                            <Image src={hand} alt='icons' className='absolute  right-[-20%] ' />
                        </div>
                        <div className={`${styles.NHSpres} paydens-shadow`}>
                            <h1>Manage my NHS <br />Prescriptions</h1>
                            <ButtonVar2 className='scale-120 ml-4'>Manage Prescriptions</ButtonVar2>
                            <Image src={papers} alt='icons' className='absolute  top-[44%] rotate-[-10deg] right-[-30%] ' />
                        </div>

                    </div>


                    <div className={`${styles.weightLoss} paydens-shadow`}>
                        <h1>Begin Your <em>Weight Loss</em> <br /> plan</h1>
                        <ButtonVar2 className='scale-120 ml-4'>Start Now</ButtonVar2>
                        <Image src={meter} alt='icons' className='absolute scale-70 bottom-[-15%] right-[-20%]' />
                    </div>
                </div>
                <div className={`${styles.container}`}>
                    <div className={`${styles.NHSservices} paydens-shadow`}>
                        <h1>Access Free NHS Pharmacy Services</h1>
                        <ButtonVar2 className='scale-120 ml-4'>Get Help Now</ButtonVar2>
                        <Image src={meds} alt='icons' className='absolute  scale-80 top-[30%] right-[-10%] ' />
                    </div>
                    <div className={`${styles.shopHealth} paydens-shadow`}>
                        <h1>Shop Health and <br /> Wellness <br />Essentials Online</h1>
                        {/* <ButtonVar2 className='scale-120 ml-4'>Book Now</ButtonVar2> */}
                        <Image src={arrow} alt='icons' className='absolute  scale-75 right-[5%] top-[30%]' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features