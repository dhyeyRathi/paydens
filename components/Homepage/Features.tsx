import styles from "./components.css/features.module.css"
import { ButtonVar2 } from '../ui/Button'
import scope from "@/public/assets/images/homepage/ui/scope.png"
import pills from "@/public/assets/images/homepage/ui/pills.png"
import hand from "@/public/assets/images/homepage/ui/hand.png"
import papers from "@/public/assets/images/homepage/ui/papers.png"
import meter from "@/public/assets/images/homepage/ui/meter.png"
import meds from "@/public/assets/images/homepage/ui/meds.png"
import Image from 'next/image'
import IconArrowTopRightCircle from '../Icon/IconArrowTopRightCircle'
import Heading, { HeadingHighlight } from '../ui/Heading'

const Features = () => {
    return (
        <section className={`${styles.sectionCont} animationPopUp`}>
            <Heading>
                <HeadingHighlight>Expert </HeadingHighlight>, Friendly
                <HeadingHighlight> Care </HeadingHighlight> on Your High Street and Online
            </Heading>

            <div className={`${styles.cardCont}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.docService} ${styles.boxes} paydens-shadow`}>
                        <h3 className='relative z-10'>Explore Online doctor services</h3>
                        <ButtonVar2 className='relative z-10 w-fit'>Start Consultation</ButtonVar2>
                        <Image src={scope} alt='stethoscope image' className='absolute right-2 bottom-2 w-20 sm:w-24 md:w-28 h-auto object-contain pointer-events-none' />
                    </div>
                    <div className={`${styles.instantHelp} ${styles.boxes} paydens-shadow`}>
                        <h3 className='relative z-10'>Get instant help for minor ailments (private)</h3>
                        <ButtonVar2 className='relative z-10 w-fit'>Get Help Now</ButtonVar2>
                        <Image src={pills} alt='bottle of pills image' className='absolute right-2 bottom-2 w-20 sm:w-24 md:w-28 h-auto object-contain pointer-events-none' />
                    </div>
                </div>




                <div className={`${styles.container2}`}>
                    <div className={`${styles.twinRow}`}>
                        <div className={`${styles.fluJab} paydens-shadow`}>
                            <h3 className='relative z-10'>get your <em>Flu Jab</em></h3>
                            <ButtonVar2 className='relative z-10 w-fit'>Book Now</ButtonVar2>
                            <Image src={hand} alt='hands image' className='absolute right-0 bottom-0 w-28 sm:w-32 md:w-36 h-auto object-contain pointer-events-none' />
                        </div>
                        <div className={`${styles.NHSpres} paydens-shadow`}>
                            <h3 className='relative z-10'>Manage my NHS <br />Prescriptions</h3>

                            <ButtonVar2 className='relative z-10 w-fit' href='/prescriptions' link={true} >Manage Prescriptions</ButtonVar2>
                            <Image src={papers} alt='papers image' className='absolute right-0 bottom-0 w-28 sm:w-32 md:w-36 h-auto object-contain rotate-[-10deg] pointer-events-none' />
                        </div>

                    </div>


                    <div className={`${styles.weightLoss} paydens-shadow`}>
                        <h3 className='relative z-10'>Begin Your <em>Weight Loss</em> <br /> plan</h3>
                        <ButtonVar2 className='relative z-10 w-fit'>Start Now</ButtonVar2>
                        <Image src={meter} alt='weight scale image' className='absolute right-0 bottom-0 w-44 sm:w-60 md:w-72 lg:w-80 max-w-[50%] h-auto object-contain pointer-events-none' />
                    </div>
                </div>




                <div className={`${styles.container3}`}>
                    <div className={`${styles.NHSservices} paydens-shadow`}>
                        <h3 className='relative z-10'>Access Free NHS Pharmacy Services</h3>
                        <ButtonVar2 className='relative z-10 w-fit'>Get Help Now</ButtonVar2>
                        <Image src={meds} alt='medicines image' className='absolute right-0 bottom-4 sm:bottom-8 w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain pointer-events-none' />
                    </div>
                    <div className={`${styles.shopHealth} paydens-shadow`}>
                        <h3 className='relative z-10'>Shop Health and <br /> Wellness <br />Essentials Online</h3>
                        {/* <ButtonVar2 className='w-fit' link={false}>Book Now</ButtonVar2> */}
                        <IconArrowTopRightCircle className='absolute right-6 bottom-6 w-10 h-10 sm:w-12 sm:h-12 group' />

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features