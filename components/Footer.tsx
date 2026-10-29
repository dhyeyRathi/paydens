import styles from './components.css/Footer.module.css'
import { LogoText } from './Icon/Logo/Logo'
import IconEmail from './Icon/IconEmail'
import IconPhone from './Icon/IconPhone'
import IconLocation from './Icon/IconLocation'
import IconChevronRight from './Icon/IconChevronRight'
import Link from 'next/link'

const Footer = () => {
    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { label: "Pharmacy Services", href: "#" },
                { label: "Find a Pharmacy", href: "/findpharmacy" },
                { label: "Shop Online", href: "#" },
                { label: "Join Our Team", href: "/joinourteam" },
                { label: "Contact Us", href: "/account" },
                { label: "Site Map", href: "/sitemap.xml" },
            ],
        },
        {
            title: "About Paydens",
            links: [
                { label: "Who are Paydens", href: "#" },
                { label: "Pharmaceutical Wholesaler", href: "#" },
                { label: "Training", href: "#" },
                { label: "Environmental Issues", href: "#" },
                { label: "Gender Pay Gap", href: "#" },
                { label: "Modern Slavery Act", href: "#" },
            ],
        },
        {
            title: "Legal & Safety",
            links: [
                { label: "Complaints Procedure", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
            ],
        },
    ];
    return (
        <footer className={`${styles.footer} paydens-shadow`}>
            <div className={`${styles.footerCont}`}>
                <div className={`${styles.linkGrid}`}>
                    <div className={`${styles.contactBox}`}>
                        <LogoText className={`${styles.Image}`} />


                        <div className={`${styles.contactDetailBox}`}>
                            <Link aria-label="Email us at contact@yourpharmacy.co.uk" className={`${styles.contactDetails}`} href="mailto:contact@yourpharmacy.co.uk"><IconEmail />
                                contact@yourpharmacy.co.uk</Link>
                            <Link aria-label="Call us at 01622 754977" href="tel:+441622754977" className={`${styles.contactDetails}`}><IconPhone />
                                01622 754977</Link>
                            <Link aria-label="View our location on Google Maps: Parkwood Sutton Road Maidstone Kent ME15 9NE" className={`${styles.contactDetails}`} href='https://www.google.com/maps/place/Park+Wood+Hand+Car+Wash/@51.2427677,0.5563211,17z/data=!3m1!4b1!4m6!3m5!1s0x47df31e045bb788b:0x4fb7954a969cd2f5!8m2!3d51.2427677!4d0.558896!16s%2Fg%2F11f4lf5hw2?entry=ttu&g_ep=EgoyMDI2MDkyOC4wIKXMDSoASAFQAw%3D%3D'><IconLocation />
                                Parkwood Sutton Road Maidstone <br />Kent ME15 9NE</Link>
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className={`${styles.linksBox}`}>
                            <h3 className='font-semibold text-sm sm:text-base md:text-xl'>
                                {section.title}</h3>
                            <ul className='gap-1.5 flex flex-col '>
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link aria-label={link.label} href={link.href} className='flex gap-4 pb-[7.5px] items-center text-sm font-[300]'>
                                            <IconChevronRight />
                                            {link.label}</Link>
                                    </li>
                                ))}</ul>
                        </div>
                    ))}

                </div>
                <div className={`${styles.copyrightText}`}>
                    <div className={`${styles.copyrightTextBox}`}>
                        <hr className='w-full h-px bg-text-secondary/40 border-none' />
                        <div className={`${styles.textMain}`}>
                            <p>© 2026 Paydens Limited. All rights reserved. <br />Registered in England & Wales. Company No: 00574716</p>
                            <p className='text-text-secondary text-xs sm:text-base md:text-lg'>Medical Emergency?<br />
                                <em className='' >
                                    Call 999 or visit A&E</em>
                            </p>
                        </div>
                        <hr className='w-full h-px bg-text-secondary/40 border-none' />
                    </div>
                    <p>Powered by healthya | ConX</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer