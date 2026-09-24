"use client"

interface Routes {
    label?: string;
    href?: string;
}

interface PageNameProps {
    PageName: Routes[];
}

const PageNameDisp = ({ PageName }: PageNameProps) => {

    return (
        <div className='flex gap-2 sm:gap-4 !self-start mb-[-25px] mt-[25px] lg:mb-[-50px]'>
            {
                PageName.map((e, index) => (
                    <a href={`${index === 0 ? '/' : e.href} `} key={index} className={`flex gap-2 sm:gap-4 items-center text-sm sm:text-xl ${index !== (PageName.length - 1) && "text-gray-400"}`}> {index !== 0 &&
                        <svg
                            width="10"
                            height="15"
                            viewBox="0 0 6 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className='h-2 sm:h-3 w-2'
                        >
                            <path
                                d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                                className='fill-text-secondary group-hover:fill-white'
                            />
                        </svg>}{e.label}</a>
                ))
            }
        </div>
    )
}

export default PageNameDisp