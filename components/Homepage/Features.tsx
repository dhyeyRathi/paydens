import React from 'react'
import styles from "./homepage.css/features.module.css"
import { ButtonVar2 } from '../ui/Button'
import scope from "@/public/assets/images/homepage/ui/scope.png"
import pills from "@/public/assets/images/homepage/ui/pills.png"
import hand from "@/public/assets/images/homepage/ui/hand.png"
import papers from "@/public/assets/images/homepage/ui/papers.png"
import meter from "@/public/assets/images/homepage/ui/meter.png"
import meds from "@/public/assets/images/homepage/ui/meds.png"
import Image from 'next/image'
import Link from 'next/link'

const Features = () => {
    return (
        <section className={`${styles.sectionCont}`}>
            <h1 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-5xl font-bold'>
                <em className='text-button-hover'>Expert</em>, Friendly <em className='text-button-hover'>Care</em> on Your High Street and Online
            </h1>
            <div className={`${styles.cardCont}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.docService} ${styles.boxes} paydens-shadow`}>
                        <h2>Explore Online doctor services</h2>
                        <ButtonVar2 className='scale-120 ml-4'>Start Consultation</ButtonVar2>
                        <Image src={scope} alt='icons' className='absolute scale-60 top-[-2%] left-[60%] ' />
                    </div>
                    <div className={`${styles.instantHelp} ${styles.boxes} paydens-shadow`}>
                        <h2>Get instant help for minor ailments (private)</h2>
                        <ButtonVar2 className='scale-120 ml-4'>Get Help Now</ButtonVar2>
                        <Image src={pills} alt='icons' className='absolute scale-30 right-[-37%] ' />
                    </div>
                </div>




                <div className={`${styles.container2}`}>
                    <div className={`${styles.twinRow}`}>
                        <div className={`${styles.fluJab} paydens-shadow`}>
                            <h2>get your <em>Flu Jab</em></h2>
                            <ButtonVar2 className='scale-120 ml-4'>Book Now</ButtonVar2>
                            <Image src={hand} alt='icons' className='absolute scale-90 right-[-35%] ' />
                        </div>
                        <div className={`${styles.NHSpres} paydens-shadow`}>
                            <h2>Manage my NHS <br />Prescriptions</h2>
                            <Link href='/prescriptions'><ButtonVar2 className='scale-120 ml-4'>Manage Prescriptions</ButtonVar2></Link>
                            <Image src={papers} alt='icons' className='absolute  top-[44%] rotate-[-10deg] right-[-30%] ' />
                        </div>

                    </div>


                    <div className={`${styles.weightLoss} paydens-shadow`}>
                        <h2>Begin Your <em>Weight Loss</em> <br /> plan</h2>
                        <ButtonVar2 className='scale-120 ml-15'>Start Now</ButtonVar2>
                        <Image src={meter} alt='icons' className='absolute scale-70 bottom-[-15%] right-[-20%]' />
                    </div>
                </div>




                <div className={`${styles.container3}`}>
                    <div className={`${styles.NHSservices} paydens-shadow`}>
                        <h2>Access Free NHS Pharmacy Services</h2>
                        <ButtonVar2 className='scale-120 ml-4'>Get Help Now</ButtonVar2>
                        <Image src={meds} alt='icons' className='absolute  scale-80 top-[30%] right-[-10%] ' />
                    </div>
                    <div className={`${styles.shopHealth} paydens-shadow`}>
                        <h2>Shop Health and <br /> Wellness <br />Essentials Online</h2>
                        {/* <ButtonVar2 className='scale-120 ml-4'>Book Now</ButtonVar2> */}
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute scale-130 bottom-[20%] right-[8%] group'>
                            <rect width="50" height="50" rx="25" className='fill-link group-hover:fill-button-hover transition-all duration-300 ease-in-out' />
                            <path d="M32.424 17.2521C32.3758 16.7019 31.8908 16.2949 31.3406 16.3431L22.3749 17.1275C21.8247 17.1756 21.4177 17.6606 21.4658 18.2108C21.514 18.761 21.999 19.168 22.5492 19.1199L30.5187 18.4226L31.216 26.3922C31.2641 26.9424 31.7491 27.3493 32.2993 27.3012C32.8495 27.2531 33.2565 26.768 33.2084 26.2179L32.424 17.2521ZM18.572 32.6602L19.3381 33.3029L32.1938 17.9821L31.4278 17.3393L30.6617 16.6965L17.806 32.0174L18.572 32.6602Z" fill="white" />
                        </svg>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features