"use client"
import { useState, useEffect, useRef } from 'react'
import styles from "./components.css/testimonial.module.css"
import Image from 'next/image'
import GoogleReviews from './Icon/GoogleReviews'
import TestimonialCard from './ui/TestimonialCard'
import avatarmale from '@/public/assets/images/Avatars/male.png'
import female from '@/public/assets/images/Avatars/female.png'
import { ArrowButton } from './ui/Button'
import IconStarYellow from './Icon/IconStarYellow'
import IconStarGray from './Icon/IconStarGray'
import Heading, { HeadingHighlight } from './ui/Heading'
import { getTestimonials } from '@/actions/testimonial-sanity'
import { TestimonialType } from '@/actions/testimonial-sanity'


const Testimonial = () => {
    const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);

    useEffect(() => {
        async function fetchTestimonials() {
            const data = await getTestimonials();
            setTestimonials(data ?? []);
        }

        fetchTestimonials();
    }, []);



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
            <Heading >
                Hear From Our <HeadingHighlight >Patients</HeadingHighlight>
            </Heading>
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
                    <h4>Based on<em>&nbsp;2159&nbsp;</em>Reviews on </h4>
                </div>
                <GoogleReviews className={`${styles.googleImage}`} />

            </div>
            <div className={`h-fit w-screen hide-scrollbar flex gap-10 flex-nowrap overflow-x-auto bg-transparent z-[-10] ${activeIndex !== 0 && 'xl:!-ml-0'}  pt-12 pb-15 xl:pb-20  px-[5vw] `}
            >
                {testimonials.map((customer, index: number) => {
                    return (<TestimonialCard key={customer._id} id={`${index}`}
                        name={customer.author} body={customer.body}
                        className={`transition-all duration-300 ease-in-out opacity-50 
                     ${index === activeIndex && `!scale-105 opacity-100`}`} >

                        <Image width={100} height={100}
                            src={`${customer.avatarUrl}`} alt={`avatar-${index}`} className='h-full w-auto rounded-full' /></TestimonialCard>)
                })}
            </div >
            <ArrowButton className='!m-0 !p-0'
                onClickRight={() => setActiveIndex(prev => prev < testimonials.length - 1 ? prev + 1 : 0)}
                onClickLeft={() => setActiveIndex(prev => prev <= 0 ? 0 : prev - 1)}
            />

        </section >
    )

}

export default Testimonial