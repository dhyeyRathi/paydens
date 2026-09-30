"use client"
import React, { use, useState, useEffect } from 'react'
import Image from 'next/image'
import { LogoText } from './Icon/Logo/Logo'
import InputBar from './ui/InputBar'
import styles from "./components.css/Navbar.module.css"
import FindPharmacyButton, { FindPharmacyCard } from './ui/FindPharmacyButton'
import { Button } from './ui/Button'
import SquareButton from './ui/SquareButton'
import NavItems, { NavItemsVar2 } from './ui/NavItems'
import { useRouter } from 'next/navigation'
import IconSearch from './Icon/IconSearch'
import IconMenu from './Icon/IconMenu'
import IconAccount from './Icon/IconAccount'

const Navbar = () => {

    const router = useRouter();
    const [hamburger, setHamburger] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    function handleRouting(e: string) {
        setHamburger(false)
        router.push(e);
    }
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             setIsScrolled(true);
    //         } else {
    //             setIsScrolled(false);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (<>
        <header className={`${styles.header} paydens-shadow`}>
            <div className={`${styles.container} bg-primary/10  w-full min-[769px]:rounded-b-none `}>
                <div className={`${styles.logoSearchCont} flex-1`}>
                    <a href='/' onClick={() => setHamburger(false)}>  <LogoText className={`${styles.LogoText}`} /></a>

                    <InputBar placeholder='What condition are you looking for?' className={`${styles.Input}`} >
                        <SquareButton className={`${styles.searchButton} group`} size="clamp(24px, 5vw, 48px)">
                            <IconSearch className="scale-60 md:scale-100" />

                        </SquareButton>
                    </InputBar>
                </div>
                <FindPharmacyButton className=' !hidden min-[769px]:!flex' card={true} />
                <FindPharmacyButton className=' !flex min-[769px]:!hidden !text-12 max-w-40 scale-90' card={false} />

                <button onClick={() => setHamburger(!hamburger)}>
                    <IconMenu className={`lucide lucide-menu h-10 w-10 min-[769px]:hidden mr-2 min-[769px]:mr-0 stroke-black transition-all duration-300 ${hamburger && "!stroke-primary !fill-primary"}`} />
                </button>
            </div>


            <div className={` ${styles.container2}`}>
                <NavItems />
                {/*  */}
                <div className="flex gap-2 justify-end w-full !hidden min-[769px]:!flex">
                    <SquareButton onclick={() => handleRouting('/account')}>
                        <IconAccount />
                    </SquareButton>
                    <Button className='text-xs md:text-2xl lg:text-lg'>Order Prescription</Button>
                </div>



                <div className={`${styles.mobileContainer} ${hamburger && styles.mobileContainerActive}`}>
                    <div>
                        <InputBar placeholder='What condition are you looking for?' className={`${styles.Input}`} >
                            <SquareButton className={`${styles.searchButton} group`} >
                                <IconSearch />

                            </SquareButton></InputBar>
                        <NavItemsVar2 onClick={() => setHamburger(false)} />


                        <div className="flex gap-2 px-6 w-full flex">

                            <SquareButton onclick={() => handleRouting('/account')}>
                                <IconAccount />
                            </SquareButton>
                            <Button className='text-xs md:text-2xl lg:text-lg'>Order Prescription</Button>
                        </div>



                    </div>


                </div>
            </div>



        </header>

    </>
    )
}

export default Navbar