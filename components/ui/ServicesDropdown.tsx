"use client"
import React from 'react'
import styles from './ui.css/ServicesDropdown.module.css'
import services from "@/public/assets/data/services.json"
import Link from 'next/link'

interface ServiceCategory {
    title: string;
    conditions?: string[];
    viewAll?: boolean
}
interface ServiceSection {
    title: string;
    categories: ServiceCategory[];
}
interface ServicesDropdownProps {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
    onClick?: () => void;
}



const ServicesDropdown = ({ onMouseEnter, onMouseLeave, className, onClick }: ServicesDropdownProps) => {
    const serviceSections = Object.values(services) as ServiceSection[];

    return (
        <div className={`${styles.dropdownContainer} ${className} paydens-shadow`} onClick={onClick} onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className={`${styles.dropdownGrid} flex flex-col lg:flex-row gap-2 md:gap-8 lg:gap-11 justify-between`}>
                {
                    serviceSections.map((service: ServiceSection, index: number) => (
                        <div className={`${styles.dropdownTitle} `} key={index}>
                            <p className='mb-2 lg:mb-4'>{service.title}</p>



                            <div className='flex gap-11 flex-wrap'>
                                <div className={`${service.categories.length > 1 ? "grid grid-cols-2 sm:grid-cols-2" : "grid grid-cols-1"} gap-4 md:gap-6 lg:gap-10`}>
                                    {service.categories.map((condition) => (
                                        <div key={condition.title} className={`${styles.dropdownTitleBold} flex gap-3 flex-col`} >
                                            {condition.title}

                                            {condition.conditions?.map((cond: any, index: number) => (
                                                <div key={index} className={`${styles.dropdownItems} `}>
                                                    {cond}
                                                </div>
                                            ))}
                                            {condition?.viewAll &&
                                                <Link href="/allconditions-health" className='mt-3 flex items-center gap-2 cursor-pointer hover:text-primary text-info transition-all duration-300 ease-in-out'>View all conditions <em>{">"}</em></Link>}
                                        </div>
                                    ))}

                                </div>
                                {index < 2 && <hr className="hidden lg:block w-[1px] bg-text-secondary/40 self-stretch" />}
                            </div>

                        </div>
                    ))

                }

            </div>
        </div>
    )
}

export default ServicesDropdown