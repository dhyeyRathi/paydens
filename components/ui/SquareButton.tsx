import React from 'react'
import styles from "./ui.css/Button.module.css"

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    size?: string;
    onclick?: () => void;
}

const SquareButton = ({ children, className = '', size, onclick }: ButtonProps) => {
    return (
        <button
            className={`${styles.squareButton} ${className} group bg-primary/10
                    hover:bg-primary-dark transition-all duration-300 ease-in-out`}
            onClick={onclick}
        >
            {children}
        </button>
    )
}

export default SquareButton