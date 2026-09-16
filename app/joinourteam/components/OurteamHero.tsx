import React from 'react'
import styles from './components.css/ourteamhero.module.css'
import { Button } from '@/components/ui/Button'

const OurteamHero = () => {
    return (
        <section className={`${styles.HeroCont}`}>
            <div className='flex flex-col gap-10 max-w-210 text-center'>
                <h1 className='w-full text-4xl lg:text-7xl font-bold text-center ' >
                    Join the <em className='text-button-hover'>Paydens<br /></em>  Family
                </h1 >
                <p className='text-lg font-[300] font-quicksand'>At the Paydens Group, we believe in investing in our people. From your very first day, you’ll have access to structured training and ongoing opportunities to grow your knowledge, skills, and career.</p>
                <Button className='!self-center'>View Job Openings</Button>
            </div>

            <img src={`/assets/images/Avatars/OurTeamPageFloaters/blue.png`} alt="" className={`absolute ${styles.blue} h-20 md:h-30 w-auto`} />
            <img src={`/assets/images/Avatars/OurTeamPageFloaters/green.png`} alt="" className={`absolute  ${styles.green} h-50`} />
            <img src={`/assets/images/Avatars/OurTeamPageFloaters/orange.png`} alt="" className={`absolute ${styles.orange} h-25 w-auto`} />
            <img src={`/assets/images/Avatars/OurTeamPageFloaters/purple.png`} alt="" className={`absolute ${styles.purple} h-20 md:h-35 `} />
            <img src={`/assets/images/Avatars/OurTeamPageFloaters/violet.png`} alt="" className={`absolute ${styles.violet} h-25`} />
            <img src={`/assets/images/Avatars/OurTeamPageFloaters/red.png`} alt="" className={`absolute hidden lg:block ${styles.red} h-45 w-auto`} />

        </section >
    )
}

export default OurteamHero