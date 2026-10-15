"use client"
import { useState } from 'react'
import Link from 'next/link'
import { LogoText } from './Icon/Logo/Logo'
import InputBar from './ui/InputBar'
import styles from "./components.css/Navbar.module.css"
import FindPharmacyButton from './ui/FindPharmacyButton'
import { Button } from './ui/Button'
import SquareButton from './ui/SquareButton'
import NavItems, { NavItemsVar2 } from './ui/NavItems'
import IconSearch from './Icon/IconSearch'
import IconMenu from './Icon/IconMenu'
import IconAccount from './Icon/IconAccount'

const Navbar = () => {


    const [hamburger, setHamburger] = useState<boolean>(false);


    function handleHam() {
        setHamburger(false)
    }

    return (<>
        <header className={`${styles.header} paydens-shadow`}>
            <div className={`${styles.container} bg-primary/10  w-full min-[48.0625rem]:rounded-b-none `}>
                <div className={`${styles.logoSearchCont} flex-1`}>
                    <Link aria-label="paydens logo" href='/' onClick={() => setHamburger(false)}>  <span className="sr-only">logo image</span>
                        <LogoText className={`${styles.LogoText}`} /></Link>

                    <InputBar name='dekstop/tablet ' placeholder='What condition are you looking for?' className={`${styles.Input}`} >
                        <SquareButton className={`${styles.searchButton} group`} size="clamp(1.5rem, 5vw, 3rem)">
                            <IconSearch className="scale-60 md:scale-100" />

                        </SquareButton>
                    </InputBar>
                </div>
                <FindPharmacyButton className=' hidden min-[48.0625rem]:flex' card={true} />
                <FindPharmacyButton className=' flex min-[48.0625rem]:hidden text-12 max-w-40 scale-90' card={false} />

                <button aria-label="hamburger menu" onClick={() => setHamburger(!hamburger)}>
                    <span className="sr-only">hamburger menu button</span>
                    <IconMenu className={`lucide lucide-menu h-10 w-10 min-[48.0625rem]:hidden mr-2 min-[48.0625rem]:mr-0 stroke-black transition-all duration-300 
                        ${hamburger && "stroke-primary fill-primary"}`} />
                </button>
            </div>


            <div className={` ${styles.container2}`}>
                <NavItems />
                {/*  */}
                <div className="flex gap-2 justify-end w-full hidden min-[48.0625rem]:flex">
                    <SquareButton onclick={() => handleHam()} type='Link' href={`/account`}>
                        <IconAccount />
                    </SquareButton>
                    <Button >Order Prescription</Button>
                </div>



                <div className={`${styles.mobileContainer} ${hamburger && styles.mobileContainerActive}`}>
                    <div>
                        <InputBar name='phone ' placeholder='What condition are you looking for?' className={`${styles.Input}`} >
                            <SquareButton className={`${styles.searchButton} group`} >
                                <IconSearch />

                            </SquareButton></InputBar>
                        <NavItemsVar2 onClick={() => setHamburger(false)} />


                        <div className="flex gap-2 px-6 w-full flex">

                            <SquareButton onclick={() => handleHam()} type='Link' href={`/account`}>
                                <IconAccount />
                            </SquareButton>
                            <Button >Order Prescription</Button>
                        </div>



                    </div>


                </div>
            </div>



        </header>

    </>
    )
}

export default Navbar