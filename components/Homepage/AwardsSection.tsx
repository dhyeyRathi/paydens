"use client"
import { useState } from 'react'
import styles from "./homepage.css/AwardsSection.module.css"
import { Button } from '../ui/Button'
import Image from 'next/image'
import relay from '@/public/assets/images/homepage/ui/relay.png'
import award from '@/public/assets/images/homepage/ui/women.png'
import cafe from '@/public/assets/images/homepage/ui/cafe.png'
import WhiteGradient from '../ui/WhiteGradient'
import blue from '@/public/assets/images/homepage/ui/blue.png'
import pink from '@/public/assets/images/homepage/ui/pink.png'
import green from '@/public/assets/images/homepage/ui/green.png'
import IconChevronRight from '../Icon/IconChevronRight'

const AwardsSection = () => {
    const [hover, setHover] = useState<number | null>(null);
    return (
        <section className={`${styles.awardSection}`}>
            <div>
                <h1 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-heading font-bold'>
                    Latest <em className='text-button-hover'>News</em> From Paydens
                </h1>
            </div>
            <div className={`${styles.cardSection} lg:!py-12`}>
                <div className={`${styles.card} paydens-shadow lg:!scale-110`} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(null)}>
                    <Image src={relay} alt='relay' className={`${styles.images} ${hover === 1 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image src={blue} alt='relay' className={`${styles.images} ${hover === 1 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent    ' />
                    <h2>Strategic partnership: Lagardère Travel Retail UK & Ireland and Paydens Group</h2>
                    <p>Read More
                        <IconChevronRight className="text-primary group-hover:text-white" />
                    </p>
                </div>
                <div className={`${styles.card} paydens-shadow lg:!scale-110 `} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(null)}>
                    <Image src={award} alt='relay' className={`${styles.images} ${hover === 2 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image src={pink} alt='relay' className={`${styles.images} ${hover === 2 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent   ' />
                    <h2>Congratulations to Our IPA Award Winners</h2>
                    <p>Read More
                        <IconChevronRight className="text-primary group-hover:text-white" />
                    </p>
                </div>
                <div className={`${styles.card} paydens-shadow lg:!scale-110`} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(null)}>
                    <Image src={cafe} alt='relay' className={`${styles.images} ${hover === 3 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image src={green} alt='relay' className={`${styles.images} ${hover === 3 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent   ' />
                    <h2>PAYDENS WALKS FOR PARKINSON'S UK 2024</h2>
                    <p>Read More
                        <IconChevronRight className="text-primary group-hover:text-white" />
                    </p>
                </div>

            </div>
            <Button className='!self-center lg:text-lg'>View All News</Button>

        </section>
    )
}

export default AwardsSection