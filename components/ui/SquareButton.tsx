import React from 'react'
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
            className={` ${className} group bg-primary/10
                    hover:bg-primary-dark transition-all duration-300 ease-in-out flex flex-row items-center justify-center aspect-square !w-[2.75rem] !h-[2.75rem] gap-2.5 rounded-lg p-0
  max-[90rem]:rounded-[0.625rem]
  max-[48rem]:rounded-[0.625rem]`}
            onClick={onclick}
        >
            {children}
            <span className="sr-only">square button</span>
        </Link>

    )
    else return (
        <button
            className={` ${className} group bg-primary/10
                    hover:bg-primary-dark transition-all duration-300 ease-in-out flex flex-row items-center justify-center aspect-square !w-[2.75rem] !h-[2.75rem] gap-2.5 rounded-lg p-0
  max-[90rem]:rounded-[0.625rem]
  max-[48rem]:rounded-[0.625rem]`}
            onClick={onclick}
        >
            {children}
            <span className="sr-only">square button</span>
        </button>
    )
}

export default SquareButton