import React, { ReactHTMLElement } from 'react'
import styles from "./ui.css/Input.module.css"

interface inputProps {
    placeholder?: string;
    children?: React.ReactNode;
    className?: string;

}
const InputBar = ({
    placeholder, children, className
}: inputProps) => {
    return (
        <>
            <div className={`${styles.gradientBorder} w-full`}>
                <div className='w-full h-6 md:h-12 bg-white rounded-[8px] flex '>
                    <input className={`${styles.inputBar} ${className} text-text font-[500] font-quicksand w-full bg-white`}
                        id='search' placeholder={placeholder} />
                    {children}
                </div>
            </div></>
    )
}

export default InputBar

