import React from "react";
import styles from "./PageFive.module.css";
import { BsArrowUpRight } from "react-icons/bs";

function PageFive() {
  return (
    <div className={styles.page_five}>
      <h1 className={styles.title}>
        Become an <br /> Early Adopter
      </h1>
      <div className={styles.button}>Book a Demo</div>
      <div className={styles.link}>
        <p>Instagram</p>
        <BsArrowUpRight className={styles.icon} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.link}>
        <p>Twitter</p>
        <BsArrowUpRight className={styles.icon} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.link}>
        <p>LinkedIn</p>
        <BsArrowUpRight className={styles.icon} />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}

export default PageFive;
