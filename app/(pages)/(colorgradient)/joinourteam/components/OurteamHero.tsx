import styles from './components.css/OurteamHero.module.css'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

const OurteamHero = () => {
    return (
        <section className={`${styles.HeroCont} animationPopUp`}>
            <div className='flex flex-col gap-10 max-w-210 text-center pt-20 items-center'>
                <h1 className='w-full text-4xl lg:text-[clamp(2.5rem,5vw,3.8125rem)] font-bold text-center ' >
                    Join the <em className='text-button-hover'>Paydens<br /></em>  Family
                </h1 >
                <p className='text-16 font-[300] font-quicksand'>At the Paydens Group, we believe in investing in our people. From your very first day, you’ll have access to structured training and ongoing opportunities to grow your knowledge, skills, and career.</p>
                <Button >View Job Openings</Button>
            </div>

            <Image src={`/assets/images/Avatars/OurTeamPageFloaters/blue.png`} alt="blue circle" width={182} height={182} className={`absolute ${styles.blue} h-20 md:h-[4.4375rem] w-auto`} />
            <Image src={`/assets/images/Avatars/OurTeamPageFloaters/green.png`} alt="green circle" width={312} height={312} className={`absolute ${styles.green} h-[8.5rem] w-auto`} />
            <Image src={`/assets/images/Avatars/OurTeamPageFloaters/orange.png`} alt="orange circle" width={192} height={192} className={`absolute ${styles.orange} h-[4.75rem] w-auto`} />
            <Image src={`/assets/images/Avatars/OurTeamPageFloaters/purple.png`} alt="purple circle" width={214} height={214} className={`absolute ${styles.purple} h-20 md:h-[7.375rem] w-auto`} />
            <Image src={`/assets/images/Avatars/OurTeamPageFloaters/violet.png`} alt="violet circle" width={160} height={160} className={`absolute ${styles.violet} h-[3.75rem] w-auto`} />
            <Image src={`/assets/images/Avatars/OurTeamPageFloaters/red.png`} alt="red circle" width={262} height={262} className={`absolute hidden lg:block ${styles.red} h-[6.9375rem] w-auto`} />

        </section >
    )
}

export default OurteamHero