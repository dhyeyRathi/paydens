import React from 'react'
import styles from './components.css/Hero.module.css'


const Hero = () => {
    return (
        <section className='w-full'>


            <div className={`${styles.Text}`}>
                <h1 className='w-full text-center px-4 lg:max-w-[50%] md:text-start text-3xl leading-snug lg:text-6xl font-bold'>
                    Your <em className='text-button-hover'>Trusted <br /></em> Healthcare Partner<br /> Since 1969.
                </h1>
                <svg className="absolute bottom-5 scale-140 left-90 hidden lg:block" width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3_17894)">
                        <path d="M41.6488 35.4806C40.3352 36.4854 39.0751 37.5589 37.8728 38.7004C28.9344 34.6209 18.5885 31.0046 7.05746 27.96C6.47812 27.8065 5.99249 27.4375 5.69663 26.9199C5.40212 26.4111 5.32481 25.815 5.48374 25.2416C5.80542 24.0309 7.0088 23.3413 8.22098 23.6582C20.9725 27.0298 32.1887 31.0039 41.6488 35.4806Z" fill="#00180C" />
                        <path d="M103.68 107.105L119.125 108.828C119.818 108.912 120.513 108.666 120.999 108.167C121.486 107.665 121.711 106.964 121.606 106.273L118.815 87.9636C115.031 63.143 107.49 53.0809 100.611 46.5113C91.2464 37.5769 77.7138 33.1289 65.2967 34.9019C61.4633 35.4613 57.7156 36.6134 54.1552 38.3268C50.9882 39.8039 48.0078 41.734 45.3169 44.0516C41.1792 47.5818 37.8418 51.9144 35.6678 56.5848C30.095 68.5804 31.4813 83.0564 39.1183 92.609C45.9042 101.084 55.2783 101.38 61.241 99.0584C67.9995 96.4282 72.1747 91.8391 73.6533 85.4237C75.7271 76.5966 72.0627 64.8182 64.7274 56.7858C61.0781 52.786 56.3735 48.9946 50.7116 45.4914C52.0669 44.5232 53.5037 43.6895 54.9795 42.9335C60.1209 46.299 64.5213 49.9334 68.0076 53.7682C73.373 59.6262 77.1222 67.4097 78.2989 75.1289C78.919 79.1972 78.8236 83.0039 78.0166 86.4422C76.1778 94.2753 70.9415 100.072 62.8771 103.209C54.9085 106.322 43.3971 105.112 35.6382 95.3971C26.9455 84.5388 25.3233 68.1891 31.5982 54.7057C33.6436 50.3034 36.435 46.3479 39.8921 42.9485C39.8999 42.9405 39.9005 42.9291 39.9083 42.9212L39.9163 42.929C42.1197 40.6902 44.5754 38.6978 47.2131 37.0098C52.459 33.6338 58.488 31.3769 64.6521 30.4802C78.6121 28.4811 93.2013 33.263 103.676 43.2689C111.111 50.3821 119.249 61.178 123.23 87.2906L126.021 105.6C126.126 106.289 126.547 106.892 127.163 107.227C127.777 107.558 128.513 107.586 129.15 107.299L143.274 100.92L127.829 131.741L103.682 107.107L103.68 107.105Z" fill="#00180C" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3_17894">
                            <rect width="134.048" height="134.048" fill="white" transform="matrix(0.150693 0.988581 0.988581 -0.150693 0 20.2002)" />
                        </clipPath>
                    </defs>
                </svg>


                <div className={`${styles.CardContainer}`}>
                    <div className='flex font-quicksand bg-background px-2 py-3 md:px-8 md:py-6 w-full rounded-2xl justify-between md:items-center gap-2 paydens-shadow'>
                        <div className='flex flex-col md:max-w-[60%]'>
                            <h2 className='text-lg md:text-2xl font-bold'>UK Registered Pharmacy</h2>
                            <p className='text-sm md:text-base'>Paydens pharmacies are registered and operate in line with UK pharmacy regulations.</p>
                        </div>
                        <img src='/assets/images/ui/registration.png' className='h-8 md:h-12 w-auto ' />
                    </div>

                    <div className='flex font-quicksand bg-background px-2 py-3 md:px-8 md:py-6  w-full  rounded-2xl justify-between gap-2 md:items-center paydens-shadow' >
                        <div className='flex flex-col md:max-w-[60%]'>
                            <h2 className='text-lg md:text-2xl font-bold'>GPhC Regulated Pharmacy</h2>
                            <p className='text-sm md:text-base'>All Paydens pharmacies are regulated by the General Pharmaceutical Council (GPhC) in Great Britain.</p>
                        </div>
                        <img src='/assets/images/ui/gphc.png' className='h-10 md:h-15 w-auto ' />
                    </div>

                    <div className='flex font-quicksand bg-background px-2 py-3 md:px-8 md:py-6  w-full  rounded-2xl justify-between gap-2 md:items-center paydens-shadow'>
                        <div className='flex flex-col md:max-w-[60%]'>
                            <h2 className='text-lg md:text-2xl font-bold'>MHRA Compliant</h2>
                            <p className='text-sm md:text-base'>Paydens follows MHRA guidelines for the safe supply of medicines and healthcare products in the UK.</p>
                        </div>
                        <img src='/assets/images/ui/mhra.png' className='h-12 md:h-20 w-auto ' />
                    </div>
                </div>
            </div>
            <img src="/assets/images/ui/pharmacyphoto.png" className='w-full' />
        </section>
    )
}

export default Hero