"use client"
import React, { useState } from 'react'
import styles from "../components.css/Navbar.module.css"
import ServicesDropdown from './ServicesDropdown'

interface NavItem {
    title?: string;
    href?: string;
    dropdown: boolean
}


const NavItems = () => {

    const [drop, setDrop] = useState<boolean>(false);

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
            dropdown: true
        },
        {
            title: 'Shop Online',
            dropdown: false
        },
        {
            title: 'Weight Management',
            dropdown: false

        },
        {
            title: 'Flu Vaccination',
            dropdown: false
        },
    ];
    return (
        <div className={`${styles.navItemsCont}`}>
            {
                navItems.map((item) => (
                    <button key={item.title} onClick={() => handleHover(!drop)} className={`flex cursor-pointer relative gap-4 h-full hover:text-primary justify-between items-center group transition-all duration-300 ease-in-out ${drop && item.dropdown ? "text-primary" : ""}`} onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}>
                        {item.title}
                        {item.dropdown && <div> <svg width="11" height="6" viewBox="0 0 11 6" className={` group-hover:rotate-180  ${drop && "rotate-180"}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={` group-hover:fill-primary transition-all duration-300 ease-in-out ${drop && item.dropdown ? "fill-primary" : "fill-text"}`} d="M0.88332 -0.000134586L-1.32911e-05 0.884032L4.81415 5.69987C4.89129 5.77749 4.98302 5.8391 5.08406 5.88114C5.18511 5.92318 5.29346 5.94482 5.4029 5.94482C5.51234 5.94482 5.6207 5.92318 5.72174 5.88114C5.82278 5.8391 5.91451 5.77749 5.99165 5.69987L10.8083 0.884032L9.92499 0.000698556L5.40415 4.5207L0.88332 -0.000134586Z" />
                        </svg>
                            <div className='absolute  w-5 md:w-20 h-16  lg:w-40  z-2 inset-0' onMouseEnter={() => handleHover(item.dropdown)} onMouseLeave={() => handleHover(false)}></div>
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