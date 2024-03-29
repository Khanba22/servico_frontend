import React from 'react'
import styles from "./Stylesheets/Services.module.css"
function Services() {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className={styles.container}>
            <div className={styles.cardHolder}>
                <div id={styles.first} className={styles.cardContainer}>
                    <h1>Explore Our Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit dicta ullam a temporibus placeat.</p>
                </div>
                {
                    arr.map(el => {
                        return <>
                            <div key={el} className={styles.cardContainer} >
                                <div className={styles.card}>
                                    <div className={styles.icon}><img src="/" alt="Image" /></div>
                                    <button>Order</button>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
            <button className={styles.seeMore}>See More</button>
        </div>
    )
}

export default Services
