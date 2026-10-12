import styles from "./homepage.css/treatments.module.css"
import { ArrowButton, Button } from '../ui/Button'
import Link from 'next/link';
import IconChevronRight from '../Icon/IconChevronRight';
import Heading, { HeadingHighlight } from '../ui/Heading';

const Treatments = () => {

    const cardItem = [
        {
            id: 1,
            title: "Asthma",
            items: [
                "Advair",
                "Xopenex",
                "Fluticasone + Salmeterol",
                "Levalbuterol",
                "",
            ],
        },
        {
            id: 2,
            title: "Stop Smoking",
            items: [
                "Bupropion SR",
                "Chantix",
                "Varenicline",
                "Varenicline",
                "",
            ],
        },
        {
            id: 3,
            title: "HRT",
            items: [
                "Premetrium",
                "Xopenex",
                "Fluticasone + Salmeterol",
                "Levalbuterol",
                "",
            ],
        },
    ];
    return (
        <section className={`${styles.treatmentSection} animationPopUp`}>
            <div className='flex w-full justify-between items-baseline gap-[20px]'>
                <Heading>
                    Care and <HeadingHighlight>Treatments </HeadingHighlight>You Can Trust
                </Heading>
                <ArrowButton className='hidden md:flex' />
            </div>
            <div className={`${styles.cardsContainer}`}>
                {
                    cardItem.map((item, ind) => (
                        <div key={item.id} className={`${styles.card}`}>
                            <h3>{item.title}</h3>
                            {
                                item.items.map((e, index: number) => (
                                    <button aria-label={e + index} className={`${styles.cardItem}`} key={index}>
                                        <span> {e}</span>
                                        {e && <IconChevronRight className="text-[#444444]" />}
                                        {index === item.items.length - 1 && <span className="sr-only">blank button</span>}
                                    </button>
                                ))
                            }

                            <Link aria-label="see more button" scroll={false} href={`/${ind}`}>See More</Link>
                        </div>))
                }
            </div>

            <Button className='text-sm sm:text-base md:text-lg lg:text-xl !self-center' href={'/all-conditions'} link={true}>View All Treatments</Button>



        </section>
    )
}

export default Treatments