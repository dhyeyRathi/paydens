"use client"
import React, { Children } from 'react'
import styles from "./ui.css/Button.module.css"
import IconChevronRight from '../Icon/IconChevronRight'

interface ButtonProps {
    children: React.ReactNode;
    className?: string
    onClick?: () => void
    type?: any

}

interface arrButtonProps {
    className?: string
    onClick?: () => void
    onClickLeft?: () => void
    onClickRight?: () => void
}

const Button = ({ children, className, type, onClick }: ButtonProps) => {
    return (
        <>
            <button className={`${styles.button} ${className} group bg-primary paydens-shadow
                    hover:bg-primary-dark transition-all duration-300 ease-in-out`} onClick={onClick} type={type}>
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
            className={`relative flex w-full items-center ${className}`}
        >
            <button
                type="button"
                className={`paydence-shadow relative text-button-hover font-[400] border-1 border-button-hover rounded-lg ${styles.buttonVar2} 
                    hover:bg-button-hover hover:text-white hover:border-button-hover transition-all duration-300 ease-in-out `}
                onClick={onClick}
            >
                {children}
            </button>

        </div>
    );
};

const ArrowButton = ({ className, onClickLeft, onClickRight }: arrButtonProps) => {
    return (
        <div className={`${className} flex gap-4 items-center`}>
            <button className={`${styles.arrowButton} group`} onClick={onClickLeft}>
                <IconChevronRight className="scale-x-[-1] text-text-secondary group-hover:text-white" />
            </button>
            <button className={`${styles.arrowButton} group`} onClick={onClickRight}>
                <IconChevronRight className="text-text-secondary group-hover:text-white" />
            </button>


        </div>
    );
}


export { Button, ButtonVar2, ArrowButton }