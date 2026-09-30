import React from 'react'
import styles from "./ui.css/doctorcard.module.css"
import WhiteGradient from './WhiteGradient'
import { BlueGradient, GreenGradient } from './ColorGradient'
import IconChevronRight from '../Icon/IconChevronRight'

interface doctorcardprops {
    className?: string
    name?: string
    image: string
    center?: boolean
    id?: string
}

const DoctorCard = ({ className, name = 'Sarah Thompson', image = "", center = false }: doctorcardprops) => {
    return (
        <div className={`${className} relative`}>
            {image && <img src={image} alt={name} className={`${styles.Image} ${center && styles.ImageCenter}`} />}
            <WhiteGradient className="!bottom-[-2]" />
            <h3 className=' absolute text-[10px] lg:text-16 font-[600] bottom-[1%] left-[6%]'>{name}</h3>
            <h3 className=' absolute text-[8px] lg:text-16 font[300] left-[6%]'>Online Doctor</h3>
        </div>
    )
}

export default DoctorCard



const DoctorCardVar2 = ({ className = '', name = 'Sarah Thompson', image = "", center = false, id }: doctorcardprops) => {
    return (
        <div id={id} className={`${className} min-w-[220px] sm:min-w-[350px] h-[420px] sm:h-[700px] relative overflow-hidden rounded-2xl paydens-shadow`}>
            <div className='relative bg-white overflow-hidden'>
                <GreenGradient className='h-50 w-100 !left-[-30%] top-[-10%] ' />
                <BlueGradient className='h-50 w-100 !right-[-30%] top-[-10%] ' />
                {image && <img src={image} alt={name} className={`max-h-55 sm:max-h-110 sticky z-20 scale-125`} />}
            </div>
            <div className='h-full w-full bg-background p-3 sm:p-6 flex flex-col gap-1 sm:gap-2 items-start justify-start'>
                <h3 className='text-sm sm:text-lg lg:text-3xl font-[600] '>{name}</h3>
                <div className='flex gap-1 sm:gap-2'>
                    <h2 className='text-[10px] sm:text-sm p-1 sm:p-2 py-0.5 sm:py-1 bg-primary/20 rounded-xl text-primary font-semibold'>online doctor</h2>
                    <h2 className='text-[10px] sm:text-sm p-1 sm:p-2 py-0.5 sm:py-1 bg-primary/20 rounded-xl text-primary font-semibold'>GPhC Registered</h2>

                </div>
                <p className='max-w-80 text-xs sm:text-lg font-[300]'>Pharmacist Craig doesn't prescribe for our USA practice, but helps review content across our site to ensure clinical accuracy.</p>
                <h3 className='flex group gap-4 hover:gap-6 justify-start items-center cursor-pointer text-sm w-full text-link hover:text-primary font-bold transition-all duration-200 ease-in-out pb-2'>View Full Profile <em className={`${styles.hr} `}>
                    <IconChevronRight className="text-link group-hover:text-primary" />
                </em></h3>
            </div>
        </div>
    )
}

export { DoctorCardVar2 }

