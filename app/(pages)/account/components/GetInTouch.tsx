"use client"
import styles from "./components.css/GetInTouch.module.css"
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
                        <IconGetInTouchScribble className="w-[clamp(10rem,16vw,14.8125rem)] h-auto" />

                    </div>
                </div>
                <form aria-label="contact us form" className={`${styles.form}`} onSubmit={(e) => e.preventDefault()}>
                    <div className='flex'>
                        <button aria-label="set form type to message" type='button' className={` p-5 relative text-16 ${formType === "message" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("message")}>Send us a message
                            {formType === "message" && <hr className='w-full absolute bottom-0 left-0 h-0.5 bg-info/40 border-none' />}</button>
                        <button aria-label="set form type to complaint" type='button' className={`  p-5 relative text-16 ${formType === "complaint" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("complaint")}>Complaint form
                            {formType === "complaint" && <hr className='w-full absolute bottom-0 left-0 h-0.5 bg-info/40 border-none' />}</button>
                    </div>
                    <div className='flex w-full justify-between gap-4 md:gap-5 '>
                        <div className='flex flex-col gap-1 w-full'>

                            <label htmlFor='first name'>First Name</label>
                            <input aria-label="first name input" id='first name' placeholder='Enter your first name' required />
                        </div>
                        <div className='flex flex-col gap-1 w-full'>

                            <label htmlFor='last name'>Last Name</label>
                            <input aria-label="last name input" id="last name" placeholder='Enter your last name' required />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='email'>Email</label>
                        <input aria-label="email input" id="email" placeholder='Enter your email' required />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='phno'>Phone Number</label>
                        <input aria-label="phone number input" id='phno' placeholder='Enter your phone number' type='tel' required />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='subject'>Subject</label>
                        <input aria-label="subject input" id="subject" placeholder='Select subject' required />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>

                        <label htmlFor='Message'>Message</label>
                        <textarea aria-label="description input" id="Message" placeholder='Your message' className='!pb-20' required />
                    </div>
                    <div>
                        <Button >Send Message</Button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default GetInTouch