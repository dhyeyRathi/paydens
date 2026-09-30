import React from 'react'
import styles from './components.css/Hero.module.css'
import IconHealthcarePartner from '@/components/Icon/IconHealthcarePartner'
import GPHC from '@/components/Icon/Logo/GPHC'
import MHRA from '@/components/Icon/Logo/MHRA'
import RegisteredPharmacy from '@/components/Icon/Logo/RegisteredPharmacy'


const Hero = () => {
    return (
        <section className='w-full'>


            <div className={`${styles.Text}`}>
                <h1 className='w-full text-center px-4 lg:max-w-[50%] md:text-start text-3xl leading-snug lg:text-6xl font-bold'>
                    Your <em className='text-button-hover'>Trusted <br /></em> Healthcare Partner<br /> Since 1969.
                </h1>
                <IconHealthcarePartner className="absolute bottom-5 scale-140 left-90 hidden lg:block w-[153px] h-[153px]" />


                <div className={`${styles.CardContainer}`}>
                    <div className='flex font-quicksand bg-background px-2 py-3 md:px-8 md:py-6 w-full rounded-2xl justify-between md:items-center gap-2 paydens-shadow'>
                        <div className='flex flex-col md:max-w-[60%]'>
                            <h2 className='text-lg md:text-2xl font-bold'>UK Registered Pharmacy</h2>
                            <p className='text-sm md:text-base'>Paydens pharmacies are registered and operate in line with UK pharmacy regulations.</p>
                        </div>
                        <RegisteredPharmacy className='h-8 md:h-15 w-auto ' />
                    </div>

                    <div className='flex font-quicksand bg-background px-2 py-3 md:px-8 md:py-6  w-full  rounded-2xl justify-between gap-2 md:items-center paydens-shadow' >
                        <div className='flex flex-col md:max-w-[60%]'>
                            <h2 className='text-lg md:text-2xl font-bold'>GPhC Regulated Pharmacy</h2>
                            <p className='text-sm md:text-base'>All Paydens pharmacies are regulated by the General Pharmaceutical Council (GPhC) in Great Britain.</p>
                        </div>
                        <GPHC className='h-10 md:h-15 w-auto ' />
                    </div>

                    <div className='flex font-quicksand bg-background px-2 py-3 md:px-8 md:py-6  w-full  rounded-2xl justify-between gap-2 md:items-center paydens-shadow'>
                        <div className='flex flex-col md:max-w-[60%]'>
                            <h2 className='text-lg md:text-2xl font-bold'>MHRA Compliant</h2>
                            <p className='text-sm md:text-base'>Paydens follows MHRA guidelines for the safe supply of medicines and healthcare products in the UK.</p>
                        </div>
                        <MHRA className=' ' />
                    </div>
                </div>
            </div>
            <img src="/assets/images/ui/pharmacyphoto.png" className='w-full' />
        </section>
    )
}

export default Hero