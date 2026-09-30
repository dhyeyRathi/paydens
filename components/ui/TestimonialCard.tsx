import React from 'react'
import IconStarYellow from '../Icon/IconStarYellow'
import IconStarGray from '../Icon/IconStarGray'

interface cardProp {
    className?: string;
    children?: React.ReactNode
    id?: string
}

const TestimonialCard = ({ className, children, id }: cardProp) => {
    return (
        <section id={id} className={`bg-white max-h-72 max-w-72 sm:max-h-[330px] sm:max-w-[527px]  shrink-0 flex flex-col rounded-xl py-3 sm:py-8 px-5 sm:px-14 gap-3 sm:gap-4 paydens-shadow overflow-visible ${className}`}>
            <h2 className='font-quicksand text-xs sm:text-[16px]'>
                I’ve been using their services for a few months now, and I can honestly say it’s changed the way I manage my health. The team is always helpful, and I feel supported every step of the way! I was nervous at first, but the process was smooth and well-explained. The team answered all my questions and made sure I was comfortable throughout. Great experience!
            </h2>
            <div className='flex gap-2 h-3 sm:h-4'>
                <IconStarYellow className='h-full w-auto' />
                <IconStarYellow className='h-full w-auto' />
                <IconStarYellow className='h-full w-auto' />
                <IconStarGray className='h-full w-auto' />

                <IconStarGray className='h-full w-auto' />


            </div>
            <div className='h-8 sm:h-12 flex gap-3 sm:gap-6 w-full items-center'>
                {children}
                <h4 className='font-[600] text-base sm:text-2xl'>Marina Lewis</h4>
            </div>
        </section>
    )
}

export default TestimonialCard