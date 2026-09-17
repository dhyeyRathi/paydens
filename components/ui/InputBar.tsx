import React, { ReactHTMLElement } from 'react'
import styles from "./ui.css/Input.module.css"

interface inputProps {
    placeholder?: string;
    children?: React.ReactNode;
    className?: string;
    divClassName?: string;

}
const InputBar = ({
    placeholder, children, className
}: inputProps) => {
    return (
        <>
            <div className={`${styles.gradientBorder} ${className} w-full`}>
                <div className='w-full h-10 md:h-12 bg-white rounded-[8px] flex '>
                    <input className={`${styles.inputBar}  text-text font-[500] font-quicksand w-full bg-white`}
                        id='search' placeholder={placeholder} />
                    {children}
                </div>
            </div></>
    )
}

export default InputBar

const InputBarVar2 = ({
    placeholder, children, className, divClassName
}: inputProps) => {
    return (
        <>

            <div className={`w-[50%] h-6 md:h-12 bg-white rounded-[8px] flex ${styles.inputContVar2} ${divClassName}`}>
                <input className={`${styles.inputBarVar2} ${className} text-text font-[500] font-quicksand w-full bg-white`}
                    id='search' placeholder={placeholder} />
                {children}
            </div>
        </>
    )
}

export { InputBarVar2 }

