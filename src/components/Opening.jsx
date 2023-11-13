import React from "react";
import styles from "./Opening.module.css";
import { AiOutlineMenu } from "react-icons/ai";

const Opening = () => {
  return (
    // <div className={styles.opening}>
    <div className={styles.opening} data-scroll data-scroll-speed="-0.5"> 
      <nav className={styles.nav}>
        <p className={styles.logo}>LOGO</p>
        <div className={styles.right_nav}>
          <div className={styles.nav_button}>Book a Demo</div>
          <div className={styles.nav_button}>
            <AiOutlineMenu />
          </div>
        </div>
      </nav>
      <video
        className={styles.video}
        src="https://thisismagma.com/wp-content/themes/magma/assets/home/hero/1.mp4?2"
        autoPlay
        loop
        muted
      ></video>
      <div className={styles.bottom}>
        <h1 className={styles.heading}>
          Experience Real <br /> Estate Agility{" "}
        </h1>
        <div className={styles.details}>
          <p className={styles.text}>
            Create a Digital Twin Token (DTT®) of your existing building and
            release the potential of Web3.
          </p>
          <div className={styles.button}>Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
