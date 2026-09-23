import { ColorGradientBg } from '@/components/ui/ColorGradient'
import React from 'react'

const Banner = () => {
    return (
        <section className='w-full flex justify-center gap-10 lg:gap-20 items-center flex-col'>
            <div className='flex w-full py-10 items-center justify-between flex-wrap md:flex-nowrap gap-10 md:gap-0'>
                <div className='flex w-full flex-col justify-center px-10 xl:px-20 gap-2 xl:gap-6'>
                    <h1 className='text-4xl text-gray-600'>01
                    </h1>
                    <h2 className='text-2xl'>
                        Answer a few Questions
                    </h2>
                    <p className='font-quicksand font-[300]'>Fill out a short online questionnaire so our doctors understand your health.</p>
                </div>


                <hr className='h-40 w-1 bg-black hidden md:block' />


                <div className='flex w-full flex-col justify-center px-10 xl:px-20 gap-2 xl:gap-6'>
                    <h1 className='text-4xl text-gray-600'>02
                    </h1>
                    <h2 className='text-2xl'>
                        Schedule Appointment
                    </h2>
                    <p className='font-quicksand font-[300]'>Book a convenient time to consult with our healthcare experts.</p>
                </div>


                <hr className='h-40 w-1 bg-black hidden md:block' />


                <div className='flex w-full flex-col justify-center px-10 xl:px-20 gap-2 xl:gap-6'>
                    <h1 className='text-4xl text-gray-600'>03
                    </h1>
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
                <img src="/assets/images/ui/throatpain.png" className='h-full w-auto absolute opacity-20 xl:opacity-100 z-[1] xl:z-4 !left-[12%] inset-0' />
                <svg width="251" height="251" viewBox="0 0 251 251" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute opacity-40 xl:opacity-100 z-3 bottom-[0%] left-[0] ' >
                    <g clipPath="url(#clip0_8_6638)">
                        <path opacity="0.34" d="M76.4381 250.873C27.2057 250.876 4.03194 185.315 42.375 154.926L131.97 83.8812C174.547 50.1373 121.321 -16.945 78.8894 16.6817L56.0387 34.8293C32.3163 53.6305 -3.23868 33.5699 0.236803 3.67845C0.78737 -1.04328 8.09132 -0.194633 7.54174 4.52759C4.80607 28.0451 32.7129 43.9326 51.4684 29.0682L74.3191 10.9206C124.131 -28.5598 186.535 50.0197 136.539 89.6443L46.9438 160.689C1.10702 197.016 58.0909 269.615 104.151 233.112L170.128 180.823C186.233 168.059 207.389 166.34 225.337 176.338C243.328 186.359 253.025 205.304 250.644 225.78C250.094 230.503 242.789 229.653 243.339 224.931C245.37 207.466 237.101 191.308 221.759 182.762C206.459 174.24 188.425 175.705 174.695 186.587L108.719 238.875C98.6916 246.822 87.6274 250.872 76.4381 250.873Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_8_6638">
                            <rect width="251" height="251" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <div className='flex  sticky z-2 flex-col gap-4 md:gap-6 w-full xl:items-end px-6 md:px-12 xl:px-20 xl:ml-60'>
                    <div className='flex flex-col gap-2 md:gap-6 xl:w-[50%]'>
                        <h1 className='text-xl lg:text-3xl'>Signs you may need support</h1>
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
                        <h1 className='text-xl lg:text-3xl'>How to Treat a Sore Throat</h1>
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