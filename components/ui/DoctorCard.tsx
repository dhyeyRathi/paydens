import React from 'react'
import styles from "./ui.css/doctorcard.module.css"
import WhiteGradient from './WhiteGradient'
import { BlueGradient, GreenGradient } from './ColorGradient'

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
            <h1 className=' absolute text-[10px] lg:text-3xl font-[600] bottom-[2%] left-[6%]'>{name}</h1>
            <h1 className=' absolute text-[8px] lg:text-2xl font[300] left-[6%]'>Online Doctor</h1>
        </div>
    )
}

export default DoctorCard



const DoctorCardVar2 = ({ className = '', name = 'Sarah Thompson', image = "", center = false, id }: doctorcardprops) => {
    return (
        <div id={id} className={`${className} min-w-[350px] h-[700px] relative overflow-hidden rounded-2xl paydens-shadow`}>
            <div className='relative bg-white overflow-hidden'>
                <GreenGradient className='h-50 w-100 !left-[-30%] top-[-10%] ' />
                <BlueGradient className='h-50 w-100 !right-[-30%] top-[-10%] ' />
                {image && <img src={image} alt={name} className={`max-h-110 sticky z-20 scale-125`} />}
            </div>
            <div className='h-full w-full bg-background p-6 flex flex-col gap-2 items-start justify-start'>
                <h1 className='text-lg lg:text-3xl font-[600] '>{name}</h1>
                <div className='flex gap-2'>
                    <h2 className='text-sm p-2 py-1 bg-primary/20 rounded-xl text-primary font-semibold'>online doctor</h2>
                    <h2 className='text-sm p-2 py-1 bg-primary/20 rounded-xl text-primary font-semibold'>GPhC Registered</h2>

                </div>
                <p className='max-w-80 text-lg  font-[300]'>Pharmacist Craig doesn’t prescribe for our USA practice, but helps review content across our site to ensure clinical accuracy.</p>
                <h1 className='flex group gap-4 hover:gap-6 justify-start items-center cursor-pointer text-lg w-full text-link hover:text-primary font-bold transition-all duration-200 ease-in-out pb-2'>View Full Profile <em className={`${styles.hr} `}>
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-link group-hover:fill-primary " d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z" />
                    </svg>
                </em></h1>
            </div>
        </div>
    )
}

export { DoctorCardVar2 }

