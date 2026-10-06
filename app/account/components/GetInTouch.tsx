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
        <section className={`${styles.GITsection} animationPopUp`}>
            <h1 className='text-4xl lg:text-heading font-bold w-full'>Get In Touch Today</h1>

            <div className={`${styles.textCardCont}`}>
                <div className={`${styles.textCard}`}>
                    <Logo className='absolute top-[0] right-[0] h-40 w-auto' />
                    <div>
                        <h2>Email Address:</h2>
                        <p>contact@paydens.com</p>
                    </div>

                    <div>
                        <h2>Paydens Head Office:</h2>
                        <p>Paydens Ltd. <br />
                            Parkwood<br />
                            Sutton Road<br />
                            Maidstone <br />
                            Kent ME15 9NE</p>
                    </div>
                    <div>
                        <h2>Telephone Number:</h2>
                        <p>01622 754977</p>
                    </div>
                    <div>
                        <h3>Get In Touch.</h3>
                        <IconGetInTouchScribble className="w-[237px] h-[42px]" />

                    </div>
                </div>
                <form aria-label="form" className={`${styles.form}`}>
                    <div className='flex'>
                        <button aria-label="button" type='button' className={` p-5 relative text-16 ${formType === "message" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("message")}>Send us a message
                            {formType === "message" && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>
                        <button aria-label="button" type='button' className={`  p-5 relative text-16 ${formType === "complaint" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("complaint")}>Complaint form
                            {formType === "complaint" && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>
                    </div>
                    <div className='flex w-full justify-between gap-4 md:gap-5 '>
                        <div className='flex flex-col gap-1 w-full'>

                            <label htmlFor='first name'>First Name</label>
                            <input aria-label="input" name='first name' placeholder='Enter your first name' />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>

                            <label htmlFor='last name'>Last Name</label>
                            <input aria-label="input" name="last name" placeholder='Enter your last name' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='email'>Email</label>
                        <input aria-label="input" name="email" placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='phno'>Phone Number</label>
                        <input aria-label="input" name='phno' placeholder='Enter your phone number' type='number' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='subject'>Subject</label>
                        <input aria-label="input" name="subject" placeholder='Select subject' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='textarea'>Subject</label>
                        <textarea aria-label="textarea" name="textarea" placeholder='Your message' className='!pb-20' />
                    </div>
                    <Button type="submit" className='!self-start !text-base'>Send Message</Button>
                </form>
            </div>
        </section>
    )
}

export default GetInTouch