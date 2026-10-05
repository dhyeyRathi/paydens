"use client"
import React, { useState } from 'react'
import styles from "./component.css/Treatments.module.css"
import { InputBarVar2 } from '@/components/ui/InputBar'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import IconChevronRight from '@/components/Icon/IconChevronRight'
import {
    Acne,
    Asthama,
    Diabetes,
    Follicus,
    Gender,
    Headache,
    Lungs,
    Organ,
    Semen,
    Throat,
    Waist,
    Weightloss,
} from "@/components/Icon/diseases/diseases"
import { icon } from 'leaflet'


const Treatments = () => {
    const [formType, setFormType] = useState<string>("All Treatments");
    const treatments = [
        {
            title: "Weight Loss",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            icon: <Weightloss className='h-full' />,
            category: "Weight Management"
        },
        {
            title: "Acne",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            icon: <Acne className='h-full' />,
            category: "Skin"
        },
        {
            title: "Anaphylaxis",
            diseases: ["Epinephrine", "Famotidine", "Diphenhydramine", "Levalbuterol"],
            icon: <Headache className='h-full' />,
            category: "All Treatments"
        },
        {
            title: "Asthma",
            diseases: ["Advair", "Xopenex", "Fluticasone + Salmeterol", "Levalbuterol"],
            icon: <Asthama className='h-full' />,
            category: "All Treatments"
        },
        {
            title: "BPH",
            diseases: ["Tamsulosin", "Dutasteride", "Finasteride", "Doxazosin"],
            icon: <Organ className='h-full' />,
            category: "Men's Health"
        },
        {
            title: "Cold Sores",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Levalbuterol"],
            icon: <Throat className='h-full' />,
            category: "Skin"
        },
        {
            title: "COPD",
            diseases: ["Combivent", "Spiriva", "Serevent", "Stiolto Respimat"],
            icon: <Lungs className='h-full' />,
            category: "All Treatments"
        },
        {
            title: "Chlamydia",
            diseases: ["Levofloxacin", "Azithromycin", "Doxycycline", "Zithromax"],
            icon: <Gender className='h-full' />,
            category: "Sexual Health"
        },
        {
            title: "Diabetes",
            diseases: ["Farxiga", "Januvia", "Glipizide", "Rybelsus"],
            icon: <Diabetes className='h-full' />,
            category: "All Treatments"
        },
        {
            title: "Erectile Dysfunction",
            diseases: ["Viagra", "Cialis", "Sildenafil", "Tadalafil"],
            icon: <Semen className='h-full' />,
            category: "Sexual Health"
        },
        {
            title: "Folliculitis",
            diseases: ["Ziana gel", "Clindacin", "Doxycycline", "Onexton"],
            icon: <Follicus className='h-full' />,
            category: "Skin"
        },
        {
            title: "Weight Loss",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            icon: <Waist className='h-full' />,
            category: "Weight Management"
        }
    ];
    const categories = ["All Treatments", "Men's Health", "Women's Health", "Skin", "Weight Management", 'Sexual Health', "All Treatments", "All Treatments"]
    const filteredTreatments = treatments.filter((treat) => treat.category === formType)
    return (
        <section className={`${styles.TreatmentsSection} animationPopUp`}>
            <h2 className='font-quicksand text-center'>What do you need help with?</h2>
            <InputBarVar2 placeholder='what condition are you looking for?' divClassName='!self-center  !w-[90%] lg:!w-[40%]'>
                <Button className='!rounded-md'>Search</Button>
            </InputBarVar2>

            <div className='flex w-full justify-center md:gap-[10px] flex-wrap'>

                {categories.map((cat, index) => (
                    <button type='button' key={index} className={` py-2  md:py-5 px-5 relative text-sm md:text-16 text-text-secondary/60 ${formType === cat && '!text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                        onClick={() => setFormType(cat)}>
                        {cat}
                        {formType === cat && <hr className='w-full absolute bottom-0 left-0 h-[2px] bg-info/40 border-none' />}</button>))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-y-10 sm:gap-x-5 sm:gap-y-10 lg:gap-x-5 lg:gap-y-10'>
                {
                    formType === "All Treatments" && treatments.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.card}`}>
                                <div className=' flex h-10 md:h-15 justify-between w-full items-center '> <h2>{item.title} </h2>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    {
                                        item.diseases.map((e, index: number) => (
                                            <button className={`${styles.cardItem}`} key={e}>
                                                <span> {e}</span>
                                                {e && <IconChevronRight className="fill-[#444444] w-2 h-auto" />}
                                            </button>
                                        ))
                                    }
                                </div>

                                <p>See More</p>
                            </div>);
                    })
                }

                {
                    formType !== "All Treatments" && filteredTreatments.map((item, index) => {
                        return (
                            <div key={index} className={`${styles.card}`}>
                                <div className=' flex h-10 md:h-15 justify-between w-full items-center '> <h2>{item.title} </h2>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    {
                                        item.diseases.map((e, index: number) => (
                                            <button className={`${styles.cardItem}`} key={e}>
                                                <span> {e}</span>
                                                {e && <IconChevronRight className="fill-[#444444] w-2 h-auto" />}
                                            </button>
                                        ))
                                    }
                                </div>

                                <p>See More</p>
                            </div>);
                    })
                }


            </div>
            <Button>Load More</Button>
        </section>
    )
}

export default Treatments