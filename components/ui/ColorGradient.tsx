import React from 'react'
import styles from "./ui.css/ColorGradient.module.css"

interface gradProps {
    className?: string;
}

const ColorGradient = () => {
    return (
        <div className={`${styles.elipse}`}></div>
    )
}

export default ColorGradient

export const GreenGradient = ({ className }: gradProps) => {
    return (<div className={`${styles.greenGradient} ${className}`}>

    </div>)
}
export const BlueGradient = ({ className }: gradProps) => {
    return (<div className={`${styles.blueGradient} ${className}`}>

    </div>)
}

export const CyanGradient = ({ className }: gradProps) => {
    return (<div className={`${styles.cyanGradient} ${className}`}>

    </div>)
}

export const ColorGradientBg = ({ className }: gradProps) => {
    return (
        <div className={`absolute z-[-10] inset-0 overflow-x-clip overflow-y-visible pointer-events-none ${className} `}>
            <BlueGradient className='w-full h-[200px] !blur-[140px] top-[80%]  
            md:left-[-30%] md:top-[40%] md:w-[800px] 
            lg:h-[400px] lg:!blur-[200px] lg:!right-[-5%] lg:!top-[25%] lg:left-auto lg:rotate-160' />


            <GreenGradient className='w-full h-[250px] !blur-[160px] 
            md:!w-[800px] md:h-[300px]  
            lg:!blur-[220px] lg:!right-[25%] lg:!bottom-[15%]' />


            <CyanGradient className='w-full h-[200px] !blur-[140px] bottom-[30%] 
            md:!w-[800px] md:right-[-30%] md:top-[40%] 
            lg:!h-[400px] lg:!blur-[200px] lg:!left-[-5%] lg:!top-[25%] lg:rotate-200' />
        </div>
    );
}