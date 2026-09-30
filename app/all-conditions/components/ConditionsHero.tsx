import React from 'react'
import styles from "./component.css/ConditionHero.module.css"
import { IconStep1, IconStep2, IconStep3, IconStep4 } from '@/components/Icon/AllConditions'

const ConditionsHero = () => {
    return (
        <section className={`${styles.HeroCont}`}>
            <h1 className='w-full text-2xl md:text-3xl lg:text-heading font-bold'>
                Trusted <em className='text-button-hover'> Treatments</em> for Common Conditions
            </h1>
            <div className={`${styles.cardCont}`}>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 1
                    </h2>
                    <h1>
                        Find Your Condition
                    </h1>
                    <p>
                        Explore our list of health conditions to find the one that fits your needs.
                    </p>
                    <IconStep1 className="absolute right-[-8%] bottom-[-8%] w-[143px] h-[141px]" />

                </div>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 2
                    </h2>
                    <h1>
                        Choose Your Product
                    </h1>
                    <p>
                        Browse treatments and select the options that are suitable for you.
                    </p>
                    <IconStep2 className="absolute right-[-8%] bottom-[-8%] w-[143px] h-[141px]" />


                </div>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 3
                    </h2>
                    <h1>
                        Fill Mandatory Questionaire
                    </h1>
                    <p>
                        Fill out a short online questionnaire so our doctors understand your health.
                    </p>
                    <IconStep3 className="absolute right-[-8%] bottom-[-8%] w-[143px] h-[141px]" />



                </div>
                <div className={`${styles.card}`}>
                    <h2>
                        STEP 4
                    </h2>
                    <h1>
                        Recieve it next day
                    </h1>
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