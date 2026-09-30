"use client"
import React, { useState, useEffect, useRef } from 'react'
import styles from './components.css/Doctors.module.css'
import { DoctorCardVar2 } from '@/components/ui/DoctorCard'
import { ArrowButton } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import IconChevronRight from '@/components/Icon/IconChevronRight'

const Doctors = () => {
    const doctor = ["/doctors/left.png", "/doctors/right.png", "/doctors/center.png"]

    const [activeDocIndex, setActiveDocIndex] = useState<number>(1);
    const router = useRouter();
    const isFirstRender = useRef(true);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const targetCard = document.getElementById(`doc-${activeDocIndex}`);
        const scrollContainer = containerRef.current;

        if (targetCard && scrollContainer) {

            const scrollPos =
                targetCard.offsetLeft -
                scrollContainer.offsetLeft -
                (scrollContainer.offsetWidth / 2) +
                (targetCard.offsetWidth / 2);

            scrollContainer.scrollTo({
                left: scrollPos,
                behavior: "smooth"
            });
        }
    }, [activeDocIndex]);


    return (
        <section className='flex flex-col gap-5 lg:gap-10 w-full relative'>
            <h1 className='w-full text-center px-4 text-3xl lg:text-heading font-bold'>
                Your health, In <em className='text-button-hover'>Expert </em> Hands
            </h1>
            <button className={`${styles.arrowButton} bg-white/70 xl:bg-transparent group absolute left-0  !top-[50%] !z-200 `} onClick={() => setActiveDocIndex(prev => prev <= 0 ? 0 : prev - 1)}>
                <IconChevronRight className='fill-text-secondary group-hover:fill-white scale-x-[-1]' />
            </button>
            <button className={`${styles.arrowButton} bg-white/70 xl:bg-transparent group absolute right-0 !top-[50%] !z-200 `} onClick={() => setActiveDocIndex(prev => prev < doctor.length - 1 ? prev + 1 : 0)}>
                <IconChevronRight className='fill-text-secondary group-hover:fill-white' />
            </button>




            <div ref={containerRef} className={`${styles.CardContainer} hide-scrollbar relative overflow-x-auto  !self-center`}>

                {doctor.map((doc, index) => (
                    <DoctorCardVar2 key={index} name='Sarah Thompson' image={doc} id={`doc-${index}`} className={`transition-all duration-300 opacity-70 ${activeDocIndex === index && 'scale-105 opacity-100'}`} />
                ))}



            </div>


        </section>
    )
}

export default Doctors