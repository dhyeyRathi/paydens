"use client"
import React, { Children } from 'react'
import styles from "./ui.css/Button.module.css"

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
                className={`paydence-shadow relative text-button-hover font-[400] border-1 border-button-hover rounded-lg py-2 px-4 
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
                <svg
                    width="10"
                    height="15"
                    viewBox="0 0 6 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "scaleX(-1)" }}
                >
                    <path
                        d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                        className='fill-text-secondary group-hover:fill-white'
                    />
                </svg>
            </button>
            <button className={`${styles.arrowButton} group`} onClick={onClickRight}>
                <svg
                    width="10"
                    height="15"
                    viewBox="0 0 6 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                        className='fill-text-secondary group-hover:fill-white'
                    />
                </svg>
            </button>


        </div>
    );
}


export { Button, ButtonVar2, ArrowButton }