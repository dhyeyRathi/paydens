import React, { Children } from 'react'
import styles from "./ui.css/Button.module.css"

interface ButtonProps {
    children: React.ReactNode;
    className: string
    onClick?: () => void
}

const SquareButton = ({ children, className }: ButtonProps) => {
    return (
        <>
            <button className={`${styles.squareButton} ${className} group bg-primary/10
                    hover:bg-primary-dark transition-all duration-300 ease-in-out `}>
                {children}
            </button>
        </>
    )
}

export default SquareButton