import React from 'react'
import styles from "./ui.css/mobileAppBanner.module.css"
import Image from 'next/image'
import NHS from '../Icon/Logo/NHS'
import RegisteredPharmacy from '../Icon/Logo/RegisteredPharmacy'
import phones from "@/public/assets/images/ui/phones.png"
import { BlueGradient, GreenGradient } from './ColorGradient'
import { Button } from './Button'
import IconStarAppRating from '../Icon/IconStarAppRating'

const MobileAppBanner = () => {
    return (
        <section className={`${styles.bannerCont} animationPopUp`}>
            <GreenGradient className={`${styles.greenGrad}`} />
            <GreenGradient className={`${styles.greenGrad2}`} />
            <BlueGradient className={`${styles.blueGrad}`} />
            <div className={`${styles.banner}`}>
                <div className={`${styles.textCont}`}>
                    <div className={`${styles.imageCont}`}>
                        <NHS className='scale-140' />
                        <RegisteredPharmacy className='scale-120' />
                        <h2 className='flex gap-2 w-full'>
                            <IconStarAppRating className="scale-150 text-[#DFB300]" />

                            4.8 App Rating

                        </h2>
                    </div>
                    <h3 className=''>Become part of <em>50,000+ </em> patients who trust our app for their prescription needs</h3>
                    <Button className='!self-center sm:!self-start md:text-2xl'>Get the App</Button>
                </div>
                <Image src={phones} alt='phones' className={`${styles.phone}`} />
            </div>
        </section>
    )
}

export default MobileAppBanner