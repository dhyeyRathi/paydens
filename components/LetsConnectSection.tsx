import React from 'react'
import styles from "./components.css/Letsconnect.module.css"
import IconFacebook from './Icon/IconFacebook'
import IconInstagram from './Icon/IconInstagram'
import IconTwitter from './Icon/IconTwitter'
import IconLinkedIn from './Icon/IconLinkedIn'

const LetsConnectSection = () => {
    return (
        <section className={`${styles.connectSection} !pb-20`}>
            <div className={`${styles.textCont}`}>
                <h1>Let's Get In Touch</h1>
                <p>Stay connected with us online to keep up with our latest services, health tips, and offers. Follow us on social media and never miss an update from your local pharmacy.</p>
            </div>

            <div className={`${styles.socialCont}`}>
                <IconFacebook className='group' />
                <IconInstagram className='group' />
                <IconTwitter className='group' />
                <IconLinkedIn className='group' />
            </div>
        </section>
    )
}

export default LetsConnectSection