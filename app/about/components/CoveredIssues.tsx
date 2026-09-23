import React from 'react'
import styles from './components.css/CoveredIssies.module.css'

const CoveredIssues = () => {
    return (
        <section className={` w-screen  py-10 md:py-20 px-6 md:px-16  bg-blue-100/90 !self-center  flex justify-center flex-col lg:flex-row gap-10 lg:gap-20 ${styles.cont}`}>
            <div className='flex flex-col gap-10  max-w-100 md:max-w-160 lg:max-w-160 !self-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '><em className='text-primary'>Responsible</em> Healthcare, Beyond <br /> the Pharmacy</h1>
                <p className='text-sm md:text-base lg:text-lg text-text-secondary/90 text-justify' >At Paydens, we embrace the evolving role of pharmacy with a strong commitment to providing high-quality, local healthcare services. As a family-run business, we combine the personal care of an independent pharmacy with the strength and resources of the Paydens Group. From small village pharmacies to large high-street branches, our network offers a wide range of pharmacy services.</p>
                <hr className='w-full h-[2px] bg-border border-0' />

                <p className='text-sm md:text-base lg:text-lg text-text-secondary/90'> Paydens Group operates a <em className='underline'>pharmaceutical wholesaler</em>, Sangers (Maidstone) Ltd, co-located at our Head Office in Maidstone, supporting our pharmacy network.</p>
            </div>
            <div className='grid grid-cols-2 max-w-200 gap-5 lg:gap-x-10 !self-center'>
                <div className=' flex bg-white p-6 h-full w-full  rounded-2xl relative lg:w-60'>
                    <h1 className='text-base sm:text-xl lg:text-2xl'>Foundation <br /> Training</h1>
                    <svg width="50" height="50" className="absolute right-[10%] bottom-[10%]  h-10 w-10 lg:h-15 lg:w-15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="25" fill="#37B43D" />
                        <path d="M32.4223 17.2521C32.3741 16.7019 31.8891 16.2949 31.3389 16.3431L22.3732 17.1275C21.823 17.1756 21.416 17.6606 21.4641 18.2108C21.5123 18.761 21.9973 19.168 22.5475 19.1199L30.517 18.4226L31.2143 26.3922C31.2624 26.9424 31.7474 27.3493 32.2976 27.3012C32.8478 27.2531 33.2548 26.768 33.2067 26.2179L32.4223 17.2521ZM18.5703 32.6602L19.3364 33.3029L32.1921 17.9821L31.4261 17.3393L30.66 16.6965L17.8043 32.0174L18.5703 32.6602Z" fill="white" />
                    </svg>
                </div>
                <div className=' flex bg-white p-6 h-full w-full rounded-2xl relative lg:w-60'>
                    <h1 className='text-base sm:text-xl lg:text-2xl'>Enviormental <br />Issues</h1>
                    <svg width="50" height="50" className="absolute right-[10%] bottom-[10%]  h-10 w-10 lg:h-15 lg:w-15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="25" fill="#37B43D" />
                        <path d="M32.4223 17.2521C32.3741 16.7019 31.8891 16.2949 31.3389 16.3431L22.3732 17.1275C21.823 17.1756 21.416 17.6606 21.4641 18.2108C21.5123 18.761 21.9973 19.168 22.5475 19.1199L30.517 18.4226L31.2143 26.3922C31.2624 26.9424 31.7474 27.3493 32.2976 27.3012C32.8478 27.2531 33.2548 26.768 33.2067 26.2179L32.4223 17.2521ZM18.5703 32.6602L19.3364 33.3029L32.1921 17.9821L31.4261 17.3393L30.66 16.6965L17.8043 32.0174L18.5703 32.6602Z" fill="white" />
                    </svg>
                </div>
                <div className=' flex bg-white p-6  h-full w-full rounded-2xl relative lg:w-60'>
                    <h1 className='text-base sm:text-xl lg:text-2xl'>Gender Pay <br />Gap</h1>
                    <svg width="50" height="50" className="absolute right-[10%] bottom-[10%]  h-10 w-10 lg:h-15 lg:w-15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="25" fill="#37B43D" />
                        <path d="M32.4223 17.2521C32.3741 16.7019 31.8891 16.2949 31.3389 16.3431L22.3732 17.1275C21.823 17.1756 21.416 17.6606 21.4641 18.2108C21.5123 18.761 21.9973 19.168 22.5475 19.1199L30.517 18.4226L31.2143 26.3922C31.2624 26.9424 31.7474 27.3493 32.2976 27.3012C32.8478 27.2531 33.2548 26.768 33.2067 26.2179L32.4223 17.2521ZM18.5703 32.6602L19.3364 33.3029L32.1921 17.9821L31.4261 17.3393L30.66 16.6965L17.8043 32.0174L18.5703 32.6602Z" fill="white" />
                    </svg>
                </div>
                <div className=' flex bg-white p-6 h-full w-full rounded-2xl relative lg:w-60'>
                    <h1 className='text-base sm:text-xl lg:text-2xl'>Modern<br /> Slavery Act</h1>
                    <svg width="50" height="50" className="absolute right-[10%] bottom-[10%]  h-10 w-10 lg:h-15 lg:w-15" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="25" fill="#37B43D" />
                        <path d="M32.4223 17.2521C32.3741 16.7019 31.8891 16.2949 31.3389 16.3431L22.3732 17.1275C21.823 17.1756 21.416 17.6606 21.4641 18.2108C21.5123 18.761 21.9973 19.168 22.5475 19.1199L30.517 18.4226L31.2143 26.3922C31.2624 26.9424 31.7474 27.3493 32.2976 27.3012C32.8478 27.2531 33.2548 26.768 33.2067 26.2179L32.4223 17.2521ZM18.5703 32.6602L19.3364 33.3029L32.1921 17.9821L31.4261 17.3393L30.66 16.6965L17.8043 32.0174L18.5703 32.6602Z" fill="white" />
                    </svg>
                </div>


            </div>

        </section>
    )
}

export default CoveredIssues