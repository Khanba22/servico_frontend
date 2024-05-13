import React, { useRef, useState } from "react";
import styles from "./Stylesheets/Navbar.module.css";

const SliderWindow = (props) => {
  return (
    <>
      <div
        style={props.active ? { transform: "translateX(-200px)" } : {}}
        className={styles.sliderContainer}
      >
        <p className={styles.sliderButtons}>temp</p>
        <p className={styles.sliderButtons}>temp</p>
        <p className={styles.sliderButtons}>temp</p>
        <p className={styles.sliderButtons}>temp</p>
        <p className={styles.sliderButtons}>temp</p>
      </div>
    </>
  );
};

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
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contactUs">Contact Us</a>
        <a href="#about">About</a>
      </div>
    </>
  );
};

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.navList}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contactUs">Contact Us</a>
        <a href="#about">About</a>
        <img
          style={{ zIndex: "10" }}
          onClick={() => {
            setActive(!active);
          }}
          src=""
          alt=""
        />
      </div>
      <SliderWindow active={active} />
      <Hamburger />
    </div>
  );
}

export default Navbar;
