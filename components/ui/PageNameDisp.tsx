"use client"
import IconChevronRight from '../Icon/IconChevronRight';

interface Routes {
    label?: string;
    href?: string;
}

interface PageNameProps {
    PageName: Routes[];
}

const PageNameDisp = ({ PageName }: PageNameProps) => {

    return (
        <div className='flex gap-2 sm:gap-4 !self-start mb-[-25px] lg:mb-[-50px]'>
            {
                PageName.map((e, index) => (
                    <a aria-label="Link" href={`${index === 0 ? '/' : e.href} `} key={index} className={`flex gap-2 sm:gap-4 items-center text-[16px] ${index !== (PageName.length - 1) && "text-gray-400"}`}> {index !== 0 &&
                        <IconChevronRight className="h-2 sm:h-3 w-2 text-text-secondary group-hover:text-white" />}{e.label}</a>
                ))
            }
        </div>
    )
}

export default PageNameDisp