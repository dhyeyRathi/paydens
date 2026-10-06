import React from 'react'
import styles from './components.css/JobsCarousel.module.css'
import { Button, ButtonVar2 } from '@/components/ui/Button'
import IconSearch from '@/components/Icon/IconSearch'
import IconChevronDown from '@/components/Icon/IconChevronDown'
import IconGlobe from '@/components/Icon/IconGlobe'
import IconMapPinSolid from '@/components/Icon/IconMapPinSolid'
const JobsCarousel = () => {
    const jobs = "123456789"
    return (
        <section className={`${styles.CarouselSection} animationPopUp`}>
            <div className='w-full bg-background paydens-shadow rounded-xl flex flex-col'>
                <div className=' flex w-full items-center py-2 px-4 '>
                    <IconSearch className='w-4 h-4 mr-2' />
                    <input className='outline-none font-quicksand px-4 text-lg w-[90%] font-semibold' placeholder='Job title or keywords' />

                    <div className='!self-end flex gap-1 sm:gap-2 md:gap-4'>
                        <button className='px-2 sm:px-4 rounded-xl hover:bg-gray-100 transition-all duration-300'>Clear</button>
                        <Button className=''>Search</Button>
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


                            <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
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


                            <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
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


                            <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
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


                            <IconChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-2 flex gap-2 items-center pl-2 text-[10px] md:text-base'>
                <IconGlobe className="w-4 h-4 text-[#666666]" />

                All links below will take you our Teamtailor.com portal, where you will find more information on the job vacancy and can apply directly.
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 md:mt-20'>
                {[...jobs].map((job) => {
                    return (
                        <div key={job} className='flex flex-col border-border border-1 p-6 rounded-xl gap-4 font-quicksand'>
                            <h2 className='font-semibold lg:text-2xl'>Pharmacy Accuracy Checker Technician</h2>
                            <div className='flex gap-1 lg:gap-4  item-center justify-center  font-[300]'>
                                <IconMapPinSolid className="h-8 text-[#5E5E5E]" />
                                South East - Courts/Kennington Pharmacy (Ashford TN24 9JZ)
                            </div>

                            <div className='flex gap-2 flex-wrap'>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Remote</p>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Full-Time</p>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Maternity Cover</p>

                            </div>
                            <Button className='!self-start !text-base mt-4 md:mt-0 lg:mt-4'>Apply now</Button>
                        </div>
                    )
                })}

            </div>
            <ButtonVar2 className='!justify-center my-4  mt-8'>Load More</ButtonVar2>
        </section>
    )
}

export default JobsCarousel