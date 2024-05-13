import React from 'react';
import styles from "./Stylesheets/Footer.module.css"
import logo from "../Assets/logo.png"
import discord from "../Assets/Vector (1).png"
import twitter from "../Assets/Group 1000001749.png"
import insta from "../Assets/insta.png"


function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.column}>
                    <p>Product</p>
                    <h6>Employee Database</h6>
                    <h6>Employee Database</h6>
                    <h6>Employee Database</h6>
                </div>
                <div className={styles.column}>
                    <p>Information</p>
                    <h6>FAQ</h6>
                    <h6>Blog</h6>
                    <h6>Support</h6>
                </div>
                <div className={styles.column}>
                    <p>Company</p>
                    <h6>About Us</h6>
                    <h6>Careers</h6>
                    <h6>Contact Us</h6>
                </div>
                <div className={styles.column}>
                    <div className={styles.inputHolder}>
                        <label htmlFor="">Subscribe</label>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder='Enter your Email' />
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.footer}>
                <div className={styles.column}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.column}>
                    <div className={styles.holder}>
                        <h6>Temp</h6>
                        <h6>temp</h6>
                        <h6>temp</h6>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.holder}>
                        <div className={styles.icon}><img src={twitter} alt="" /></div>
                        <div className={styles.icon}><img src={discord} alt="" /></div>
                        <div className={styles.icon}><img src={insta} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer