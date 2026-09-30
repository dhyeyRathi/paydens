import React from 'react'

const Stats = () => {
    return (
        <section className='w-full md:px-20 grid grid-cols-2 gap-y-4 md:grid-cols-4 justify-between'>
            <div className='flex flex-col lg:gap-2  items-center justify-center '>
                <h2 className='text-xl md:text-2xl lg:text-heading font-bold'>100+</h2>
                <h3 className='text-xl md:text-2xl lg:text-4xl'>Branches</h3>
            </div>
            <div className='flex flex-col lg:gap-2 items-center justify-center '>
                <h2 className='text-xl md:text-2xl lg:text-heading font-bold'>55+</h2>
                <h3 className='text-xl md:text-2xl lg:text-4xl'>Years</h3>
            </div>
            <div className='flex flex-col lg:gap-2  items-center justify-center '>
                <h2 className='text-xl md:text-2xl lg:text-heading font-bold'>100,000+</h2>
                <h3 className='text-xl md:text-2xl lg:text-4xl'>Patients</h3>
            </div>
            <div className='flex flex-col lg:gap-2  items-center justify-center '>
                <h2 className='text-xl md:text-2xl lg:text-heading font-bold'>24/7</h2>
                <h3 className='text-xl md:text-2xl lg:text-4xl '>Service</h3>
            </div>
        </section>
    )
}

export default Stats