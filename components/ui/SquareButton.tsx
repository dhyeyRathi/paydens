import React from 'react'
import styles from "./ui.css/Button.module.css"
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    size?: string;
    onclick?: () => void;
    type?: string;
    href?: Url;
}

const SquareButton = ({ children, className = '', onclick, type = "Button", href = "" }: ButtonProps) => {
    if (type === "Link") return (
        <Link href={href}
            className={`${styles.squareButton} ${className} group bg-primary/10
                    hover:bg-primary-dark transition-all duration-300 ease-in-out`}
            onClick={onclick}
        >
            {children}
            <span className="sr-only">square button</span>
        </Link>

    )
    else return (
        <button
            className={`${styles.squareButton} ${className} group bg-primary/10
                    hover:bg-primary-dark transition-all duration-300 ease-in-out`}
            onClick={onclick}
        >
            {children}
            <span className="sr-only">square button</span>
        </button>
    )
}

export default SquareButton