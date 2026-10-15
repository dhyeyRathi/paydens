"use client"
import { useState } from 'react'
import styles from "./components.css/Treatments.module.css"
import { InputBarVar2 } from '@/components/ui/InputBar'
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
import Heading from '@/components/ui/Heading'


const Treatments = () => {
    const [formType, setFormType] = useState<string>("All Treatments");

    const treatments = [
        {
            id: 1,
            title: "Weight Loss",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            icon: <Weightloss className='h-full' />,
            category: "Weight Management"
        },
        {
            id: 2,
            title: "Acne",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            icon: <Acne className='h-full' />,
            category: "Skin"
        },
        {
            id: 3,
            title: "Anaphylaxis",
            diseases: ["Epinephrine", "Famotidine", "Diphenhydramine", "Levalbuterol"],
            icon: <Headache className='h-full' />,
            category: "All Treatments"
        },
        {
            id: 4,
            title: "Asthma",
            diseases: ["Advair", "Xopenex", "Fluticasone + Salmeterol", "Levalbuterol"],
            icon: <Asthama className='h-full' />,
            category: "All Treatments"
        },
        {
            id: 5,
            title: "BPH",
            diseases: ["Tamsulosin", "Dutasteride", "Finasteride", "Doxazosin"],
            icon: <Organ className='h-full' />,
            category: "Men's Health"
        },
        {
            id: 6,
            title: "Cold Sores",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Levalbuterol"],
            icon: <Throat className='h-full' />,
            category: "Skin"
        },
        {
            id: 7,
            title: "COPD",
            diseases: ["Combivent", "Spiriva", "Serevent", "Stiolto Respimat"],
            icon: <Lungs className='h-full' />,
            category: "All Treatments"
        },
        {
            id: 8,
            title: "Chlamydia",
            diseases: ["Levofloxacin", "Azithromycin", "Doxycycline", "Zithromax"],
            icon: <Gender className='h-full' />,
            category: "Sexual Health"
        },
        {
            id: 9,
            title: "Diabetes",
            diseases: ["Farxiga", "Januvia", "Glipizide", "Rybelsus"],
            icon: <Diabetes className='h-full' />,
            category: "All Treatments"
        },
        {
            id: 10,
            title: "Erectile Dysfunction",
            diseases: ["Viagra", "Cialis", "Sildenafil", "Tadalafil"],
            icon: <Semen className='h-full' />,
            category: "Sexual Health"
        },
        {
            id: 11,
            title: "Folliculitis",
            diseases: ["Ziana gel", "Clindacin", "Doxycycline", "Onexton"],
            icon: <Follicus className='h-full' />,
            category: "Skin"
        },
        {
            id: 12,
            title: "Weight Loss",
            diseases: ["Azelaic Acid", "Azelex", "Doxycycline", "Differin"],
            icon: <Waist className='h-full' />,
            category: "Weight Management"
        }
    ];

    const categories = ["All Treatments", "Men's Health", "Women's Health", "Skin", "Weight Management", 'Sexual Health']
    const filteredTreatments = treatments.filter((treat) => treat.category === formType)
    return (
        <section className={`${styles.TreatmentsSection} animationPopUp10`}>
            <Heading font='quicksand' bold={false}>What do you need help with?</Heading>
            <InputBarVar2 placeholder='what condition are you looking for?' divClassName='!self-center  !w-[90%] lg:!w-[40%]'>
                <Button>Search</Button>
            </InputBarVar2>

            <div className='flex w-full justify-center md:gap-2.5 flex-wrap'>

                {categories.map((cat) => (
                    <button aria-label={cat} type='button' key={cat} className={` py-2  md:py-5 px-5 relative text-sm md:text-16 text-text-secondary/60
                         ${formType === cat && '!text-info/80 rounded-sm overflow-hidden bg-info/10'}`}
                        onClick={() => setFormType(cat)}>
                        {cat}
                        {formType === cat && <hr className='w-full absolute bottom-0 left-0 h-0.5 bg-info/40 border-none' />}</button>))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-y-10 sm:gap-x-5 sm:gap-y-10 lg:gap-x-5 lg:gap-y-10'>
                {
                    formType === "All Treatments" && treatments.map((item) => {
                        return (
                            <div key={item.id} className={`${styles.card}`}>
                                <div className=' flex h-10 md:h-15 justify-between w-full items-center '> <h2>{item.title} </h2>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    {
                                        item.diseases.map((e, index: number) => (
                                            <button aria-label={e + index} className={`${styles.cardItem}`} key={e}>
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
                    formType !== "All Treatments" && filteredTreatments.map((item) => {
                        return (
                            <div key={item.id} className={`${styles.card}`}>
                                <div className=' flex h-10 md:h-15 justify-between w-full items-center '> <h2>{item.title} </h2>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col gap-1'>
                                    {
                                        item.diseases.map((e, index: number) => (
                                            <button aria-label={e + index} className={`${styles.cardItem}`} key={e}>
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