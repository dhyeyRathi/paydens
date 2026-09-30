import React from 'react'
import IconWorkingStep4 from '@/components/Icon/IconWorkingStep4'
import IconWorkingStep1 from '@/components/Icon/IconWorkingStep1'
import IconWorkingStep3 from '@/components/Icon/IconWorkingStep3'
import IconWorkingStep2 from '@/components/Icon/IconWorkingStep2'

const Working = () => {

    return (
        <section className='flex flex-col gap-20'>
            <h2 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-heading font-bold'>
                How does Our Online <em className='text-button-hover'>NHS Prescriptions</em> <br />Service Work
            </h2>
            <div className='flex w-full justify-center md:justify-evenly items-center gap-10 md:gap-0 flex-col md:flex-row'>
                <div className='flex flex-col gap-4 md:gap-8 max-w-50 justify-between items-center'>
                    <div className='w-30 h-30 paydens-shadow flex justify-center items-center rounded-2xl' ><IconWorkingStep1 className="w-20 h-20" />


                    </div>
                    <p className='text-center font-quicksand text-lg'>Order your prescription online easily</p>
                </div>


                <div className='flex flex-col gap-4 md:gap-8 max-w-50 justify-between items-center'>
                    <div className='w-30 h-30 paydens-shadow flex justify-center items-center rounded-2xl' ><IconWorkingStep2 className="w-20 h-20" />
                    </div>
                    <p className='text-center font-quicksand text-lg'>Your prescription is sent to GP for approval</p></div>




                <div className='flex flex-col gap-4 md:gap-8 max-w-50 justify-between items-center'>
                    <div className='w-30 h-30 paydens-shadow flex justify-center items-center rounded-2xl' ><IconWorkingStep3 className="w-20 h-20" />

                    </div>

                    <p className='text-center font-quicksand text-lg'>Our pharmacy team prepares your medication</p></div>


                <div className='flex flex-col gap-4 md:gap-8 max-w-50 justify-between items-center'>
                    <div className='w-30 h-30 paydens-shadow flex justify-center items-center rounded-2xl' ><IconWorkingStep4 className="w-20 h-20" />
                    </div>
                    <p className='text-center font-quicksand text-lg'>Receive your medication with free delivery</p></div>
            </div>
        </section >
    )
}

export default Working