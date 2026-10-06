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
                <button aria-label="button"><IconFacebook className='group' /><p className='hidden'>facebook</p></button>
                <button aria-label="button"><IconInstagram className='group' /> <p className='hidden'>instagram</p></button>
                <button aria-label="button"><IconTwitter className='group' /><p className='hidden'>twitter</p></button>
                <button aria-label="button"><IconLinkedIn className='group' /><p className='hidden'>linkedIn</p></button>



            </div>
        </section>
    )
}

export default LetsConnectSection