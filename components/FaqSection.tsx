"use client"
import { use, useEffect, useState } from 'react'
import styles from './components.css/Faq.module.css'
import IconPlus from './Icon/IconPlus'
import IconClose from './Icon/IconClose'
import Heading, { HeadingHighlight } from './ui/Heading'
import { faqType } from '@/actions/faqs'
import { getFaqs } from '@/actions/faqs'


const FaqSection = () => {
    const [faqs, setFaqs] = useState<faqType[]>([])
    const [queActive, setQueActive] = useState<string | null>(null)
    const handleActive = (id: string) => {
        setQueActive(prev => prev === id ? null : id);
    };


    useEffect(() => {
        async function getData() {
            const data = await getFaqs();

            setFaqs(data ?? [])
        }

        getData();
    }, [])
    return (
        <section className='flex flex-col gap-8 items-center animationPopUp'>
            <Heading>
                Got Questions? We&apos;ve Got<HeadingHighlight> Answers </HeadingHighlight>
            </Heading>

            <div className={`${styles.questionCont}`}>
                {faqs.map((que, index) => (
                    <div key={que._id} aria-expanded={queActive == que._id ? true : false}
                        aria-controls={que._id} className={`${styles.question} ${queActive === que._id && styles.questionActive}`}>
                        <span>{index < 10 && '0'}{index + 1}</span>
                        <div>
                            <h3>{que.question}</h3>
                            <p>{que.answer}</p>
                        </div>
                        <button aria-label="Toggle answer" onClick={() => handleActive(que._id)}>{queActive !== que._id ? <IconPlus /> :
                            <IconClose />}

                        </button>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default FaqSection