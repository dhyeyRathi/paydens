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
        <section className={`${styles.awardSection} animationPopUp`}>
            <div>
                <h2 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-heading font-bold'>
                    Latest <em className='text-button-hover'>News</em> From Paydens
                </h2>
            </div>
            <div className={`${styles.cardSection} lg:!py-12`}>
                <div className={`${styles.card} paydens-shadow lg:!scale-110`} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(null)}>
                    <Image aria-label="image" src={relay} alt='relay-1' className={`${styles.images} ${hover === 1 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image aria-label="image" src={blue} alt='relay-2' className={`${styles.images} ${hover === 1 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent    ' />
                    <h3>Strategic partnership: Lagardère Travel Retail UK & Ireland and Paydens Group</h3>
                    <p>Read More
                        <IconChevronRight className="text-primary group-hover:text-white" />
                    </p>
                    <div className='absolute max-w-[60px] rounded-b-[10px] px-[5px] py-[15px]  text-center bg-white left-5 border-t-[2px] border-primary'>

                        <h4 className='text-25 font-bold'>24</h4>
                        <h4 className='text-16 font-[300]'>May 2025</h4>

                    </div>
                </div>
                <div className={`${styles.card} paydens-shadow lg:!scale-110 `} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(null)}>
                    <Image aria-label="image" src={award} alt='award-1' className={`${styles.images} ${hover === 2 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image aria-label="image" src={pink} alt='award-2' className={`${styles.images} ${hover === 2 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent   ' />
                    <h3>Congratulations to Our IPA Award Winners</h3>
                    <p>Read More
                        <IconChevronRight className="text-primary group-hover:text-white" />
                    </p>
                    <div className='absolute max-w-[60px] rounded-b-[10px] px-[5px] py-[15px]  text-center bg-white left-5 border-t-[2px] border-primary'>

                        <h4 className='text-25 font-bold'>14</h4>
                        <h4 className='text-16 font-[300]'>May 2025</h4>

                    </div>
                </div>
                <div className={`${styles.card} paydens-shadow lg:!scale-110`} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(null)}>
                    <Image aria-label="image" src={cafe} alt='cafe-1' className={`${styles.images} ${hover === 3 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image aria-label="image" src={green} alt='cafe-2' className={`${styles.images} ${hover === 3 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent   ' />
                    <h3>PAYDENS WALKS FOR PARKINSON'S UK 2024</h3>
                    <p>Read More
                        <IconChevronRight className="text-primary group-hover:text-white" />
                    </p>
                    <div className='absolute max-w-[60px] rounded-b-[10px] px-[5px] py-[15px]  text-center bg-white left-5 border-t-[2px] border-primary'>

                        <h4 className='text-25 font-bold'>13</h4>
                        <h4 className='text-16 font-[300]'>May 2025</h4>

                    </div>
                </div>

            </div>
            <Button className='!self-center lg:text-lg'>View All News</Button>

        </section>
    )
}

export default AwardsSection