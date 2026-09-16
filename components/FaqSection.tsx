"use client"
import React, { useState } from 'react'
import styles from './components.css/Faq.module.css'

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
        <section className='flex flex-col gap-8 items-center'>
            <h1 className='w-full text-center px-4 pt-10 md:pt-10 text-2xl md:text-3xl lg:text-5xl font-bold'>
                Got Questions? We've Got<em className='text-button-hover'> Answers</em>
            </h1>
            <div className={`${styles.questionCont}`}>
                {faqs.map((que) => (
                    <div key={que.id} className={`${styles.question} ${queActive === que.id && styles.questionActive}`}>
                        <h1>{que.id}</h1>
                        <div tabIndex={0}>
                            <h2>{que.question}</h2>
                            <p>{que.answer}</p>
                        </div>
                        <button onClick={() => handleActive(que.id)}>{queActive !== que.id ? <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <rect width="40" height="40" rx="20" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M21 12.999H19V18.999H13V20.999H19V26.999H21V20.999H27V18.999H21V12.999Z" fill="#00180C" />
                        </svg> :
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#37B43D" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.6569 15.7574L24.2426 14.3432L20 18.5859L15.7574 14.3432L14.3431 15.7574L18.5858 20.0001L14.3431 24.2427L15.7574 25.6569L20 21.4143L24.2426 25.6569L25.6569 24.2427L21.4142 20.0001L25.6569 15.7574Z" fill="white" />
                            </svg>}

                        </button>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default FaqSection