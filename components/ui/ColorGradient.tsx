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