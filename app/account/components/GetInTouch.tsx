"use client"
import React from 'react'
import styles from "./components.css/GetInTouch.module.css"
import Image from 'next/image'
import { Logo } from '@/components/Icon/Logo/Logo'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'
import IconGetInTouchScribble from '@/components/Icon/IconGetInTouchScribble'



const GetInTouch = () => {
    const [formType, setFormType] = useState<string>("message");
    return (
        <section className={`${styles.GITsection}`}>
            <h1 className='text-4xl lg:text-heading font-bold w-full'>Get In Touch Today</h1>

            <div className={`${styles.textCardCont}`}>
                <div className={`${styles.textCard}`}>
                    <Logo className='absolute top-[0] right-[0] h-40 w-auto' />
                    <div>
                        <h1>Email Address:</h1>
                        <p>contact@paydens.com</p>
                    </div>

                    <div>
                        <h1>Paydens Head Office:</h1>
                        <p>Paydens Ltd. <br />
                            Parkwood<br />
                            Sutton Road<br />
                            Maidstone <br />
                            Kent ME15 9NE</p>
                    </div>
                    <div>
                        <h1>Telephone Number:</h1>
                        <p>01622 754977</p>
                    </div>
                    <div>
                        <h2>Get In Touch.</h2>
                        <IconGetInTouchScribble className="w-[237px] h-[42px]" />

                    </div>
                </div>
                <form className={`${styles.form}`}>
                    <div className='flex'>
                        <button type='button' className={` p-5 relative text-16 ${formType === "message" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("message")}>Send us a message
                            {formType === "message" && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>
                        <button type='button' className={`  p-5 relative text-16 ${formType === "complaint" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("complaint")}>Complaint form
                            {formType === "complaint" && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>
                    </div>
                    <div className='flex w-full justify-between gap-4 md:gap-5 '>
                        <div className='flex flex-col gap-1 w-full'>

                            <label>First Name</label>
                            <input placeholder='Enter your first name' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>

                            <label>Last Name</label>
                            <input placeholder='Enter your last name' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label>Email</label>
                        <input placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label>Phone Number</label>
                        <input placeholder='Enter your phone number' type='number' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label>Subject</label>
                        <input placeholder='Select subject' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label>Subject</label>
                        <textarea placeholder='Your message' className='!pb-20' />
                    </div>
                    <Button type="submit" className='!self-start !text-base'>Send Message</Button>
                </form>
            </div>
        </section>
    )
}

export default GetInTouch