"use client"
import React, { useState } from 'react'
import styles from "./component.css/Treatments.module.css"
import { InputBarVar2 } from '@/components/ui/InputBar'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'


const Treatments = () => {
    const treatments = [
        {
            "title": "Weight Loss",
            "diseases": ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            "icon": "/diseases/weightloss.png"
        },
        {
            "title": "Acne",
            "diseases": ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            "icon": "/diseases/acne.png"
        },
        {
            "title": "Anaphylaxis",
            "diseases": ["Epinephrine", "Famotidine", "Diphenhydramine", "Levalbuterol"],
            "icon": "/diseases/headache.png"
        },
        {
            "title": "Asthma",
            "diseases": ["Advair", "Xopenex", "Fluticasone + Salmeterol", "Levalbuterol"],
            "icon": "/diseases/asthama.png"
        },
        {
            "title": "BPH",
            "diseases": ["Tamsulosin", "Dutasteride", "Finasteride", "Doxazosin"],
            "icon": "/diseases/organ.png"
        },
        {
            "title": "Cold Sores",
            "diseases": ["Azelaic Acid", "Azelex", "Doxycycline", "Levalbuterol"],
            "icon": "/diseases/throat.png"
        },
        {
            "title": "COPD",
            "diseases": ["Combivent", "Spiriva", "Serevent", "Stiolto Respimat"],
            "icon": "/diseases/lungs.png"
        },
        {
            "title": "Chlamydia",
            "diseases": ["Levofloxacin", "Azithromycin", "Doxycycline", "Zithromax"],
            "icon": "/diseases/gender.png"
        },
        {
            "title": "Diabetes",
            "diseases": ["Farxiga", "Januvia", "Glipizide", "Rybelsus"],
            "icon": "/diseases/diabetes.png"
        },
        {
            "title": "Erectile Dysfunction",
            "diseases": ["Viagra", "Cialis", "Sildenafil", "Tadalafil"],
            "icon": "/diseases/semen.png"
        },
        {
            "title": "Folliculitis",
            "diseases": ["Ziana gel", "Clindacin", "Doxycycline", "Onexton"],
            "icon": "/diseases/follicus.png"
        },
        {
            "title": "Weight Loss",
            "diseases": ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            "icon": "/diseases/waist.png"
        }
    ]

    const categories = ["All Treatments", "Men's Health", "Women's Health", "Skin", "Weight Management", 'Sexual Health', "All Treatments", "All Treatments"]
    const [formType, setFormType] = useState<number>(0);
    return (
        <section className={`${styles.TreatmentsSection}`}>
            <h1 className='font-quicksand text-center'>What do you need help with?</h1>
            <InputBarVar2 placeholder='what condition are you looking for?' divClassName='!self-center !h-10 lg:!h-auto !w-[90%] lg:!w-[40%]'>
                <Button className='!rounded-md'>Search</Button>
            </InputBarVar2>

            <div className='flex w-full justify-center md:gap-8 flex-wrap'>

                {categories.map((cat, index) => (
                    <button type='button' key={index} className={` py-2  md:py-4 px-4 relative text-sm md:text-xl text-text-secondary/60 ${formType === index && '!text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                        onClick={() => setFormType(index)}>
                        {cat}
                        {formType === index && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-y-10 sm:gap-x-5 sm:gap-y-10 lg:gap-x-10 lg:gap-y-15'>
                {
                    treatments.map((item, index) => (
                        <div key={index} className={`${styles.card}`}>
                            <div className=' flex h-10 md:h-20 justify-between w-full items-center '> <h1>{item.title} </h1>
                                <img src={item.icon} alt={item.title} className='h-full' /></div>

                            {
                                item.diseases.map((e, index: number) => (
                                    <button className={`${styles.cardItem}`} key={e}>
                                        <h2> {e}</h2>
                                        {e && <svg
                                            width="10"
                                            height="15"
                                            viewBox="0 0 6 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                                                fill="#444444"
                                            />
                                        </svg>}
                                    </button>
                                ))
                            }

                            <p>See More</p>
                        </div>))
                }

            </div>
            <Button>Load More</Button>
        </section>
    )
}

export default Treatments