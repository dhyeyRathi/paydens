import styles from "./ui.css/doctorcard.module.css"
import WhiteGradient from './WhiteGradient'
import { BlueGradient, GreenGradient } from './ColorGradient'
import IconChevronRight from '../Icon/IconChevronRight'
import IconVerifiedTick from '../Icon/IconVerifiedTick'
import Image from "next/image"

interface doctorcardprops {
    className?: string
    name?: string
    image: string
    center?: boolean
    id?: string
    width?: number
    height?: number
}

const DoctorCard = ({ className, name = 'Sarah Thompson', image = "", center = false, width, height }: doctorcardprops) => {
    return (
        <div className={`${className} relative`}>
            {image && (
                <Image
                    src={image}
                    alt={name + " image"}
                    width={width ?? (center ? 588 : 500)}
                    height={height ?? (center ? 722 : 650)}
                    className={`${styles.Image} ${center && styles.ImageCenter}`}
                />
            )}
            <WhiteGradient className="bg-gradient-to-t from-background via-transparent  to-transparent" />
            <div className='absolute bottom-2 lg:bottom-4 left-[6%] flex flex-col z-10'>
                <h3 className='text-[0.625rem] lg:text-16 font-[600]'>{name}</h3>
                <h4 className='text-[0.5rem] lg:text-16 font-[300]'>Online Doctor</h4>
            </div>
        </div>
    )
}

export default DoctorCard



const DoctorCardVar2 = ({ className = '', name = 'Sarah Thompson', image = "", id, width, height }: doctorcardprops) => {
    return (
        <div id={id} className={`${className} min-w-[13.75rem] sm:w-[20rem] relative overflow-hidden rounded-2xl paydens-shadow`}>
            <div className='relative bg-white overflow-hidden w-full h-[15rem] sm:h-[18rem] lg:h-[20rem] flex items-end justify-center'>
                <GreenGradient className='h-40 w-40 sm:h-50 sm:w-50 -left-10 -top-10' />
                <BlueGradient className='h-40 w-40 sm:h-50 sm:w-50 -right-10 -top-10' />
                {image && (
                    <Image
                        src={image}
                        alt={name + ' image'}
                        width={width ?? 350}
                        height={height ?? 350}
                        className='w-full h-auto top-20 object-fill relative z-20'
                    />
                )}
            </div>
            <div className='h-full w-full bg-background p-3 sm:p-[24px] flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 items-start justify-start'>
                <h3 className='text-sm sm:text-lg lg:text-25 font-[600] flex items-center  gap-1 md:gap-2 '>{name} <IconVerifiedTick /></h3>
                <div className='flex gap-1 sm:gap-2'>
                    <h2 className='text-[0.5rem] lg:text-12 p-1 sm:p-2 py-0.5 sm:py-1 bg-primary/20 rounded text-primary-dark font-semibold'>Online doctor</h2>
                    <h2 className='text-[0.5rem] lg:text-12 p-1 sm:p-2 py-0.5 sm:py-1 bg-primary/20 rounded text-primary-dark font-semibold'>GPhC Registered</h2>

                </div>
                <p className='max-w-80 text-12 lg:text-16 font-[300]'>Pharmacist Craig doesn&apos;t prescribe for our USA practice, but helps review content across our site to ensure clinical accuracy.</p>
                <button aria-label='view full profile button' className='flex group gap-4 hover:gap-6 justify-start items-center cursor-pointer text-12 lg:text-16 w-full text-link hover:text-primary font-bold transition-all duration-200 ease-in-out pb-2'>
                    View Full Profile <em className={`${styles.hr} `}>
                        <IconChevronRight className="text-link group-hover:text-primary" />
                    </em></button>
            </div>
        </div>
    )
}

export { DoctorCardVar2 }

