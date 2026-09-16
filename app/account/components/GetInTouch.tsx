"use client"
import React from 'react'
import styles from "./components.css/GetInTouch.module.css"
import Image from 'next/image'
import logo from "@/public/assets/images/logo/logo.png"
import { Button } from '@/components/ui/Button'
import { useState } from 'react'



const GetInTouch = () => {
    const [formType, setFormType] = useState<string>("message");
    return (
        <section className={`${styles.GITsection}`}>
            <h1 className='text-4xl lg:text-5xl font-bold w-full'>Get In Touch Today</h1>

            <div className={`${styles.textCardCont}`}>
                <div className={`${styles.textCard}`}>
                    <Image src={logo} alt='logo' className='absolute top-[-5%] right-[-5%] h-40 w-auto' />
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
                        <svg width="237" height="42" viewBox="0 0 237 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="42" height="42" rx="21" fill="#37B43D" fillOpacity="0.2" />
                            <g clipPath="url(#clip0_3_16917)">
                                <path d="M28 18.2308H23.3333V14.5385C23.3333 13.5194 24.1696 13.6154 25.2 13.6154H27.0667V9H23.3333C20.2403 9 17.7333 11.4794 17.7333 14.5385V18.2308H14V22.8462H17.7333V33H23.3333V22.8462H26.1333L28 18.2308Z" fill="#2D6D1F" />
                            </g>
                            <rect x="65" width="42" height="42" rx="21" fill="#37B43D" fillOpacity="0.2" />
                            <g clipPath="url(#clip1_3_16917)">
                                <g clipPath="url(#clip2_3_16917)">
                                    <path d="M74.153 9H81.218L87.5075 17.9955L95.06 9H97.3175L88.37 19.23L98 33H90.935L84.3665 23.607L76.256 33H74L83.5055 22.3755L74.153 9Z" fill="#2D6D1F" />
                                </g>
                            </g>
                            <rect x="130" width="42" height="42" rx="21" fill="#37B43D" fillOpacity="0.2" />
                            <g clipPath="url(#clip3_3_16917)">
                                <g clipPath="url(#clip4_3_16917)">
                                    <path d="M153.109 21C153.109 22.1649 152.165 23.1094 151 23.1094C149.835 23.1094 148.891 22.1649 148.891 21C148.891 19.8351 149.835 18.8906 151 18.8906C152.165 18.8906 153.109 19.8351 153.109 21Z" fill="#2D6D1F" />
                                    <path d="M154.562 14.625H147.438C145.887 14.625 144.625 15.8866 144.625 17.4375V24.5625C144.625 26.1134 145.887 27.375 147.438 27.375H154.562C156.113 27.375 157.375 26.1134 157.375 24.5625V17.4375C157.375 15.8866 156.113 14.625 154.562 14.625ZM151 24.5156C149.061 24.5156 147.484 22.9385 147.484 21C147.484 19.0615 149.061 17.4844 151 17.4844C152.939 17.4844 154.516 19.0615 154.516 21C154.516 22.9385 152.939 24.5156 151 24.5156ZM155.031 17.6719C154.643 17.6719 154.328 17.3571 154.328 16.9688C154.328 16.5804 154.643 16.2656 155.031 16.2656C155.42 16.2656 155.734 16.5804 155.734 16.9688C155.734 17.3571 155.42 17.6719 155.031 17.6719Z" fill="#2D6D1F" />
                                    <path d="M156.672 9H145.328C141.839 9 139 11.8389 139 15.3281V26.6719C139 30.1611 141.839 33 145.328 33H156.672C160.161 33 163 30.1611 163 26.6719V15.3281C163 11.8389 160.161 9 156.672 9ZM158.781 24.5625C158.781 26.8887 156.889 28.7812 154.562 28.7812H147.438C145.111 28.7812 143.219 26.8887 143.219 24.5625V17.4375C143.219 15.1113 145.111 13.2188 147.438 13.2188H154.562C156.889 13.2188 158.781 15.1113 158.781 17.4375V24.5625Z" fill="#2D6D1F" />
                                </g>
                            </g>
                            <rect x="195" width="42" height="42" rx="21" fill="#37B43D" fillOpacity="0.2" />
                            <g clipPath="url(#clip5_3_16917)">
                                <path d="M224.727 9H207.273C206.405 9 205.572 9.3448 204.959 9.95856C204.345 10.5723 204 11.4047 204 12.2727V29.7273C204 30.5953 204.345 31.4277 204.959 32.0414C205.572 32.6552 206.405 33 207.273 33H224.727C225.595 33 226.428 32.6552 227.041 32.0414C227.655 31.4277 228 30.5953 228 29.7273V12.2727C228 11.4047 227.655 10.5723 227.041 9.95856C226.428 9.3448 225.595 9 224.727 9ZM212.182 27.9927C212.182 28.0593 212.169 28.1252 212.144 28.1867C212.118 28.2483 212.081 28.3042 212.034 28.3513C211.987 28.3985 211.931 28.4359 211.87 28.4614C211.808 28.4869 211.742 28.5 211.676 28.5H209.52C209.453 28.5002 209.387 28.4872 209.326 28.4618C209.264 28.4363 209.208 28.399 209.161 28.3518C209.114 28.3047 209.076 28.2487 209.051 28.1871C209.026 28.1254 209.013 28.0594 209.013 27.9927V18.9545C209.013 18.82 209.066 18.691 209.161 18.5958C209.256 18.5007 209.385 18.4473 209.52 18.4473H211.676C211.81 18.4476 211.939 18.5012 212.034 18.5963C212.129 18.6914 212.182 18.8202 212.182 18.9545V27.9927ZM210.597 17.5909C210.193 17.5909 209.797 17.4709 209.461 17.2462C209.125 17.0214 208.862 16.702 208.708 16.3282C208.553 15.9545 208.512 15.5432 208.591 15.1464C208.67 14.7496 208.865 14.3852 209.151 14.0991C209.437 13.813 209.801 13.6182 210.198 13.5393C210.595 13.4604 211.006 13.5009 211.38 13.6557C211.754 13.8105 212.073 14.0727 212.298 14.4091C212.523 14.7454 212.643 15.1409 212.643 15.5455C212.643 16.0879 212.427 16.6082 212.044 16.9918C211.66 17.3754 211.14 17.5909 210.597 17.5909ZM223.451 28.0282C223.451 28.0895 223.439 28.1502 223.416 28.2069C223.392 28.2635 223.358 28.315 223.315 28.3584C223.271 28.4017 223.22 28.436 223.163 28.4594C223.107 28.4828 223.046 28.4947 222.985 28.4945H220.666C220.605 28.4947 220.544 28.4828 220.488 28.4594C220.431 28.436 220.38 28.4017 220.336 28.3584C220.293 28.315 220.259 28.2635 220.235 28.2069C220.212 28.1502 220.2 28.0895 220.2 28.0282V23.7941C220.2 23.1614 220.385 21.0232 218.546 21.0232C217.121 21.0232 216.83 22.4864 216.773 23.1436V28.0336C216.773 28.1562 216.725 28.2738 216.639 28.361C216.553 28.4483 216.436 28.4982 216.314 28.5H214.075C214.013 28.5 213.953 28.4879 213.896 28.4645C213.84 28.441 213.788 28.4066 213.745 28.3633C213.702 28.32 213.668 28.2686 213.645 28.212C213.621 28.1554 213.609 28.0948 213.61 28.0336V18.915C213.609 18.8538 213.621 18.7932 213.645 18.7366C213.668 18.6801 213.702 18.6286 213.745 18.5853C213.788 18.542 213.84 18.5076 213.896 18.4842C213.953 18.4607 214.013 18.4486 214.075 18.4486H216.314C216.437 18.4486 216.556 18.4978 216.643 18.5852C216.731 18.6727 216.78 18.7913 216.78 18.915V19.7032C217.309 18.9082 218.093 18.2973 219.766 18.2973C223.473 18.2973 223.448 21.7582 223.448 23.6591L223.451 28.0282Z" fill="#2D6D1F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3_16917">
                                    <rect width="32" height="32" fill="white" transform="translate(5 5)" />
                                </clipPath>
                                <clipPath id="clip1_3_16917">
                                    <rect width="24" height="24" fill="white" transform="translate(74 9)" />
                                </clipPath>
                                <clipPath id="clip2_3_16917">
                                    <rect width="24" height="24" fill="white" transform="translate(74 9)" />
                                </clipPath>
                                <clipPath id="clip3_3_16917">
                                    <rect width="32" height="32" fill="white" transform="translate(135 5)" />
                                </clipPath>
                                <clipPath id="clip4_3_16917">
                                    <rect width="24" height="24" fill="white" transform="translate(139 9)" />
                                </clipPath>
                                <clipPath id="clip5_3_16917">
                                    <rect width="24" height="24" fill="white" transform="translate(204 9)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>
                <form className={`${styles.form}`}>
                    <div className='flex'>
                        <button type='button' className={` py-4 px-4 relative text-xl ${formType === "message" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("message")}>Send us a message
                            {formType === "message" && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>
                        <button type='button' className={` py-4 px-4 relative text-xl ${formType === "complaint" && 'text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                            onClick={() => setFormType("complaint")}>Complaint form
                            {formType === "complaint" && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>
                    </div>
                    <div className='flex w-full justify-between gap-4 md:gap-10 '>
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