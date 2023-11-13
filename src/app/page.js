"use client";

import Opening from "@/components/Opening";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import PageTwo from "@/components/PageTwo";
import PageThree from "@/components/PageThree";
import PageFour from "@/components/PageFour";
import PageFive from "@/components/PageFive";

export default function Home() {
  const mainRef = useRef(null);

  const callLMS = async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    const locomotiveScroll = new LocomotiveScroll();
  };

  useEffect(() => {
    callLMS();
  }, []);
  return (
    <main className={styles.main} ref={mainRef}>
      <Opening />
      <PageTwo />
      <PageThree mainRef={mainRef} />
      <PageFour />
      <PageFive />
    </main>
  );
}
