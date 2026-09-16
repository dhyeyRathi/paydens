import React from 'react'
import styles from './components.css/Doctors.module.css'
import { DoctorCardVar2 } from '@/components/ui/DoctorCard'

const Doctors = () => {
    const doctor = ["/doctors/left.png", "/doctors/right.png", "/doctors/center.png"]
    return (
        <section className='flex flex-col lg:gap-10'>
            <h1 className='w-full text-center px-4 pt-4 md:pt-10 text-3xl lg:text-5xl font-bold'>
                Your health, In <em className='text-button-hover'>Expert </em> Hands
            </h1>

            <div className={`${styles.CardContainer}`}>
                <button className={`${styles.arrowButton} group`}>
                    <svg
                        width="10"
                        height="15"
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: "scaleX(-1)" }}
                    >
                        <path
                            d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                            className='fill-text-secondary group-hover:fill-white'
                        />
                    </svg>
                </button>
                {doctor.map((doc) => (
                    <DoctorCardVar2 key={doc} name='Sarah Thompson' image={doc} />
                ))}

                <button className={`${styles.arrowButton} group`}>
                    <svg
                        width="10"
                        height="15"
                        viewBox="0 0 6 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M-0.000134468 9.925L0.884032 10.8083L5.69987 5.99417C5.77749 5.91703 5.8391 5.8253 5.88114 5.72425C5.92318 5.62321 5.94482 5.51485 5.94482 5.40542C5.94482 5.29598 5.92318 5.18762 5.88114 5.08658C5.8391 4.98554 5.77749 4.89381 5.69987 4.81667L0.884032 0L0.000698566 0.883333L4.5207 5.40417L-0.000134468 9.925Z"
                            className='fill-text-secondary group-hover:fill-white'
                        />
                    </svg>
                </button>


            </div>
        </section>
    )
}

export default Doctors