import React from 'react'
import styles from "./ui.css/Button.module.css"
import IconChevronRight from '../Icon/IconChevronRight'
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface ButtonProps {
    children: React.ReactNode;
    className?: string
    onClick?: () => void
    type?: string
    link?: boolean
    href?: Url;
}

interface arrButtonProps {
    className?: string
    onClick?: () => void
    onClickLeft?: () => void
    onClickRight?: () => void
}

const Button = ({ children, className, onClick, link = false, href = "" }: ButtonProps) => {
    if (link) return (
        <>
            <Link href={href} className={`${styles.button} ${className} group bg-primary paydens-shadow
                    hover:bg-primary-dark transition-all duration-300 ease-in-out`} onClick={onClick} >
                {children}
            </Link>
        </>
    )
    else return (
        <>
            <button className={`${styles.button} ${className} group bg-primary paydens-shadow
                    hover:bg-primary-dark transition-all duration-300 ease-in-out`} onClick={onClick} >
                {children}
            </button>
        </>
    )
}

const ButtonVar2 = ({
    children,
    className = "", onClick, link = false, href = ""
}: ButtonProps) => {

    if (link) return (
        <Link href={href}
            className={`relative flex w-full items-center ${className}`}
        >
            <button
                type="button"
                className={`paydence-shadow relative text-button-hover font-[400] border-1 border-button-hover rounded-lg ${styles.buttonVar2} 
                    hover:bg-button-hover hover:text-white hover:border-button-hover transition-all duration-300 ease-in-out `}
                onClick={onClick}
            >
                <span className="sr-only">button</span>
                {children}
            </button>

        </Link>
    );
    else return (
        <div
            className={`relative flex w-full items-center ${className}`}
        >
            <button
                type="button"
                className={`paydence-shadow relative text-button-hover font-[400] border-1 border-button-hover rounded-lg ${styles.buttonVar2} 
                    hover:bg-button-hover hover:text-white hover:border-button-hover transition-all duration-300 ease-in-out `}
                onClick={onClick}
            >
                <span className="sr-only">button</span>
                {children}
            </button>

        </div>
    );
};

const ArrowButton = ({ className, onClickLeft, onClickRight }: arrButtonProps) => {
    return (
        <div className={`${className} flex gap-4 items-center`}>
            <button aria-label="previous" className={`${styles.arrowButton} group`} onClick={onClickLeft}>
                <IconChevronRight className="scale-x-[-1] text-text-secondary group-hover:text-white" />
                <span className="sr-only">previous</span>
            </button>
            <button aria-label="next" className={`${styles.arrowButton} group`} onClick={onClickRight}>
                <IconChevronRight className="text-text-secondary group-hover:text-white" />
                <span className="sr-only">next</span>
            </button>


        </div>
    );
}


export { Button, ButtonVar2, ArrowButton }