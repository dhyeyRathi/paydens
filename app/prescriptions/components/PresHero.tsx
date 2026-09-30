import React from 'react'
import styles from './presHero.module.css'

import { Button, ButtonVar2 } from '@/components/ui/Button'
import Image from 'next/image'
import avatars from '@/public/assets/images/Avatars/multiple.png'
import NHS from '@/components/Icon/Logo/NHS'
import IconPresHero1 from '@/components/Icon/IconPresHero1'
import IconPresHero3 from '@/components/Icon/IconPresHero3'
import IconPresHero2 from '@/components/Icon/IconPresHero2'
import IconPresHero6 from '@/components/Icon/IconPresHero6'


const PresHero = () => {
    return (
        <section className={`${styles.Hero} `}>

            <div className={`${styles.Cont}`}>
                <div className={`${styles.Text}`}>
                    <h1 className='w-full text-2xl lg:text-heading font-bold text-center lg:text-start' >
                        <em className='text-button-hover'>Free</em> NHS Prescriptions<br /> <em className='text-button-hover'>Delivered </em> to your Door.
                    </h1>

                    <ul className='lg:!self-start'>
                        <li>Simple online ordering with full GP approval.</li>
                        <li> Safe and secure handling of your prescriptions.</li>
                        <li> Reliable service with free home delivery.</li>
                    </ul>

                    <div className='flex gap-4 w-full !justify-center md:!justify-start'>
                        <Button className='!w-[250px] '>Register For Free</Button>
                        <ButtonVar2 className='h-full'>Login & Reorder</ButtonVar2>
                    </div>


                </div>
                <div className={`${styles.Icon}`}>
                    <div className='flex items-center justify-center relative'>
                        <IconPresHero1 className="w-100 h-100" />
                        <IconPresHero2 className="absolute" />



                    </div>
                    <div className='absolute bottom-[2%] left-0 md:left-[-10%] paydens-shadow bg-white rounded-2xl h-16 md:h-20 p-3 md:p-4 px-4 md:px-6 w-auto flex gap-1 md:gap-4 scale-75 md:scale-100 origin-bottom-left'>
                        <Image src={avatars} alt='multipleAvatars' className='h-full w-auto' />
                        <div className='flex flex-col gap-2 scale-75 '>
                            <div className='flex gap-2 h-6'>
                                <IconPresHero3 className="h-full w-auto" />
                                <IconPresHero3 className="h-full w-auto" />
                                <IconPresHero3 className="h-full w-auto" />
                                <IconPresHero6 className="h-full w-auto" />

                                <IconPresHero6 className="h-full w-auto" />
                            </div>
                            <p >4.9 (1257 Ratings)</p>
                        </div>

                    </div>
                    <div className='absolute top-[2%] right-0 md:right-[10%] paydens-shadow bg-white rounded-2xl py-3 md:py-4 px-3 md:px-4 gap-2 w-auto flex-col items-end flex scale-75 md:scale-100 origin-top-right'>
                        <NHS className='h-6 w-auto' />
                        <p className='!font-bold'>Providing NHS services</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PresHero