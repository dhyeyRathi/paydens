interface gradProps {
    className?: string;
}

const ColorGradient = () => {
    return (
        <div className={``}></div>
    )
}

export default ColorGradient

export const GreenGradient = ({ className }: gradProps) => {
    return (<div className={`${className} absolute bg-[#37B43D] opacity-50 blur-[6.25rem]`}>

    </div>)
}
export const BlueGradient = ({ className }: gradProps) => {
    return (<div className={` ${className} absolute bg-[#4B5B98] opacity-50 blur-[6.25rem]`}>

    </div>)
}

export const CyanGradient = ({ className }: gradProps) => {
    return (<div className={`${className} absolute bg-[#00939E] opacity-50 blur-[6.25rem]`}>

    </div>)
}

export const ColorGradientBg = ({ className }: gradProps) => {
    return (
        <div className={`absolute inset-0 overflow-x-clip overflow-y-visible pointer-events-none ${className} `}>
            <BlueGradient className='w-full h-[12.5rem] blur-[8.75rem] top-[80%]  
            md:left-[-30%] md:top-[40%] md:w-[50rem] 
            lg:h-[25rem] lg:blur-[12.5rem] lg:right-[-5%] lg:top-[25%] lg:left-auto lg:rotate-160' />


            <GreenGradient className='w-full h-[15.625rem] blur-[8.75rem] 
            md:w-[50rem] md:h-[18.75rem]  
            lg:blur-[12.5rem] lg:right-[25%] lg:bottom-[15%]' />


            <CyanGradient className='w-full h-[12.5rem] blur-[8.75rem] bottom-[30%] 
            md:w-[50rem] md:right-[-30%] md:top-[40%] 
            lg:h-[25rem] lg:blur-[12.5rem] lg:left-[-5%] lg:top-[25%] lg:rotate-200' />
        </div>
    );
}