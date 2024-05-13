import React from 'react'
import styles from "./Stylesheets/About.module.css"
import seoIcon from "../Assets/SEOIcon.png"
function About() {
    return (
        <div id='about' className={styles.container}>
            <div className={styles.hanger}>
                <hr />
                <h1>About Us</h1>
            </div>
            <div className={styles.cardHolder}>
                <div className={styles.card}>
                    <div className={styles.imageHeader}>
                        <img src={seoIcon} alt="" />

                    </div>
                    <div className={styles.content}>
                        <h1>Social Ads</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, sapiente.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imageHeader}>
                        <img src={seoIcon} alt="" />
                    </div>
                    <div className={styles.content}>
                        <h1>SaaS Marketing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, sapiente.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imageHeader}>
                        <img src={seoIcon} alt="" />

                    </div>
                    <div className={styles.content}>
                        <h1>Content Marketing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, sapiente.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imageHeader}>
                        <img src={seoIcon} alt="" />
                    </div>
                    <div className={styles.content}>
                        <h1>SEO</h1>
                        <h1>Social Ads</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, sapiente.</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.imageHeader}>
                        <img src={seoIcon} alt="" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.imageHeader}>
                            <img src={seoIcon} alt="" />
                        </div>
                        <div className={styles.content}>
                            <h1>SEO</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, sapiente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
