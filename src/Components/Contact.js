import React from 'react'
import styles from "./Stylesheets/Contact.module.css"
import call from "../Assets/bxs_phone-call.png"
import location from "../Assets/carbon_location-filled.png"
import mail from "../Assets/ic_sharp-email.png"
import discord from "../Assets/Vector (1).png"
import twitter from "../Assets/Group 1000001749.png"
import insta from "../Assets/insta.png"

function Contact() {
    return (
        <div className={styles.container} >
            <div className={styles.left}>
                <div className={styles.contents}>
                    <div className={styles.header}>
                        <h1>Contact Information</h1>
                        <p>Say Something To start a Live Chat</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.icon}><img src={call} alt="" /></div>
                        <p>+91 7516084201</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.icon}><img src={mail} alt="" /></div>

                        <p>someoneexample@gmail.com</p>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.icon}><img src={location} alt="" /></div>

                        <p>Bhaveshwar Maya, 7 Th Rajawadi Road, Rajawadi, Ghatkoper (east), Mumbai,Maharashtra</p>
                    </div>
                </div>
                <div className={styles.socials}>
                    <div className={styles.icon}><img src={twitter} alt="" /></div>
                    <div className={styles.icon}><img src={discord} alt="" /></div>
                    <div className={styles.icon}><img src={insta} alt="" /></div>
                </div>
                <div id={styles.circle1}></div>
                <div id={styles.circle2}></div>
            </div>
            <div className={styles.right}>
                <div className={styles.layout}>
                    <div className={styles.inputGrp}>
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputGrp}>
                        <label htmlFor="">Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.layout}>
                    <div className={styles.inputGrp}>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <div className={styles.inputGrp}>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" />
                    </div>
                </div>
                <div className={styles.layout}>
                    <div id={styles.messageSection} className={styles.inputGrp}>
                        <label htmlFor="">Message</label>
                        <textarea type="text" placeholder='Enter Your Message Here' />
                    </div>
                </div>
                <div className={styles.layout}>
                    <div></div>
                    <div className={styles.inputGrp}>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact
