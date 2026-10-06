"use client"
import React, { useState } from 'react'
import styles from './components.css/Faq.module.css'
import IconPlus from './Icon/IconPlus'
import IconClose from './Icon/IconClose'

const FaqSection = () => {
    const faqs = [
        {
            id: "01",
            question: "How can Pharmacy First save time?",
            answer:
                "Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists.",
        },
        {
            id: "02",
            question: "Will my personal information and medical details stay private and secure?",
            answer:
                "Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists.",

        },
        {
            id: "03",
            question: "How long does it usually take for my medicines to be delivered?",
            answer:
                "Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists.",

        },
        {
            id: "04",
            question: "In what ways can Pharmacy First help me save time compared to visiting a GP?",
            answer:
                "Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists.",

        },
    ];
    const [queActive, setQueActive] = useState<string | null>(null)
    const handleActive = (id: string) => {
        setQueActive(prev => prev === id ? null : id);
    };
    return (
        <section className='flex flex-col gap-8 items-center animationPopUp'>
            <h2 className='w-full text-center px-4 text-2xl md:text-3xl lg:text-heading font-bold'>
                Got Questions? We've Got<em className='text-button-hover'> Answers</em>
            </h2>
            <div className={`${styles.questionCont}`}>
                {faqs.map((que) => (
                    <div key={que.id} className={`${styles.question} ${queActive === que.id && styles.questionActive}`}>
                        <h2>{que.id}</h2>
                        <div tabIndex={0}>
                            <h3>{que.question}</h3>
                            <p>{que.answer}</p>
                        </div>
                        <button aria-label="button" onClick={() => handleActive(que.id)}>{queActive !== que.id ? <IconPlus /> :
                            <IconClose />}

                        </button>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default FaqSection