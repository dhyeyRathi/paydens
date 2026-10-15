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
                    {/* <label htmlFor='job-search' className='hidden'>search jobs</label> */}
                    <input id="job-search" className='outline-none font-quicksand px-4 text-lg w-[90%] font-semibold' placeholder='Job title or keywords' aria-label='search jobs' />

                    <div className='!self-end flex gap-1 sm:gap-2 md:gap-4'>
                        <button aria-label="search jobs button" className='px-2 sm:px-4 rounded-xl hover:bg-gray-100 transition-all duration-300'>Clear</button>
                        <Button >Search</Button>
                    </div>
                </div>

                <hr className='w-full h-px' />

                <div className='py-6 px-6 gap-5 grid gri-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div className='flex flex-1 flex-col justify-between '>
                        <label className="mb-2 block text-base font-semibold font-quicksand" htmlFor='Roles'>
                            Role
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select aria-label="select role" id='Roles'
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
                        <label className="mb-2 block text-base font-semibold font-quicksand" htmlFor='Region'>
                            Region
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select aria-label="select region" id='Region'
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
                        <label className="mb-2 block text-base font-semibold font-quicksand" htmlFor='Mode'>
                            Mode
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select aria-label="select mode" id='Mode'
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
                        <label className="mb-2 block text-base font-semibold font-quicksand" htmlFor='Type'>
                            Work Type
                        </label>

                        <div className="relative rounded-b-xl ">
                            <select aria-label="select type" id='Type'
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

            <div className='pt-2 flex gap-2 items-center pl-2 text-[0.625rem] md:text-base'>
                <IconGlobe className="w-4 h-4 text-[#666666]" />

                All links below will take you our Teamtailor.com portal, where you will find more information on the job vacancy and can apply directly.
            </div>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 md:mt-20 '>
                {[...jobs].map((job) => {
                    return (
                        <div key={job} className='flex flex-col border-border border-1 p-6 rounded-xl gap-4 font-quicksand items-start'>
                            <h2 className='font-semibold lg:text-20'>Pharmacy Accuracy Checker Technician</h2>
                            <div className='flex gap-1 lg:gap-4  justify-center text-16 font-[300]'>
                                <IconMapPinSolid className="h-6 w-6 text-[#5E5E5E]" />
                                South East - Courts/Kennington Pharmacy (Ashford TN24 9JZ)
                            </div>

                            <div className='flex gap-2 flex-wrap'>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Remote</p>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Full-Time</p>
                                <p className='px-2 py-1 text-xs text-info bg-info/20 rounded-md font-semibold '>Maternity Cover</p>

                            </div>
                            <Button >Apply now</Button>
                        </div>
                    )
                })}

            </div>
            <div className='mt-10'>
                <ButtonVar2 >Load More</ButtonVar2>

            </div>

        </section>
    )
}

export default JobsCarousel