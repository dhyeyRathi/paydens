import React from 'react'

const Stats = () => {
    return (
        <section className='w-full md:px-20 lg:py-10 grid grid-cols-2 gap-y-4 md:grid-cols-4 justify-between'>
            <div className='flex flex-col lg:gap-2  items-center justify-center '>
                <h1 className='text-xl md:text-2xl lg:text-6xl font-bold'>100+</h1>
                <h2 className='text-xl md:text-2xl lg:text-4xl'>Branches</h2>
            </div>
            <div className='flex flex-col lg:gap-2 items-center justify-center '>
                <h1 className='text-xl md:text-2xl lg:text-6xl font-bold'>55+</h1>
                <h2 className='text-xl md:text-2xl lg:text-4xl'>Years</h2>
            </div>
            <div className='flex flex-col lg::gap-2  items-center justify-center '>
                <h1 className='text-xl md:text-2xl lg:text-6xl font-bold'>100,000+</h1>
                <h2 className='text-xl md:text-2xl lg:text-4xl'>Patients</h2>
            </div>
            <div className='flex flex-col lg:gap-2  items-center justify-center '>
                <h1 className='text-xl md:text-2xl lg:text-6xl font-bold'>24/7</h1>
                <h2 className='text-xl md:text-2xl lg:text-4xl '>Service</h2>
            </div>
        </section>
    )
}

export default Stats