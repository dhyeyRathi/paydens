import React from 'react'
import styles from './components.css/JobsCarousel.module.css'
import { Button, ButtonVar2 } from '@/components/ui/Button'
const JobsCarousel = () => {
    const jobs = "123456789"
    return (
        <section className={`${styles.CarouselSection}`}>
            <div className='w-full bg-background paydens-shadow rounded-xl flex flex-col'>
                <div className=' flex w-full items-center py-2 px-4 '>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-10'>
                        <path d="M8 16C6.41775 16 4.87103 15.5308 3.55544 14.6518C2.23985 13.7727 1.21447 12.5233 0.608967 11.0615C0.00346625 9.59966 -0.15496 7.99113 0.153721 6.43928C0.462403 4.88743 1.22433 3.46197 2.34315 2.34315C3.46197 1.22433 4.88743 0.462403 6.43928 0.153721C7.99113 -0.15496 9.59966 0.00346625 11.0615 0.608967C12.5233 1.21447 13.7727 2.23985 14.6518 3.55544C15.5308 4.87103 16 6.41775 16 8C15.9976 10.121 15.154 12.1545 13.6542 13.6542C12.1545 15.154 10.121 15.9976 8 16ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17055C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C13.9984 6.40919 13.3658 4.88399 12.2409 3.75912C11.116 2.63424 9.59082 2.00159 8 2Z" fill="black" />
                        <path d="M16.9994 18.0004C16.7342 18.0003 16.4799 17.895 16.2924 17.7074L12.2924 13.7074C12.1103 13.5188 12.0095 13.2662 12.0118 13.004C12.014 12.7418 12.1192 12.491 12.3046 12.3056C12.49 12.1202 12.7408 12.015 13.003 12.0127C13.2652 12.0105 13.5178 12.1112 13.7064 12.2934L17.7064 16.2934C17.8462 16.4333 17.9414 16.6114 17.98 16.8054C18.0186 16.9993 17.9988 17.2004 17.9231 17.3831C17.8474 17.5658 17.7193 17.7219 17.5549 17.8318C17.3905 17.9417 17.1972 18.0004 16.9994 18.0004Z" fill="black" />
                    </svg>
                    <input className='outline-none font-quicksand px-4 text-lg w-[90%] font-semibold' placeholder='Job title or keywords' />

                    <div className='!self-end flex gap-1 sm:gap-2 md:gap-4'>
                        <button className='px-2 sm:px-4 rounded-xl hover:bg-gray-100 transition-all duration-300'>Clear</button>
                        <Button className='!px-2 sm:!px-8'>Search</Button>
                    </div>
                </div>

                <hr className='w-full h-[1px]' />

                <div className='py-6 px-6 gap-5 grid gri-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div className='flex flex-1 flex-col justify-between '>
                        <label className="mb-2 block text-[16px] font-semibold font-quicksand">
                            Role
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select
                                className=" w-full appearance-none rounded-sm bg-gray-200 px-3 py-3 pr-10 text-sm text-[#374151] outline-none cursor-pointer"
                            >
                                <option>All roles</option>
                                <option>Pharmacy</option>
                                <option>Technician</option>
                                <option>Manager</option>
                            </select>


                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-1 flex-col justify-between '>
                        <label className="mb-2 block text-[16px] font-semibold font-quicksand">
                            Region
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select
                                className=" w-full appearance-none rounded-sm bg-gray-200 px-3 py-3 pr-10 text-sm text-[#374151] outline-none cursor-pointer"
                            >
                                <option>South East</option>
                                <option>Pharmacy</option>
                                <option>Technician</option>
                                <option>Manager</option>
                            </select>


                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-1 flex-col justify-between '>
                        <label className="mb-2 block text-[16px] font-semibold font-quicksand">
                            Mode
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select
                                className=" w-full appearance-none rounded-sm bg-gray-200 px-3 py-3 pr-10 text-sm text-[#374151] outline-none cursor-pointer"
                            >
                                <option>Online</option>
                                <option>Pharmacy</option>
                                <option>Technician</option>
                                <option>Manager</option>
                            </select>


                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-1 flex-col justify-between '>
                        <label className="mb-2 block text-[16px] font-semibold font-quicksand">
                            Work Type
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select
                                className=" w-full appearance-none rounded-sm bg-gray-200 px-3 py-3 pr-10 text-sm text-[#374151] outline-none cursor-pointer"
                            >
                                <option>Full Time</option>
                                <option>Pharmacy</option>
                                <option>Technician</option>
                                <option>Manager</option>
                            </select>


                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M5 7.5L10 12.5L15 7.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-2 flex gap-2 items-center pl-2 text-[10px] md:text-base'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.0005 1C9.85715 1 11.6378 1.73755 12.9506 3.0504C14.2634 4.36325 15.001 6.14385 15.001 8.0005C15.001 9.85715 14.2634 11.6378 12.9506 12.9506C11.6378 14.2634 9.85715 15.001 8.0005 15.001C6.14385 15.001 4.36325 14.2634 3.0504 12.9506C1.73755 11.6378 1 9.85715 1 8.0005C1 6.14385 1.73755 4.36325 3.0504 3.0504C4.36325 1.73755 6.14385 1 8.0005 1ZM9.0505 5.298C9.5705 5.298 9.9925 4.937 9.9925 4.402C9.9925 3.867 9.5695 3.506 9.0505 3.506C8.5305 3.506 8.1105 3.867 8.1105 4.402C8.1105 4.937 8.5305 5.298 9.0505 5.298ZM9.2335 10.925C9.2335 10.818 9.2705 10.54 9.2495 10.382L8.4275 11.328C8.2575 11.507 8.0445 11.631 7.9445 11.598C7.89913 11.5813 7.86121 11.549 7.83756 11.5068C7.81391 11.4646 7.80609 11.4154 7.8155 11.368L9.1855 7.04C9.2975 6.491 8.9895 5.99 8.3365 5.926C7.6475 5.926 6.6335 6.625 6.0165 7.512C6.0165 7.618 5.9965 7.882 6.0175 8.04L6.8385 7.093C7.0085 6.916 7.2065 6.791 7.3065 6.825C7.35577 6.84268 7.39614 6.87898 7.41895 6.92609C7.44176 6.97321 7.44519 7.02739 7.4285 7.077L6.0705 11.384C5.9135 11.888 6.2105 12.382 6.9305 12.494C7.9905 12.494 8.6165 11.812 9.2345 10.925H9.2335Z" fill="#666666" />
                </svg>

                All links below will take you our Teamtailor.com portal, where you will find more information on the job vacancy and can apply directly.
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 md:mt-20'>
                {[...jobs].map((job) => {
                    return (
                        <div key={job} className='flex flex-col border-border border-1 p-6 rounded-xl gap-4 font-quicksand'>
                            <h1 className='font-semibold lg:text-2xl'>Pharmacy Accuracy Checker Technician</h1>
                            <div className='flex gap-1 lg:gap-4  item-center justify-center  font-[300]'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='h-8'>
                                    <g clipPath="url(#clip0_3_19309)">
                                        <path d="M10 0C6.48574 0 3.55469 2.83086 3.55469 6.44531C3.55469 7.82039 3.96789 9.04656 4.7609 10.1955L9.50676 17.601C9.73699 17.961 10.2635 17.9603 10.4932 17.601L15.2597 10.1704C16.0356 9.07344 16.4453 7.78543 16.4453 6.44531C16.4453 2.89137 13.5539 0 10 0ZM10 9.375C8.38465 9.375 7.07031 8.06066 7.07031 6.44531C7.07031 4.82996 8.38465 3.51562 10 3.51562C11.6154 3.51562 12.9297 4.82996 12.9297 6.44531C12.9297 8.06066 11.6154 9.375 10 9.375Z" fill="#5E5E5E" />
                                        <path d="M14.5806 13.4648L11.6302 18.0776C10.8665 19.2683 9.12926 19.2644 8.36922 18.0787L5.41398 13.4661C2.81383 14.0672 1.21094 15.1685 1.21094 16.4846C1.21094 18.7682 5.73938 20.0002 10 20.0002C14.2606 20.0002 18.7891 18.7682 18.7891 16.4846C18.7891 15.1676 17.1839 14.0657 14.5806 13.4648Z" fill="#5E5E5E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_19309">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                South East - Courts/Kennington Pharmacy (Ashford TN24 9JZ)
                            </div>

                            <div className='flex gap-2 flex-wrap'>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Remote</p>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Full-Time</p>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Maternity Cover</p>

                            </div>
                            <Button className='!self-start !py-2 !px-4 !text-base mt-4 md:mt-0 lg:mt-4'>Apply now</Button>
                        </div>
                    )
                })}

            </div>
            <ButtonVar2 className='!justify-center my-4  mt-8'>Load More</ButtonVar2>
        </section>
    )
}

export default JobsCarousel