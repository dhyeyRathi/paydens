"use client"
import React, { Children } from 'react'
import styles from "./ui.css/Button.module.css"

interface ButtonProps {
    children: React.ReactNode;
    className?: string
    onClick?: () => void
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <>
            <button className={`${styles.button} ${className} group bg-primary
                    hover:bg-primary-dark transition-all duration-300 ease-in-out`}>
                {children}
            </button>
        </>
    )
}

const ButtonVar2 = ({
    children,
    className = "", onClick
}: ButtonProps) => {

    return (
        <div
            className="relative inline-bloc"
        >
            <button
                type="button"
                className={`paydence-shadow relative text-button-hover font-[400] border-1 border-button-hover rounded-lg py-2 px-4 
                    hover:bg-button-hover hover:text-white hover:border-button-hover transition-all duration-300 ease-in-out ${className}`}
                onClick={onClick}
            >
                {children}
            </button>

        </div>
    );
};


export { Button, ButtonVar2 }