import React from 'react'
import IconStarYellow from '../Icon/IconStarYellow'
import IconStarGray from '../Icon/IconStarGray'

interface cardProp {
    className?: string;
    children?: React.ReactNode
    name?: string
    body?: string
    id?: string
}

const TestimonialCard = ({ className, children, id, body, name }: cardProp) => {
    return (
        <section id={id} className={`bg-white max-h-72 max-w-72 sm:max-h-[20.625rem] sm:max-w-[32.9375rem] shrink-0 flex flex-col rounded-xl py-3 sm:py-8 px-5 sm:px-14 gap-3 sm:gap-4 paydens-shadow overflow-visible ${className}`}>
            <h2 className='font-quicksand text-xs sm:text-base'>
                {body}
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
                <button aria-label='Button' className='font-[600] text-base sm:text-2xl'>{name}</button>
            </div>
        </section>
    )
}

export default TestimonialCard