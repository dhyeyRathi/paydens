import React from 'react'
import styles from "./components.css/Letsconnect.module.css"
import IconFacebook from './Icon/IconFacebook'
import IconInstagram from './Icon/IconInstagram'
import IconTwitter from './Icon/IconTwitter'
import IconLinkedIn from './Icon/IconLinkedIn'

const LetsConnectSection = () => {
    return (
        <section className={`${styles.connectSection} !pb-20 animationPopUp`}>
            <div className={`${styles.textCont}`}>
                <h2>Let's Get In Touch</h2>
                <p>Stay connected with us online to keep up with our latest services, health tips, and offers. Follow us on social media and never miss an update from your local pharmacy.</p>
            </div>

            <div className={`${styles.socialCont}`}>
                <button aria-label="follow us on facebook"><IconFacebook className='group' /><span className="sr-only">facebook</span></button>
                <button aria-label="follow us on instagram"><IconInstagram className='group' /> <span className="sr-only">instagram</span></button>
                <button aria-label="follow us on twitter"><IconTwitter className='group' /><span className="sr-only">twitter</span></button>
                <button aria-label="follow us on linkedin"><IconLinkedIn className='group' /><span className="sr-only">linkedIn</span></button>



            </div>
        </section>
    )
}

export default LetsConnectSection