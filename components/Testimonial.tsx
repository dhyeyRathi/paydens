"use client"
import React, { useState, useEffect, useRef } from 'react'
import styles from "./components.css/testimonial.module.css"
import Image from 'next/image'
import GoogleReviews from './Icon/GoogleReviews'
import TestimonialCard from './ui/TestimonialCard'
import avatarmale from '@/public/assets/images/Avatars/male.png'
import female from '@/public/assets/images/Avatars/female.png'
import { ArrowButton } from './ui/Button'
import { useRouter } from 'next/navigation'
import IconStarYellow from './Icon/IconStarYellow'
import IconStarGray from './Icon/IconStarGray'

const Testimonial = () => {
    const testimonial = [avatarmale, avatarmale, female, avatarmale, female, avatarmale, female, avatarmale]

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const section = document.getElementById(`${activeIndex}`);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    }, [activeIndex]);

    // const positions = [
    //     previous,
    //     activeIndex,
    //     next
    // ]
    return (
        <section className={`${styles.testimonialSection} animationPopUp`}>
            <h2 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-heading font-bold'>
                Hear From Our <em className='text-button-hover'>Patients</em>
            </h2>
            <div className={`${styles.rating}`}>
                <div className={`${styles.ratingText}`}>
                    <h3>4.9</h3>
                    <div className='flex gap-1'>
                        <IconStarYellow />
                        <IconStarYellow />
                        <IconStarYellow />
                        <IconStarGray />
                        <IconStarGray />
                    </div>
                    <p>Based on<em>&nbsp;2159&nbsp;</em>Reviews on </p>
                </div>
                <GoogleReviews className={`${styles.googleImage}`} />

            </div>
            <div className={`h-fit w-screen hide-scrollbar flex gap-10 flex-nowrap overflow-x-auto bg-transparent z-[-10] ${activeIndex !== 0 && 'xl:!-ml-0'}  pt-12 pb-15 xl:pb-20  px-[5vw] `}
            >
                {testimonial.map((customer, index: number) => {
                    return (<TestimonialCard key={index} id={`${index}`} className={`transition-all duration-300 ease-in-out opacity-50 
                     ${index === activeIndex && `!scale-105 opacity-100`}`} >

                        <Image src={customer} alt='avatar' className='h-full w-auto' /></TestimonialCard>)
                })}
            </div >
            <ArrowButton className='!m-0 !p-0'
                onClickRight={() => setActiveIndex(prev => prev < testimonial.length - 1 ? prev + 1 : 0)}
                onClickLeft={() => setActiveIndex(prev => prev <= 0 ? 0 : prev - 1)}
            />

        </section >
    )

}

export default Testimonial