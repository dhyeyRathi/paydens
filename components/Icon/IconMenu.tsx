import React from 'react';

const IconMenu = ({ className }: { className?: string }) => {
    return (
        <svg aria-label="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={className}>
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
        </svg>
    )
}

export default IconMenu;
