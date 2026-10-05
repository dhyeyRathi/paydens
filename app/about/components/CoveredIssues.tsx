import React from 'react'
import styles from './components.css/CoveredIssies.module.css'
import IconArrowTopRightGreen from '@/components/Icon/IconArrowTopRightGreen'

const CoveredIssues = () => {
    return (
        <section className={` w-screen  px-6 md:px-16  py-10 bg-blue-100/90 !self-center  flex justify-center flex-col lg:flex-row gap-5 sm:gap-10 lg:gap-20 animationPopUp ${styles.cont}`}>
            <div className='flex flex-col gap-10  max-w-100 md:max-w-160 lg:max-w-160 !self-center'>
                <h2 className='text-2xl md:text-3xl lg:text-heading font-bold '><em className='text-primary'>Responsible</em> Healthcare, Beyond <br /> the Pharmacy</h2>
                <p className='text-sm md:text-base lg:text-lg text-text-secondary/90 text-justify' >At Paydens, we embrace the evolving role of pharmacy with a strong commitment to providing high-quality, local healthcare services. As a family-run business, we combine the personal care of an independent pharmacy with the strength and resources of the Paydens Group. From small village pharmacies to large high-street branches, our network offers a wide range of pharmacy services.</p>
                <hr className='w-full h-[2px] bg-border border-0' />

                <p className='text-sm md:text-base lg:text-lg text-text-secondary/90'> Paydens Group operates a <em className='underline'>pharmaceutical wholesaler</em>, Sangers (Maidstone) Ltd, co-located at our Head Office in Maidstone, supporting our pharmacy network.</p>
            </div>
            <div className='grid grid-cols-2 max-w-200 gap-5 lg:gap-x-10 !self-center'>
                <div className=' flex bg-white p-6 h-full w-full  rounded-2xl relative lg:w-60'>
                    <h3 className='text-base sm:text-xl lg:text-2xl'>Foundation <br /> Training</h3>
                    <IconArrowTopRightGreen className="absolute right-[10%] bottom-[10%] h-10 w-10 lg:h-15 lg:w-15" />
                </div>
                <div className=' flex bg-white p-6 h-full w-full rounded-2xl relative lg:w-60'>
                    <h3 className='text-base sm:text-xl lg:text-2xl'>Enviormental <br />Issues</h3>
                    <IconArrowTopRightGreen className="absolute right-[10%] bottom-[10%] h-10 w-10 lg:h-15 lg:w-15" />
                </div>
                <div className=' flex bg-white p-6  h-full w-full rounded-2xl relative lg:w-60'>
                    <h3 className='text-base sm:text-xl lg:text-2xl'>Gender Pay <br />Gap</h3>
                    <IconArrowTopRightGreen className="absolute right-[10%] bottom-[10%] h-10 w-10 lg:h-15 lg:w-15" />
                </div>
                <div className=' flex bg-white p-6 h-full w-full rounded-2xl relative lg:w-60'>
                    <h3 className='text-base sm:text-xl lg:text-2xl'>Modern<br /> Slavery Act</h3>
                    <IconArrowTopRightGreen className="absolute right-[10%] bottom-[10%] h-10 w-10 lg:h-15 lg:w-15" />
                </div>


            </div>

        </section>
    )
}

export default CoveredIssues