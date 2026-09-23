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

const AwardsSection = () => {
    const [hover, setHover] = useState<number | null>(null);
    return (
        <section className={`${styles.awardSection}`}>
            <div>
                <h1 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-5xl font-bold'>
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
                        <svg
                            width="10"
                            height="15"
                            viewBox="0 0 6 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                                className='fill-primary group-hover:fill-white'
                            />
                        </svg>
                    </p>
                </div>
                <div className={`${styles.card} paydens-shadow lg:!scale-110 `} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(null)}>
                    <Image src={award} alt='relay' className={`${styles.images} ${hover === 2 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image src={pink} alt='relay' className={`${styles.images} ${hover === 2 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent   ' />
                    <h2>Congratulations to Our IPA Award Winners</h2>
                    <p>Read More
                        <svg
                            width="10"
                            height="15"
                            viewBox="0 0 6 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                                className='fill-primary group-hover:fill-white'
                            />
                        </svg>
                    </p>
                </div>
                <div className={`${styles.card} paydens-shadow lg:!scale-110`} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(null)}>
                    <Image src={cafe} alt='relay' className={`${styles.images} ${hover === 3 ? styles.fadeOut : styles.fadeIn} `} />
                    <Image src={green} alt='relay' className={`${styles.images} ${hover === 3 ? styles.fadeIn : styles.fadeOut} `} />
                    <WhiteGradient className='!bg-gradient-to-t !from-background !via-background !via-20% !to-transparent   ' />
                    <h2>PAYDENS WALKS FOR PARKINSON'S UK 2024</h2>
                    <p>Read More
                        <svg
                            width="10"
                            height="15"
                            viewBox="0 0 6 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                                className='fill-primary group-hover:fill-white'
                            />
                        </svg>
                    </p>
                </div>

            </div>
            <Button className='!self-center lg:text-lg'>View All News</Button>

        </section>
    )
}

export default AwardsSection