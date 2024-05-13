import React from 'react'
import styles from "./Stylesheets/Hero.module.css"
import logo from "../Assets/logo.png"

function Hero() {
    return (
        <div id='home' className={styles.container}>
            <div className={styles.content}>
                <img src={logo} alt="" />
                <div className={styles.textContent}>
                    <div className={styles.header}>
                        <h1>All Services,</h1>
                        <h1>Every Need.</h1>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tenetur? Nulla illo nobis pariatur officia perferendis! Asperiores tenetur, voluptatum velit, vero quis voluptate, quae dolor accusantium aperiam hic quo fuga quidem dignissimos perferendis pariatur ex praesentium libero? Dolores, temporibus eligendi.</p>
                </div>
                <button className={styles.seeMore}>Help Me</button>
            </div>
        </div>
    )
}

export default Hero
