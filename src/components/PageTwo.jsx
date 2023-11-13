import React from "react";
import styles from "./PageTwo.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const IndividualCharacters = ({char}) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "bottom bottom-=100",
        end: "bottom bottom-=250",
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
  )
}

const PageTwo = () => {

  const texth1 =
    "The Digital Twin Token is a unique digital asset backed by property data. Magma combines your building’s components and systems essential information into a DTT®.";

  const textArray = texth1.split("");

  return (
    <div className={styles.page_two}>
      <p className={styles.small_head}>
        CERTIFY YOUR BUILDING AS A DIGITAL TWIN TOKEN (DTT®)
      </p>
      <h1 className={styles.big_para}>
        {textArray.map((char, index) => (
          <IndividualCharacters key={index} char={char} />
        ))}
      </h1>
    </div>
  );
};

export default PageTwo;
