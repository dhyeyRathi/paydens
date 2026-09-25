import React from 'react'
import styles from './components.css/Footer.module.css'
import TextLogo from "@/public/assets/images/logo/text-logo.png"
import Image from 'next/image'
import WhiteGradient from './ui/WhiteGradient'

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
                        <Image src={TextLogo} alt="footer-logo" className={`${styles.Image}`} />


                        <div className={`${styles.contactDetailBox}`}>
                            <p className={`${styles.contactDetails}`}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V4C0 3.45 0.196 2.97933 0.588 2.588C0.98 2.19667 1.45067 2.00067 2 2H18C18.55 2 19.021 2.196 19.413 2.588C19.805 2.98 20.0007 3.45067 20 4V16C20 16.55 19.8043 17.021 19.413 17.413C19.0217 17.805 18.5507 18.0007 18 18H2ZM10 11L18 6V4L10 9L2 4V6L10 11Z" fill="#37B43D" />
                            </svg>
                                contact@yourpharmacy.co.uk</p>
                            <p className={`${styles.contactDetails}`}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2007_2601)">
                                    <path d="M17.108 8.39244C17.1321 5.57269 14.7305 2.98772 11.7545 2.63027C11.6953 2.62325 11.6308 2.61257 11.5626 2.60126C11.4153 2.57685 11.2629 2.55176 11.1092 2.55176C10.4992 2.55176 10.3362 2.9802 10.2933 3.23573C10.2515 3.48418 10.2913 3.69281 10.4114 3.85611C10.6134 4.13076 10.9688 4.17952 11.2543 4.21859C11.3379 4.23014 11.4169 4.24089 11.483 4.25573C14.1567 4.85319 15.0571 5.7925 15.4971 8.44356C15.5078 8.50834 15.5126 8.58815 15.5178 8.67281C15.537 8.98971 15.577 9.64902 16.2858 9.64902H16.2859C16.3449 9.64902 16.4083 9.64393 16.4743 9.63387C17.1344 9.53356 17.1137 8.93089 17.1038 8.64132C17.101 8.55977 17.0983 8.48263 17.1052 8.43132C17.1071 8.4184 17.108 8.40542 17.108 8.39244Z" fill="#37B43D" />
                                    <path d="M10.9361 1.59553C11.0153 1.60124 11.0903 1.60671 11.1527 1.61627C15.5433 2.29149 17.5625 4.37174 18.1221 8.79671C18.1316 8.87192 18.1331 8.96366 18.1346 9.06081C18.1402 9.40652 18.1517 10.1257 18.9241 10.1406L18.9481 10.1409C19.1903 10.1409 19.383 10.0678 19.5208 9.9236C19.7612 9.67211 19.7444 9.29851 19.7309 8.99826C19.7276 8.92459 19.7244 8.85522 19.7253 8.79447C19.7811 4.26888 15.8637 0.165093 11.3422 0.0124845C11.3234 0.0118634 11.3055 0.0128571 11.2874 0.0154037C11.2785 0.0167081 11.2621 0.018323 11.2339 0.018323C11.1888 0.018323 11.1333 0.0144099 11.0745 0.0104348C11.0034 0.00559006 10.9228 0 10.841 0C10.121 0 9.98408 0.511801 9.96656 0.816894C9.92619 1.52199 10.6083 1.57161 10.9361 1.59553Z" fill="#37B43D" />
                                    <path d="M17.9102 14.5155C17.8169 14.4442 17.7204 14.3704 17.63 14.2976C17.1506 13.9118 16.6406 13.5562 16.1474 13.2123C16.045 13.141 15.9427 13.0696 15.8407 12.9981C15.2089 12.5543 14.6409 12.3386 14.1042 12.3386C13.3814 12.3386 12.7512 12.738 12.2311 13.5255C12.0007 13.8747 11.7211 14.0444 11.3766 14.0444C11.1728 14.0444 10.9414 13.9863 10.6886 13.8716C8.6493 12.9468 7.19309 11.5289 6.36036 9.65727C5.95781 8.75267 6.08831 8.16137 6.79676 7.68013C7.19906 7.40708 7.94788 6.89876 7.89483 5.92534C7.83477 4.81994 5.39576 1.49391 4.36812 1.11615C3.93303 0.95615 3.47589 0.954659 3.00694 1.11242C1.82558 1.50957 0.977814 2.20702 0.555081 3.12926C0.146572 4.02037 0.165019 5.06671 0.608435 6.15516C1.8903 9.30211 3.69253 12.0458 5.96527 14.31C8.18986 16.5264 10.9241 18.3419 14.0919 19.706C14.3774 19.8288 14.6769 19.8958 14.8956 19.9447C14.9702 19.9615 15.0345 19.9758 15.0814 19.9886C15.1072 19.9957 15.1338 19.9994 15.1604 19.9997L15.1855 19.9998C16.6754 19.9998 18.4645 18.6383 19.014 17.0862C19.4953 15.727 18.6164 15.0552 17.9102 14.5155Z" fill="#37B43D" />
                                    <path d="M11.5952 5.19C11.3401 5.19646 10.8092 5.20962 10.623 5.75031C10.5358 6.00298 10.5463 6.22236 10.654 6.40236C10.8122 6.66646 11.1151 6.74739 11.3907 6.7918C12.3902 6.95217 12.9035 7.50484 13.0061 8.53093C13.0538 9.00937 13.376 9.34347 13.7897 9.34347C13.8202 9.34347 13.8515 9.34167 13.8827 9.33788C14.3802 9.27869 14.6214 8.91316 14.5995 8.25155C14.6075 7.56105 14.2461 6.77714 13.6315 6.15273C13.0148 5.52639 12.2714 5.17366 11.5952 5.19Z" fill="#37B43D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2007_2601">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                                01622 754977</p>
                            <p className={`${styles.contactDetails}`}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C6.06702 0 2.78674 3.16815 2.78674 7.21325C2.78674 8.75217 3.24918 10.1244 4.13667 11.4103L9.44799 19.6981C9.70565 20.101 10.2949 20.1002 10.552 19.6981L15.8864 11.3821C16.7547 10.1545 17.2132 8.71304 17.2132 7.21325C17.2132 3.23587 13.9774 0 10 0ZM10 10.492C8.19218 10.492 6.72124 9.02107 6.72124 7.21325C6.72124 5.40544 8.19218 3.9345 10 3.9345C11.8078 3.9345 13.2787 5.40544 13.2787 7.21325C13.2787 9.02107 11.8078 10.492 10 10.492Z" fill="#37B43D" />
                            </svg>
                                Parkwood Sutton Road Maidstone <br />Kent ME15 9NE</p>
                        </div>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className={`${styles.linksBox}`}>
                            <h6 className='font-semibold  text-sm sm:text-base md:text-[20px]'>
                                {section.title}</h6>
                            {section.links.map((link) => (
                                <div key={link.label}>
                                    <a href={link.href} className='flex gap-4 items-center text-[14px] font-[300]'>
                                        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className=" fill-text-secondary" d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z" />
                                        </svg>
                                        {link.label}</a>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
                <div className={`${styles.copyrightText}`}>
                    <div className={`${styles.copyrightTextBox}`}>
                        <hr className='w-full h-[1px] bg-text-secondary/40 border-none' />
                        <div className={`${styles.textMain}`}>
                            <h1>© 2026 Paydens Limited. All rights reserved. <br />Registered in England & Wales. Company No: 00574716</h1>
                            <h1 className='text-text-secondary text-xs sm:text-base md:text-lg'>Medical Emergency?<br />
                                <em className='' >
                                    Call 999 or visit A&E</em></h1>
                        </div>
                        <hr className='w-full h-[1px] bg-text-secondary/40 border-none' />
                    </div>
                    <h1>Powered by healthya | ConX</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer