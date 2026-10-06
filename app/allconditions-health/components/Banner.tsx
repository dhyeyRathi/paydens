import { ColorGradientBg } from '@/components/ui/ColorGradient'
import React from 'react'
import IconBannerBg1 from '@/components/Icon/IconBannerBg1'

const Banner = () => {
    return (
        <section className='w-full flex justify-center gap-10 lg:gap-20 items-center flex-col animationPopUp'>
            <div className='flex w-full py-10 items-center justify-between flex-wrap md:flex-nowrap gap-10 md:gap-0'>
                <div className='flex w-full flex-col justify-center px-10 xl:px-20 gap-2 xl:gap-6'>
                    <span className='text-4xl text-gray-600'>01
                    </span>
                    <h2 className='text-2xl'>
                        Answer a few Questions
                    </h2>
                    <p className='font-quicksand font-[300]'>Fill out a short online questionnaire so our doctors understand your health.</p>
                </div>


                <hr className='h-40 w-1 bg-black hidden md:block' />


                <div className='flex w-full flex-col justify-center px-10 xl:px-20 gap-2 xl:gap-6'>
                    <span className='text-4xl text-gray-600'>02
                    </span>
                    <h2 className='text-2xl'>
                        Schedule Appointment
                    </h2>
                    <p className='font-quicksand font-[300]'>Book a convenient time to consult with our healthcare experts.</p>
                </div>


                <hr className='h-40 w-1 bg-black hidden md:block' />


                <div className='flex w-full flex-col justify-center px-10 xl:px-20 gap-2 xl:gap-6'>
                    <span className='text-4xl text-gray-600'>03
                    </span>
                    <h2 className='text-2xl'>
                        Recieve Expert Care
                    </h2>
                    <p className='font-quicksand font-[300]'>Get your treatment plan, prescription, and medicines delivered securely.</p>
                </div>

            </div>


            <div className='relative w-full h-120 md:h-130 bg-white flex items-center justify-end  paydens-shadow overflow-hidden rounded-xl'>
                <div className='absolute z-2 inset-0 !top-[100%] '>
                    <ColorGradientBg />
                </div>
                <img src="/assets/images/ui/throatpain.png" alt='throat-pain' className='h-full w-auto absolute opacity-20 xl:opacity-100 z-[1] xl:z-4 !left-[12%] inset-0' />
                <IconBannerBg1 className=" absolute opacity-40 xl:opacity-100 z-3 bottom-[0%] left-[0] " />

                <div className='flex  sticky z-2 flex-col gap-4 md:gap-6 w-full xl:items-end px-6 md:px-12 xl:px-20 xl:ml-60'>
                    <div className='flex flex-col gap-2 md:gap-6 xl:w-[50%]'>
                        <h2 className='text-xl lg:text-3xl'>Signs you may need support</h2>
                        <ul className='lg:!self-start list-disc list-inside text-sm md:text-base'>
                            <li>Pain or a scratchy feeling in the throat.</li>
                            <li>Pain that feels worse when swallowing or talking.</li>
                            <li>Trouble swallowing.</li>
                            <li>Sore, swollen glands in the neck or jaw.</li>
                            <li>Swollen, red tonsils.</li>
                            <li>White patches or pus on the tonsils.</li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-2 md:gap-6  xl:w-[50%]'>
                        <h2 className='text-xl lg:text-3xl'>How to Treat a Sore Throat</h2>
                        <ul className='lg:!self-start list-disc list-inside text-sm md:text-base '>
                            <li>Gargle with warm, salty water (children should not try this)</li>
                            <li>Drink plenty of water</li>
                            <li>Eat cool or soft foods</li>
                            <li>Avoid smoking or smoky places</li>
                            <li>Suck ice cubes, ice lollies or hard sweets – but do not give young children anything small and hard to suck because of the risk of choking</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Banner