import React from 'react'
import styles from "./component.css/ConditionHero.module.css"
import { IconStep1, IconStep2, IconStep3, IconStep4 } from '@/components/Icon/AllConditions-health'


const ConditionsHero = () => {
    return (
        <section className={`${styles.HeroCont} animationPopUp`}>
            <h1 className='w-full  px-4 text-2xl md:text-3xl lg:text-heading font-bold'>
                <em className='text-button-hover'> Professional </em> Care for Over 90 Health Conditions
            </h1>
            <div className={`${styles.cardCont}`}>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 1
                    </h2>
                    <h3>
                        Pick Your Condition
                    </h3>
                    <p>
                        Choose from a wide range of health conditions that match your needs.
                    </p>
                    <IconStep1 className="absolute right-[-8%] bottom-[-8%] w-[143px] h-[141px]" />

                </div>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 2
                    </h2>
                    <h3>
                        Answer a Few Questions
                    </h3>
                    <p>
                        Fill out a short online questionnaire so our doctors understand your health.
                    </p>
                    <IconStep2 className="absolute right-[-8%] bottom-[-8%] w-[143px] h-[141px]" />


                </div>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 3
                    </h2>
                    <h3>
                        Schedule Appointment
                    </h3>
                    <p>
                        Book a convenient time to consult with our healthcare experts.
                    </p>
                    <IconStep3 className="absolute right-[-8%] bottom-[-8%] w-[143px] h-[141px]" />
                </div>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 4
                    </h2>
                    <h3>
                        Recieve Expert Care
                    </h3>
                    <p>
                        Once approved, your treatment will be safely delivered to your home.
                    </p>
                    <IconStep4 className="absolute right-[-5%] bottom-[-8%] w-[143px] h-[141px]" />



                </div>
            </div>
        </section>
    )
}

export default ConditionsHero