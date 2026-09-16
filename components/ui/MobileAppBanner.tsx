import React from 'react'
import styles from "./ui.css/mobileAppBanner.module.css"
import Image from 'next/image'
import nhs from "@/public/assets/images/ui/nhs.png"
import registered from "@/public/assets/images/ui/registration.png"
import phones from "@/public/assets/images/ui/phones.png"
import { BlueGradient, GreenGradient } from './ColorGradient'
import { Button } from './Button'

const MobileAppBanner = () => {
    return (
        <section className={`${styles.bannerCont}`}>
            <GreenGradient className={`${styles.greenGrad}`} />
            <GreenGradient className={`${styles.greenGrad2}`} />
            <BlueGradient className={`${styles.blueGrad}`} />
            <div className={`${styles.banner}`}>
                <div className={`${styles.textCont}`}>
                    <div className={`${styles.imageCont}`}>
                        <Image src={nhs} alt='Nhs' className={`${styles.images} scale-150 mr-2`} />
                        <Image src={registered} alt='registration' className={`${styles.images} scale-90`} />
                        <h2 className='flex gap-2 w-full'>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" className='scale-150'>
                                <path d="M9.50977 0L12.7426 5.55041L19.0203 6.90983L14.7406 11.6996L15.3876 18.0902L9.50977 15.5L3.63191 18.0902L4.27895 11.6996L-0.000799179 6.90983L6.27695 5.55041L9.50977 0Z" fill="#DFB300" />
                            </svg>

                            4.8 App Rating

                        </h2>
                    </div>
                    <h1 className=''>Become part of <em>50,000+ </em> patients who trust our app for their prescription needs</h1>
                    <Button className='!self-center sm:!self-start md:text-2xl md:!py-3 '>Get the App</Button>
                </div>
                <Image src={phones} alt='phones' className={`${styles.phone}`} />
            </div>
        </section>
    )
}

export default MobileAppBanner