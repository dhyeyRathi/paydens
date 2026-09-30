import React from 'react'
import styles from './components.css/Footer.module.css'
import { LogoText } from './Icon/Logo/Logo'
import Image from 'next/image'
import WhiteGradient from './ui/WhiteGradient'
import IconEmail from './Icon/IconEmail'
import IconPhone from './Icon/IconPhone'
import IconLocation from './Icon/IconLocation'
import IconChevronRight from './Icon/IconChevronRight'

const Footer = () => {
    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { label: "Pharmacy Services", href: "/" },
                { label: "Find a Pharmacy", href: "/" },
                { label: "Shop Online", href: "/" },
                { label: "Join Our Team", href: "/" },
                { label: "Contact Us", href: "/" },
                { label: "Site Map", href: "/" },
            ],
        },
        {
            title: "About Paydens",
            links: [
                { label: "Who are Paydens", href: "/" },
                { label: "Pharmaceutical Wholesaler", href: "/" },
                { label: "Training", href: "/" },
                { label: "Environmental Issues", href: "/" },
                { label: "Gender Pay Gap", href: "/" },
                { label: "Modern Slavery Act", href: "/" },
            ],
        },
        {
            title: "Legal & Safety",
            links: [
                { label: "Complaints Procedure", href: "/" },
                { label: "Privacy Policy", href: "/" },
                { label: "Cookie Policy", href: "/" },
                { label: "Terms & Conditions", href: "/" },
            ],
        },
    ];
    return (
        <div className={`${styles.footer} paydens-shadow`}>
            <div className={`${styles.footerCont}`}>
                <div className={`${styles.linkGrid}`}>
                    <div className={`${styles.contactBox}`}>
                        <LogoText className={`${styles.Image}`} />


                        <div className={`${styles.contactDetailBox}`}>
                            <p className={`${styles.contactDetails}`}><IconEmail />
                                contact@yourpharmacy.co.uk</p>
                            <p className={`${styles.contactDetails}`}><IconPhone />
                                01622 754977</p>
                            <p className={`${styles.contactDetails}`}><IconLocation />
                                Parkwood Sutton Road Maidstone <br />Kent ME15 9NE</p>
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className={`${styles.linksBox}`}>
                            <h6 className='font-semibold  text-sm sm:text-base md:text-[20px]'>
                                {section.title}</h6>
                            <ul className='gap-[6.5px] flex flex-col '>
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className='flex gap-4 pb-[7.5px] items-center text-[14px] font-[300]'>
                                            <IconChevronRight />
                                            {link.label}</a>
                                    </li>
                                ))}</ul>
                        </div>
                    ))}

                </div>
                <div className={`${styles.copyrightText}`}>
                    <div className={`${styles.copyrightTextBox}`}>
                        <hr className='w-full h-[1px] bg-text-secondary/40 border-none' />
                        <div className={`${styles.textMain}`}>
                            <p>© 2026 Paydens Limited. All rights reserved. <br />Registered in England & Wales. Company No: 00574716</p>
                            <p className='text-text-secondary text-xs sm:text-base md:text-lg'>Medical Emergency?<br />
                                <em className='' >
                                    Call 999 or visit A&E</em>
                            </p>
                        </div>
                        <hr className='w-full h-[1px] bg-text-secondary/40 border-none' />
                    </div>
                    <p>Powered by healthya | ConX</p>
                </div>
            </div>
        </div>
    )
}

export default Footer