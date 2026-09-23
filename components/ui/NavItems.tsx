"use client"
import React, { useState } from 'react'
import styles from "../components.css/Navbar.module.css"
import ServicesDropdown from './ServicesDropdown'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { on } from 'events';

interface NavItem {
    title?: string;
    href?: string;
    dropdown: boolean

}

interface NavItem2 {

    onClick?: () => void
}


const NavItems = () => {

    const [drop, setDrop] = useState<boolean>(false);
    const router = useRouter();

    function handleClick(drop: boolean, route: any) {
        if (drop) {
            handleHover(true);
        } else {
            handleRouting(route);
        }
    }

    function handleRouting(e: string) {
        router.push(e);
    }


    function handleHover(e: boolean) {
        if (e) {
            setDrop(true);
            return;
        }
        else {
            setDrop(false);
        };

    }
    const navItems: NavItem[] = [
        {
            title: 'Our Services',
            dropdown: true,
            href: '/',
        },
        {
            title: 'Shop Online',
            dropdown: false,
            href: '',
        },
        {
            title: 'Weight Management',
            dropdown: false,
            href: '',

        },
        {
            title: 'About Us',
            dropdown: false,
            href: '/about',
        },
    ];
    return (
        <div className={`${styles.navItemsCont} h-full`}>
            {
                navItems.map((item) => (
                    <button key={item.title} onClick={() => handleClick(item.dropdown, item.href)} className={`flex cursor-pointer relative gap-4 h-full hover:text-primary justify-between items-center group transition-all duration-300 ease-in-out ${drop && item.dropdown ? "text-primary" : ""}`}
                        onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}>
                        {item.title}
                        {item.dropdown && <div>
                            <svg width="11" height="6" viewBox="0 0 11 6" className={` group-hover:rotate-180  ${drop && "rotate-180"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={` group-hover:fill-primary transition-all duration-300 ease-in-out ${drop && item.dropdown ? "fill-primary" : "fill-text"}`} d="M0.88332 -0.000134586L-1.32911e-05 0.884032L4.81415 5.69987C4.89129 5.77749 4.98302 5.8391 5.08406 5.88114C5.18511 5.92318 5.29346 5.94482 5.4029 5.94482C5.51234 5.94482 5.6207 5.92318 5.72174 5.88114C5.82278 5.8391 5.91451 5.77749 5.99165 5.69987L10.8083 0.884032L9.92499 0.000698556L5.40415 4.5207L0.88332 -0.000134586Z" />
                            </svg>
                            {drop && <div className='absolute  w-5 md:w-20 h-16 lg:h-18  lg:w-35 z-2 inset-0' onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}></div>}
                        </div>

                        }
                    </button>
                ))
            }
            {drop && <ServicesDropdown onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} />}

        </div>
    )
}

export default NavItems

const NavItemsVar2 = ({ onClick }: NavItem2) => {

    const [drop, setDrop] = useState<boolean>(false);
    const router = useRouter();

    function handleClick(dropdown: boolean, route: any, func: any) {
        if (onClick && !dropdown) onClick();
        if (dropdown) {
            handleHover(!drop);
        } else {
            handleRouting(route);
        }
    }

    function handleRouting(e: string) {
        router.push(e);
    }

    function handleHover(e: boolean) {
        if (e) {
            setDrop(true);
            return;
        }
        else {
            setDrop(false);
        };

    }
    const navItems: NavItem[] = [
        {
            title: 'Our Services',
            dropdown: true,
            href: '/allconditions-health',
        },
        {
            title: 'Shop Online',
            dropdown: false,
            href: '',
        },
        {
            title: 'Weight Management',
            dropdown: false,
            href: '',

        },
        {
            title: 'About Us',
            dropdown: false,
            href: '/about',
        },
    ];
    return (
        <div className={`${styles.navItemsCont} h-full`} >
            {
                navItems.map((item) => (
                    <button key={item.title} onClick={() => {
                        handleClick(item.dropdown, item.href, onClick)

                    }} className={`flex cursor-pointer relative gap-4 h-full hover:text-primary justify-between items-center group transition-all duration-300 ease-in-out ${drop && item.dropdown ? "text-primary" : ""}`}
                        onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}>
                        {item.title}
                        {item.dropdown && <div>
                            <svg width="11" height="6" viewBox="0 0 11 6" className={` group-hover:rotate-180  ${drop && "rotate-180"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className={` group-hover:fill-primary transition-all duration-300 ease-in-out ${drop && item.dropdown ? "fill-primary" : "fill-text"}`} d="M0.88332 -0.000134586L-1.32911e-05 0.884032L4.81415 5.69987C4.89129 5.77749 4.98302 5.8391 5.08406 5.88114C5.18511 5.92318 5.29346 5.94482 5.4029 5.94482C5.51234 5.94482 5.6207 5.92318 5.72174 5.88114C5.82278 5.8391 5.91451 5.77749 5.99165 5.69987L10.8083 0.884032L9.92499 0.000698556L5.40415 4.5207L0.88332 -0.000134586Z" />
                            </svg>
                            {drop && <div className='absolute  w-5 md:w-20 h-20 lg:h-14  lg:w-35 z-2 inset-0' onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}></div>}
                        </div>

                        }
                    </button>
                ))
            }


        </div>
    )
}

export { NavItemsVar2 };