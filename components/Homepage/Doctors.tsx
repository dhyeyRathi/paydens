import styles from "./components.css/doctorsection.module.css"
import { ArrowButton, Button } from '../ui/Button'
import DoctorCard from '../ui/DoctorCard'
import Link from 'next/link'
import IconShieldCheck from '../Icon/IconShieldCheck'
import Heading, { HeadingHighlight } from '../ui/Heading'

const Doctors = () => {
    const doctor = ["/doctors/left.png", "/doctors/center.png", "/doctors/right.png"]
    return (
        <section className={`${styles.doctorSection} animationPopUp`}>
            <div className={`${styles.textCont}`}>
                <Heading center={false}>Your Health, In <HeadingHighlight>Expert </HeadingHighlight> Hands</Heading>
                <p>Paydens Group is an independent family owned company established in 1969. We operate over 100 pharmacies across the South-East of England, with our Head Office based in Maidstone, Kent.
                </p>
                <div className={`${styles.badges}`}>
                    <div className='flex gap-2 items-center'>
                        <IconShieldCheck className='w-10 h-10 text-primary' />

                        <h3 className='font-[300] text-text-secondary'>GPhC Registered Professionals</h3>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <IconShieldCheck className='w-10 h-10 text-primary' />

                        <h3 className=' font-[300] text-text-secondary'>NHS Approved Provider</h3>

                    </div>
                    <div className='flex gap-2 items-center'>
                        <IconShieldCheck className='w-10 h-10 text-primary' />

                        <h3 className=' font-[300] text-text-secondary'>Trusted Since 1969</h3>

                    </div>

                </div>

                <Link aria-label="Meet our team button" scroll={false} href={'/joinourteam'} className=''>
                    <Button>Meet Our Team</Button>
                </Link>
            </div>
            <div className='flex justify-center flex-col items-center gap-4'>
                <div className={`${styles.imgCont}`}>
                    {
                        doctor.map((doc, index: number) => {
                            if (index === 1) { return (<DoctorCard image={doc} center={true} id={`doc-${index}`} key={doc} />); }
                            return (<DoctorCard image={doc} id={`doc-${index}`} key={doc} />)
                        })
                    }
                </div>
                <ArrowButton className={styles.margin} />
            </div>
        </section>
    )
}

export default Doctors