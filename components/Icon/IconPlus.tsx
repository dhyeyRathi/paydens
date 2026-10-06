import React from 'react';

const IconPlus = ({ className }: { className?: string }) => {
    return (
        <svg aria-label="svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M21 12.999H19V18.999H13V20.999H19V26.999H21V20.999H27V18.999H21V12.999Z" fill="#00180C" />
        </svg>
    )
}
export default IconPlus;
