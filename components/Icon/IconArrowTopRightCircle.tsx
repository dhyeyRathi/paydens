import React from 'react';

const IconArrowTopRightCircle = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" className='fill-link group-hover:fill-button-hover transition-all duration-300 ease-in-out' />
            <path d="M32.424 17.2521C32.3758 16.7019 31.8908 16.2949 31.3406 16.3431L22.3749 17.1275C21.8247 17.1756 21.4177 17.6606 21.4658 18.2108C21.514 18.761 21.999 19.168 22.5492 19.1199L30.5187 18.4226L31.216 26.3922C31.2641 26.9424 31.7491 27.3493 32.2993 27.3012C32.8495 27.2531 33.2565 26.768 33.2084 26.2179L32.424 17.2521ZM18.572 32.6602L19.3381 33.3029L32.1938 17.9821L31.4278 17.3393L30.6617 16.6965L17.806 32.0174L18.572 32.6602Z" fill="white" />
        </svg>
    )
}

export default IconArrowTopRightCircle;
