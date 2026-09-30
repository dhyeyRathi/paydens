"use client"
import React, { useState } from 'react'
import styles from "../components.css/Navbar.module.css"
import ServicesDropdown from './ServicesDropdown'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { on } from 'events';
import IconChevronDown from '../Icon/IconChevronDown';

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
                            <IconChevronDown className={`group-hover:rotate-180 transition-all duration-300 ease-in-out ${drop && "rotate-180"} ${drop && item.dropdown ? "text-primary" : "text-text"}`} />
                            {drop && <div className='absolute  w-20 h-100  lg:w-35 z-2 inset-0' onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}></div>}
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



    function handleRouting(e: string) {
        router.push(e);
    }

    function handleHover(e: boolean) {
        if (e) {
            setDrop(true);
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
                navItems.map((item) => {

                    function handleClick(dropdown: boolean, route: any,) {
                        if (!item.dropdown && onClick) onClick();
                        if (dropdown) {
                            handleHover(!drop);
                        } else {
                            handleRouting(route);
                        }
                    }
                    return (
                        <button key={item.title} onClick={() => {
                            handleClick(item.dropdown, item.href)

                        }} className={`flex cursor-pointer relative gap-4 h-full hover:text-primary justify-between items-center group transition-all duration-300 ease-in-out ${drop && item.dropdown ? "text-primary" : ""}`}
                            onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}>
                            {item.title}
                            {item.dropdown && <div>
                                <IconChevronDown className={`group-hover:rotate-180 transition-all duration-300 ease-in-out ${drop && "rotate-180"} ${drop && item.dropdown ? "text-primary" : "text-text"}`} />
                                {drop && <div className='absolute  w-20 h-20 lg:h-14  lg:w-35 z-2 inset-0' onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}></div>}
                            </div>

                            }
                        </button>
                    )
                })
            }
            {drop && <ServicesDropdown onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} onClick={() => handleHover(!drop)} />}


        </div>
    )
}

export { NavItemsVar2 };