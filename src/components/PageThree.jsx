import React, { useLayoutEffect, useRef } from "react";
import styles from "./PageThree.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PageThree = ({ mainRef }) => {
  const canvasRef = useRef(null);
  const page3Ref = useRef(null);

  const initiateCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function files(index) {
      var data = `
      /images/frames00007.png
      /images/frames00010.png
      /images/frames00013.png
      /images/frames00016.png
      /images/frames00019.png
      /images/frames00022.png
      /images/frames00025.png
      /images/frames00028.png
      /images/frames00031.png
      /images/frames00034.png
      /images/frames00037.png
      /images/frames00040.png
      /images/frames00043.png
      /images/frames00046.png
      /images/frames00049.png
      /images/frames00052.png
      /images/frames00055.png
      /images/frames00058.png
      /images/frames00061.png
      /images/frames00064.png
      /images/frames00067.png
      /images/frames00070.png
      /images/frames00073.png
      /images/frames00076.png
      /images/frames00079.png
      /images/frames00082.png
      /images/frames00085.png
      /images/frames00088.png
      /images/frames00091.png
      /images/frames00094.png
      /images/frames00097.png
      /images/frames00100.png
      /images/frames00103.png
      /images/frames00106.png
      /images/frames00109.png
      /images/frames00112.png
      /images/frames00115.png
      /images/frames00118.png
      /images/frames00121.png
      /images/frames00124.png
      /images/frames00127.png
      /images/frames00130.png
      /images/frames00133.png
      /images/frames00136.png
      /images/frames00139.png
      /images/frames00142.png
      /images/frames00145.png
      /images/frames00148.png
      /images/frames00151.png
      /images/frames00154.png
      /images/frames00157.png
      /images/frames00160.png
      /images/frames00163.png
      /images/frames00166.png
      /images/frames00169.png
      /images/frames00172.png
      /images/frames00175.png
      /images/frames00178.png
      /images/frames00181.png
      /images/frames00184.png
      /images/frames00187.png
      /images/frames00190.png
      /images/frames00193.png
      /images/frames00196.png
      /images/frames00199.png
      /images/frames00202.png
     `;
      return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.5,
        trigger: page3Ref.current,
        //   set start end according to preference
        start: `top top`,
        end: `100% top`,
        scroller: mainRef.current,
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: page3Ref.current,
      pin: true,
      scroller: mainRef.current,

      start: `top top`,
      end: `100% top`,
    });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initiateCanvas();
  }, []);

  return (
    <div className={styles.page_three} ref={page3Ref}>
      <canvas className={styles.canvas} ref={canvasRef} />
    </div>
  );
};

export default PageThree;
