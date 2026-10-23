import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SmoothScrollToTop from '@/components/ScrollToTop'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-full flex flex-col items-center justify-center 
        pt-[100px] min-[480px]:pt-[100px] min-[769px]:pt-[180px] lg:pt-[200px] xl:pt-[240px] bg-white">
            <Navbar></Navbar>
            <SmoothScrollToTop />
            <div className="w-full xl:max-w-[90rem]">
                {children}
            </div>
            <Footer />
        </main>
    )
}

export default layout