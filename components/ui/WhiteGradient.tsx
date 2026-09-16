import React from 'react'


const WhiteGradient = ({ className }: { className: string }) => {
    return (
        <div className={`bg-gradient-to-t from-background  via-transparent to-transparent  absolute inset-0 ${className}`}>

        </div>
    )
}

export default WhiteGradient