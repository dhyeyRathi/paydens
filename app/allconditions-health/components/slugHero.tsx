import React from 'react'
import DOB from './DOB'
import { Button } from '@/components/ui/Button'
import IconSlugHeroBg from '@/components/Icon/IconSlugHeroBg'

const SlugHero = () => {
    return (
        <section className='w-full '>
            <h1 className='w-full flex gap-8 items-center pb-4 xl:pb-8 px-4 text-3xl lg:text-5xl font-bold'>
                Sore Throat
                <img src='/assets/images/ui/nhs.png' className='h-10' />
            </h1>
            <div className='flex flex-col md:flex-row relative bg-white/30 w-full justify-between px-6 md:px-10 py-10  gap-10 md:gap-8 rounded-xl'>
                <IconSlugHeroBg className='hidden md:block absolute  !bottom-0 !right-[35%] z-[-5]' />
                <div className='xl:max-w-[40%] flex flex-col gap-8'>
                    <h1 className='text-xl xl:text-4xl'>
                        A sore throat is irritation or pain in the throat, often caused by infection or dryness.
                    </h1>


                    <ul className='lg:!self-start list-disc list-inside text-xl flex flex-col gap-2 font-quicksand font-[300]'>
                        <li>100% free online consultation & aftercare</li>
                        <li>Reviewed by UK-registered doctors within 24 hours</li>
                        <li>Evidence-backed care</li>
                    </ul>
                </div>
                <form className='bg-white xl:w-[30%] rounded-xl p-8 flex flex-col gap-10 paydens-shadow'>
                    <h1 className='max-w-[80%] text-3xl '>Am I eligible for NHS Services?</h1>


                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-quicksand font-[400]'>Gender at Birth</label>
                        <div className='flex gap-2 font-quicksand font-[300] items-center'>
                            <input
                                type="radio"
                                id="option-1"
                                name="framework"
                                value="react"
                                className='h-4 w-4'
                            />
                            <label htmlFor='option-1'>Male</label>

                            <input
                                type="radio"
                                id="option-2"
                                name="framework"
                                value="react"
                                className='h-4 w-4 ml-2'
                            />
                            <label htmlFor='option-2'>Female</label>

                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-lg font-quicksand font-[400]'>Date of Birth</label>
                        <DOB />
                    </div>

                    <Button className='!self-start mt-5'>Check Eligiblity</Button>

                </form>

            </div>
        </section>
    )
}

export default SlugHero