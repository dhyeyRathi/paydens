"use client"
import React, { use, useState } from 'react'
import Image from 'next/image'
import TextLogo from "@/public/assets/images/logo/text-logo.png"
import InputBar from './ui/InputBar'
import styles from "./components.css/Navbar.module.css"
import FindPharmacyButton, { FindPharmacyCard } from './ui/FindPharmacyButton'
import { Button } from './ui/Button'
import SquareButton from './ui/SquareButton'
import NavItems, { NavItemsVar2 } from './ui/NavItems'
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const router = useRouter();
    const [hamburger, setHamburger] = useState<boolean>(false);

    function handleRouting(e: string) {
        setHamburger(false)
        router.push(e);
    }

    return (<>
        <header className={`${styles.header} paydens-shadow`}>
            <div className={`${styles.container} bg-primary/10  w-full min-[769px]:rounded-b-none`}>
                <div className={`${styles.logoSearchCont} flex-1`}>
                    <a href='/' onClick={() => setHamburger(false)}> <Image className={styles.LogoText} src={TextLogo} alt="logo" /></a>

                    <InputBar placeholder='What condition are you looking for?' className={`${styles.Input}`} >
                        <SquareButton className={`${styles.searchButton} group`} size="clamp(24px, 5vw, 48px)">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className='scale-60 md:scale-100' xmlns="http://www.w3.org/2000/svg">
                                <path className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' d="M8 16C6.41775 16 4.87103 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346625 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346625 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87103 16 6.41775 16 8C15.9976 10.121 15.154 12.1545 13.6542 13.6542C12.1545 15.154 10.121 15.9976 8 16ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17055C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C13.9984 6.40919 13.3658 4.88399 12.2409 3.75912C11.116 2.63424 9.59082 2.00159 8 2Z" />
                                <path className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' d="M16.9999 18.0004C16.7347 18.0003 16.4804 17.895 16.2929 17.7074L12.2929 13.7074C12.1108 13.5188 12.01 13.2662 12.0122 13.004C12.0145 12.7418 12.1197 12.491 12.3051 12.3056C12.4905 12.1202 12.7413 12.015 13.0035 12.0127C13.2657 12.0105 13.5183 12.1112 13.7069 12.2934L17.7069 16.2934C17.8467 16.4333 17.9419 16.6114 17.9805 16.8054C18.0191 16.9993 17.9993 17.2004 17.9236 17.3831C17.8479 17.5658 17.7198 17.7219 17.5554 17.8318C17.391 17.9417 17.1977 18.0004 16.9999 18.0004Z" />
                            </svg>

                        </SquareButton>
                    </InputBar>
                </div>
                <FindPharmacyButton className=' !hidden min-[769px]:!flex' card={true} />
                <FindPharmacyButton className=' !flex min-[769px]:!hidden text-xs ' card={false} />

                <button onClick={() => setHamburger(!hamburger)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`lucide lucide-menu h-10 w-10 min-[769px]:hidden mr-2 min-[769px]:mr-0 stroke-black transition-all duration-300 ${hamburger && "!stroke-primary !fill-primary"}`}>
                        <path d="M4 5h16" />
                        <path d="M4 12h16" />
                        <path d="M4 19h16" />
                    </svg></button>
            </div>


            <div className={` ${styles.container2}`}>
                <NavItems />
                {/*  */}
                <div className="flex gap-2 justify-end w-full !hidden min-[769px]:!flex">
                    <SquareButton onclick={() => handleRouting('/account')}>
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.03991 0C5.27849 0 3.03992 2.23858 3.03992 5C3.03992 7.76142 5.27849 10 8.03991 10C10.8013 10 13.0399 7.76142 13.0399 5C13.0399 2.23858 10.8013 0 8.03991 0Z" className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.03995 11C3.3772 11 1.77819 11.7585 0.841105 12.9004C0.365505 13.48 0.0311652 14.1971 0.00205524 14.9919C-0.0276748 15.8036 0.265315 16.5958 0.869535 17.2871C2.3421 18.9716 4.69323 20 8.03995 20C11.3866 20 13.7378 18.9716 15.2103 17.2871C15.8146 16.5958 16.1075 15.8036 16.0778 14.9919C16.0487 14.1971 15.7144 13.48 15.2388 12.9004C14.3017 11.7585 12.7027 11 11.0399 11H5.03995Z" className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' />
                        </svg>
                    </SquareButton>
                    <Button className='text-xs md:text-2xl lg:text-lg !py-2 '>Order Prescription</Button>
                </div>



                <div className={`${styles.mobileContainer} ${hamburger && styles.mobileContainerActive}`}>
                    <div>
                        <InputBar placeholder='What condition are you looking for?' className={`${styles.Input}`} >
                            <SquareButton className={`${styles.searchButton} group`} >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className='' xmlns="http://www.w3.org/2000/svg">
                                    <path className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' d="M8 16C6.41775 16 4.87103 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346625 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346625 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87103 16 6.41775 16 8C15.9976 10.121 15.154 12.1545 13.6542 13.6542C12.1545 15.154 10.121 15.9976 8 16ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17055C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C13.9984 6.40919 13.3658 4.88399 12.2409 3.75912C11.116 2.63424 9.59082 2.00159 8 2Z" />
                                    <path className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' d="M16.9999 18.0004C16.7347 18.0003 16.4804 17.895 16.2929 17.7074L12.2929 13.7074C12.1108 13.5188 12.01 13.2662 12.0122 13.004C12.0145 12.7418 12.1197 12.491 12.3051 12.3056C12.4905 12.1202 12.7413 12.015 13.0035 12.0127C13.2657 12.0105 13.5183 12.1112 13.7069 12.2934L17.7069 16.2934C17.8467 16.4333 17.9419 16.6114 17.9805 16.8054C18.0191 16.9993 17.9993 17.2004 17.9236 17.3831C17.8479 17.5658 17.7198 17.7219 17.5554 17.8318C17.391 17.9417 17.1977 18.0004 16.9999 18.0004Z" />
                                </svg>

                            </SquareButton></InputBar>
                        <NavItemsVar2 onClick={() => setHamburger(false)} />


                        <div className="flex gap-2 px-6 w-full flex">

                            <SquareButton onclick={() => handleRouting('/account')}>
                                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.03991 0C5.27849 0 3.03992 2.23858 3.03992 5C3.03992 7.76142 5.27849 10 8.03991 10C10.8013 10 13.0399 7.76142 13.0399 5C13.0399 2.23858 10.8013 0 8.03991 0Z" className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.03995 11C3.3772 11 1.77819 11.7585 0.841105 12.9004C0.365505 13.48 0.0311652 14.1971 0.00205524 14.9919C-0.0276748 15.8036 0.265315 16.5958 0.869535 17.2871C2.3421 18.9716 4.69323 20 8.03995 20C11.3866 20 13.7378 18.9716 15.2103 17.2871C15.8146 16.5958 16.1075 15.8036 16.0778 14.9919C16.0487 14.1971 15.7144 13.48 15.2388 12.9004C14.3017 11.7585 12.7027 11 11.0399 11H5.03995Z" className='fill-primary group-hover:fill-white transition-all duration-300 ease-in-out' />
                                </svg>
                            </SquareButton>
                            <Button className='text-xs md:text-2xl lg:text-lg !py-2 '>Order Prescription</Button>
                        </div>



                    </div>


                </div>
            </div>

            {/* <div className={`${styles.mobileContainer}`}>
                <h1>hi</h1>
            </div> */}

        </header>

    </>
    )
}

export default Navbar