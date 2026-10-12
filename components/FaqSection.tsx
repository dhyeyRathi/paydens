"use client"
import React, { useState } from 'react'
import styles from './components.css/Faq.module.css'
import IconPlus from './Icon/IconPlus'
import IconClose from './Icon/IconClose'
import Heading, { HeadingHighlight } from './ui/Heading'

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
            <Heading>
                Got Questions? We&apos;ve Got<HeadingHighlight> Answers </HeadingHighlight>
            </Heading>

            <div className={`${styles.questionCont}`}>
                {faqs.map((que) => (
                    <div key={que.id} aria-expanded={queActive == que.id ? true : false}
                        aria-controls={"faq-que-" + que.id} className={`${styles.question} ${queActive === que.id && styles.questionActive}`}>
                        <span>{que.id}</span>
                        <div>
                            <h3>{que.question}</h3>
                            <p>{que.answer}</p>
                        </div>
                        <button aria-label="Toggle answer" onClick={() => handleActive(que.id)}>{queActive !== que.id ? <IconPlus /> :
                            <IconClose />}

                        </button>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default FaqSection