import React, { useRef, useState } from "react";
import styles from "./Stylesheets/Navbar.module.css";

const Hamburger = () => {
  const [show, setShow] = useState(false);
  const screenRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    if (show) {
      buttonRef.current.classList.add(styles.burgerButtonActive);
      screenRef.current.classList.add(styles.screenActive);
    } else {
      buttonRef.current.classList.remove(styles.burgerButtonActive);
      screenRef.current.classList.remove(styles.screenActive);
    }
    setShow(!show);
  };

  return (
    <>
      <div className={styles.burgerContainer}>
        <button
          ref={buttonRef}
          onClick={handleClick}
          className={styles.burgerButton}
        >
          <hr />
          <hr />
          <hr />
        </button>
      </div>
      <div ref={screenRef} className={styles.screen}>
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Contact Us</a>
        <a href="/">About</a>
      </div>
    </>
  );
};

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navList}>
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Contact Us</a>
        <a href="/">About</a>
        <img src="" alt="" />
      </div>
      <Hamburger />
    </div>
  );
}

export default Navbar;
