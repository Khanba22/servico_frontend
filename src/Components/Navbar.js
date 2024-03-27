import React from 'react'
import styles from "./Stylesheets/Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.navList}>
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Contact Us</a>
            <a href="">About</a>
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default Navbar
