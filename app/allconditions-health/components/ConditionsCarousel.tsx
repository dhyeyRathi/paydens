"use client"
import React, { useState, useEffect } from 'react'
import styles from './component.css/ConditionsCarousel.module.css'
import { InputBarVar2 } from '@/components/ui/InputBar'
import { Button } from '@/components/ui/Button'
import conditions from '@/public/assets/data/conditions.json'
import { useRouter } from 'next/navigation'

const ConditionsCarousel = () => {
    const filter = ["All", "NHS Services", "Private Services"]
    const [selected, setSelected] = useState<string | null>("All")
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [activeAlphabets, setActiveAlphabets] = useState<any>([]);
    const [loaded, setLoaded] = useState<number>(2);
    const [scrollTarget, setScrollTarget] = useState<string | null>(null);
    const router = useRouter();

    function handleNavigation() {
        router.push(`/allconditions-health/sore-throat`);
    }

    useEffect(() => {
        const active = [
            ...new Set(
                conditions.map((condition) =>
                    condition.title.charAt(0).toUpperCase()
                )
            )
        ];
        setActiveAlphabets(active)
    }, [])

    useEffect(() => {
        if (!scrollTarget) return;
        const section = document.getElementById(scrollTarget);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
            window.history.pushState(null, "", `#${scrollTarget}`);
        }
        setScrollTarget(null);
    }, [loaded, scrollTarget])


    function handleRouting(e: string, index: number) {

        setLoaded(prev => prev + index - 1)
        setScrollTarget(e);
    }


    return (
        <section className={`${styles.carouselSection}`}>
            <div className='flex flex-col gap-10'>
                <h1 className='font-quicksand text-xl md:text-5xl text-center md:text-start'>
                    What do you need help with?
                </h1>
                <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between w-full items-center'>
                    <InputBarVar2 placeholder='what condition are you looking for?' divClassName='!h-10 lg:!h-15 !w-[80%] md:!w-[50%]'>
                        <Button className='!rounded-md !m-[2px] text-sm md:text-lg'>Search</Button></InputBarVar2>
                    <div className='paydens-shadow rounded-4xl flex max-w-[80%] lg:max-w-[30%] gap-2 items-center p-2 font-[300] cursor-pointer'>
                        {filter.map((opt) => (
                            <p key={opt} onClick={() => setSelected(opt)} className={`${selected === opt && 'bg-primary-light  font-semibold'} text-xs md:text-base  px-2 py-1 lg:px-2 text-center lg:py-2 rounded-4xl`}>{opt}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`${styles.carousel} `}>
                <div className='w-full flex flex-col gap-2 lg:gap-10 max-h-screen overflow-auto hide-scrollbar'>
                    {activeAlphabets.slice(0, loaded).map((alphabet: string) => {
                        return (
                            <section key={alphabet} className='flex flex-col gap-4 lg:gap-10 justify-center' id={alphabet}>
                                <div className={`flex w-full items-center gap-4 `}>
                                    <p className='h-8 w-8 md:h-10 md:w-10 lg:h-15 lg:w-15 text-lg bg-primary rounded-full text-white flex justify-center items-center'>
                                        {alphabet}
                                    </p>
                                    <hr className='border-primary w-full h-[-1px] bg-primary' />
                                </div>
                                <div className='w-full flex flex-wrap gap-4 pb-10 justify-center md:justify-normal items-center'>
                                    {conditions.map((cond) => {
                                        if (selected === "NHS Services") {
                                            return cond.title.charAt(0).toUpperCase() === alphabet && cond.nhs && (
                                                <button onClick={handleNavigation} key={cond.title} className='border-1 font-quicksand flex flex-col gap-2 lg:gap-6 border-border w-60 h-30 lg:w-100 lg:h-50 rounded-xl p-4 px-8 
                                            hover:bg-info/10 hover:border-info transition-all duration-300 cursor-pointer' >
                                                    <div className='flex justify-between items-center'>
                                                        <h1 className='text-lg md:text-xl lg:text-xl max-w-[70%] !self-start'>{cond.title}</h1>
                                                        {cond.nhs && <img src='/assets/images/ui/nhs-leaf.png' className='h-6 lg:h-8' />}
                                                    </div>
                                                    <p className='line-clamp-2 text-sm lg:text-base font-[300]'>{cond.description}</p>
                                                </button>
                                            )

                                        }
                                        else if (selected === "Private Services") {
                                            return cond.title.charAt(0).toUpperCase() === alphabet && !cond.nhs && (
                                                <button key={cond.title} onClick={handleNavigation} className='border-1 font-quicksand flex flex-col gap-2 lg:gap-6 border-border w-60 h-30 lg:w-100 lg:h-50 rounded-xl p-4 px-8 
                                            hover:bg-info/10 hover:border-info transition-all duration-300 cursor-pointer' >
                                                    <div className='flex justify-between items-center'>
                                                        <h1 className='text-lg md:text-xl lg:text-xl max-w-[70%] !self-start'>{cond.title}</h1>
                                                        {cond.nhs && <img src='/assets/images/ui/nhs-leaf.png' className='h-6 lg:h-8' />}
                                                    </div>
                                                    <p className='line-clamp-2 text-sm lg:text-base font-[300]'>{cond.description}</p>
                                                </button>
                                            )
                                        }
                                        else {
                                            return cond.title.charAt(0).toUpperCase() === alphabet && (
                                                <button key={cond.title} onClick={handleNavigation} className='border-1 font-quicksand flex flex-col gap-2 lg:gap-6 border-border w-60 h-30 lg:w-100 lg:h-50 rounded-xl p-4 px-8 
                                            hover:bg-info/10 hover:border-info transition-all duration-300 cursor-pointer' >
                                                    <div className='flex justify-between items-center'>
                                                        <h1 className='text-lg md:text-xl lg:text-xl max-w-[70%] !self-start'>{cond.title}</h1>
                                                        {cond.nhs && <img src='/assets/images/ui/nhs-leaf.png' className='h-6 lg:h-8' />}
                                                    </div>
                                                    <p className='line-clamp-2 text-sm lg:text-base font-[300]'>{cond.description}</p>
                                                </button>
                                            )
                                        }

                                    })}
                                </div>
                            </section>
                        )
                    })}
                </div>

                <div className='flex flex-col gap-1 '>
                    {[...alphabets].map((alphabet, index) => (
                        <button key={alphabet} onClick={() => handleRouting(alphabet, index)} className={`bg-primary text-background rounded-sm flex w-8 h-8 items-center justify-center text-sm !self-center 
                        ${!activeAlphabets.includes(alphabet) && '!bg-border'}`}>
                            {alphabet}
                        </button>
                    ))}
                </div>

            </div>
            <Button className='!self-center' onClick={() => setLoaded(prev => prev + 2)}>Load More</Button>

        </section>
    )
}

export default ConditionsCarousel