import React from "react";
import styles from "./PageFour.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const IndividualCharacters = ({ char }) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "bottom+=1000% bottom-=100",
        end: "bottom+=1000% bottom-=250",
        scrub: 0.5,
        // markers: true,
      },
      duration: 0.5,
      stagger: 0.2,
      opacity: 1,
      transform: "translateY(0)",
    });
  }, []);
  return (
    <span className={styles.characterSpan} ref={text}>
      {char}
    </span>
  );
};

const PageFour = () => {
  const texth1 =
    "Users connect directly to the DTT® without any intermediaries. As Stakeholder, they have the power to upload and verify information that enriches the Digital Twin Token. A Stakeholder's ability to access validated-data to perform tasks depends on their specific role.";

  const textArray = texth1.split("");

  return (
    <div className={styles.page_four}>
      <p className={styles.small_head}>
        CONNECT THE BUILDING'S TWIN TO YOUR STAKEHOLDERS
      </p>
      <h1 className={styles.big_para}>
        {textArray.map((char, index) => (
          <IndividualCharacters key={index} char={char} />
        ))}
      </h1>
    </div>
  );
};

export default PageFour;
