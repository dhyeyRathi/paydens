import React from 'react'

interface HeadingProps {
    children?: string | React.ReactNode
    font?: string
    bold?: boolean
    center?: boolean
}

const Heading = ({ children, font, bold = true, center = true }: HeadingProps) => {
    return (
        <h2 className={`w-full ${center ? 'text-center' : ''} text-2xl md:text-3xl xl:text-heading ${bold ? 'font-bold' : ''} font-${font}`}>
            {children}
        </h2 >
    )
}

const HeadingHighlight = ({ children }: HeadingProps) => {
    return (
        <span className='text-button-hover text-2xl md:text-3xl xl:text-heading font-bold'>
            {children}
        </span>
    )
}

export default Heading
export { HeadingHighlight }