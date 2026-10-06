import React from 'react';

const IconClose = ({ className }: { className?: string }) => {
    return (
        <svg aria-label="svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#37B43D" />
            <path fillRule="evenodd" clipRule="evenodd" d="M25.6569 15.7574L24.2426 14.3432L20 18.5859L15.7574 14.3432L14.3431 15.7574L18.5858 20.0001L14.3431 24.2427L15.7574 25.6569L20 21.4143L24.2426 25.6569L25.6569 24.2427L21.4142 20.0001L25.6569 15.7574Z" fill="white" />
        </svg>
    )
}
export default IconClose;
