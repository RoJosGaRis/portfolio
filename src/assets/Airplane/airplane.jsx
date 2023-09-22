import { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import styles from "./airplane.module.css";

const Airplane = () => {
  const closeAnimation = useRef(null);
  const openAnimation = useRef(null);
  const flyAnimation = useRef(null);

  var animDuration = 750;
  const [isClosed, setIsClosed] = useState(false);

  const startFlying = () => {
    flyAnimation.current = anime({
      targets: ".NoOutlineSvg",
      keyframes: [
        { translateY: -40 },
        { translateX: 250 },
        { translateY: 40 },
        { translateX: 0 },
        { translateY: 0 },
      ],
      duration: 4000,
      easing: "easeOutElastic(1, .8)",
      loop: true,
    });
  };

  const stopFlying = () => {
    flyAnimation.current.pause();
  };

  const closeOffAnimation = () => {
    console.log(isClosed);
    setIsClosed(true);
    closeAnimation.current = anime.timeline({
      // direction: "alternate",
      // loop: true,
      duration: animDuration,
      easing: "easeInOutSine",
    });
    closeAnimation.current.add({
      targets: ".NoOutlineSvg",
      rotate: {
        value: 90,
        duration: 0,
      },
    });
    closeAnimation.current.add({
      targets: ".OutlineSvg",
      rotate: {
        value: 90,
        duration: 0,
      },
    });
    // First Step
    closeAnimation.current.add({
      targets: ".NoOutline",
      d: [
        {
          value:
            "M 1892.5 10 L 1902.5 0 L 1912.5 10 L 3811 1887 L 3811 2255 L 3811 3931.5 L 3811 4911 L 0 4911 L 0 3583 L 0 2255 L 0 1887 L 1892.5 10 Z",
        },
        {
          value:
            "M 1892.5 10 L 1902.5 0 L 1912.5 10 L 3811 3931.5 L 3811 4446 L 3811 4679.5 L 3811 4911 L 0 4911 L 0 4679.5 L 0 4446 L 0 3931.5 L 1892.5 10 Z",
        },
        {
          value:
            "M 1892.5 10 L 1902.5 0 L 1912.5 10 L 1942.5 3931.5 L 1942.5 4446 L 1942.5 4679.5 L 1942.5 4911 L 1862.5 4911 L 1862.5 4679.5 L 1862.5 4446 L 1862.5 3931.5 L 1892.5 10 Z",
        },
        {
          value:
            "M 1892.5 10 L 1902.5 0 L 1912.5 10 L 3142.5 4515 L 3142.5 4726.5 L 3142.5 4815 L 3142.5 4911 L 662.5 4911 L 662.5 4815 L 662.5 4726.5 L 662.5 4515 L 1892.5 10 Z",
        },
      ],
    });
    closeAnimation.current.add(
      {
        targets: ".Outline",
        d: [
          {
            value:
              "M 1942.5 1223 L 1942.5 1251.03 L 1968.85 1260.6 L 3771 1915.03 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3399 L 40 1915 L 1836.19 1260.58 L 1862.5 1251 L 1862.5 1223 L 1892.5 50 L 1902.5 40 L 1912.5 50 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1965.45 3106.18 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3956.84 L 1839.59 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1892.5 50 L 1902.5 40 L 1912.5 50 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1942.5 3106.18 L 1942.5 3931.5 L 1942.5 4871 L 1862.5 4871 L 1862.5 3956.84 L 1862.5 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1892.5 50 L 1902.5 40 L 1912.5 50 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1942.5 3106.18 L 3142.5 4515 L 3142.5 4871 L 662.5 4871 L 662.5 4515 L 1862.5 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1892.5 50 L 1902.5 40 L 1912.5 50 L 1942.5 1223 Z",
          },
        ],
      },
      `-= ${animDuration}}`
    );
    closeAnimation.current.add({
      targets: ".NoOutlineSvg",
      scale: {
        value: 0.1,
        duration: 750,
      },
      rotate: {
        value: 180,
        duration: 750,
      },
    });
    closeAnimation.current.add(
      {
        targets: ".OutlineSvg",
        scale: {
          value: 0.1,
          duration: 750,
        },
        rotate: {
          value: 180,
          duration: 750,
        },
      },
      `-= 750`
    );
    closeAnimation.current.add({
      targets: ".NoOutlineSvg",
      translateY: {
        value: "2000px",
        duration: 750,
      },
    });
    closeAnimation.current.add(
      {
        targets: ".OutlineSvg",
        translateY: {
          value: "2000px",
          duration: 750,
        },
      },
      "-= 750"
    );
  };

  const openUpAnimation = () => {
    console.log("setOffAnmation");
    setIsClosed(false);
    animDuration = 750;
    openAnimation.current = anime.timeline({
      // direction: "alternate",
      // loop: true,
      duration: animDuration,
      easing: "easeInOutSine",
    });
    openAnimation.current.add({
      targets: ".NoOutlineSvg",
      translateY: {
        value: "000px",
        duration: 750,
      },
    });
    openAnimation.current.add(
      {
        targets: ".OutlineSvg",
        translateY: {
          value: "00px",
          duration: 750,
        },
      },
      "-= 750"
    );
    openAnimation.current.add({
      targets: ".OutlineSvg",
      scale: {
        value: 1,
        duration: 750,
      },
      rotate: {
        value: 90,
        duration: 750,
      },
    });
    openAnimation.current.add(
      {
        targets: ".NoOutlineSvg",
        scale: {
          value: 1,
          duration: 750,
        },
        rotate: {
          value: 90,
          duration: 750,
        },
      },
      `-= 750`
    );
    openAnimation.current.add({
      targets: ".NoOutline",
      d: [
        {
          value:
            "M 1892.5 10 L 1902.5 0 L 1912.5 10 L 1942.5 3931.5 L 1942.5 4446 L 1942.5 4679.5 L 1942.5 4911 L 1862.5 4911 L 1862.5 4679.5 L 1862.5 4446 L 1862.5 3931.5 L 1892.5 10 Z",
        },
        {
          value:
            "M 1892.5 10 L 1902.5 0 L 1912.5 10 L 3811 3931.5 L 3811 4446 L 3811 4679.5 L 3811 4911 L 0 4911 L 0 4679.5 L 0 4446 L 0 3931.5 L 1892.5 10 Z",
        },

        {
          value:
            "M 1892.5 10 L 1902.5 0 L 1912.5 10 L 3811 1887 L 3811 2255 L 3811 3931.5 L 3811 4911 L 0 4911 L 0 3583 L 0 2255 L 0 1887 L 1892.5 10 Z",
        },
        {
          value:
            "M 1892.5 0 L 1902.5 0 L 1912.5 0 L 3811 0 L 3811 1887 L 3811 3931.5 L 3811 4911 L 0 4911 L 0 3659 L 0 2407 L 0 0 L 1892.5 0 Z",
        },
      ],
    });
    openAnimation.current.add(
      {
        targets: ".Outline",
        d: [
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1942.5 3106.18 L 1942.5 3931.5 L 1942.5 4871 L 1862.5 4871 L 1862.5 3956.84 L 1862.5 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1892.5 50 L 1902.5 40 L 1912.5 50 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1965.45 3106.18 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3956.84 L 1839.59 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1892.5 50 L 1902.5 40 L 1912.5 50 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 1251.03 L 1968.85 1260.6 L 3771 1915.03 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3399 L 40 1915 L 1836.19 1260.58 L 1862.5 1251 L 1862.5 1223 L 1892.5 50 L 1902.5 40 L 1912.5 50 L 1942.5 1223 Z",
          },
          {
            value:
              "M 3771 40 L 3771 40 L 3771 40 L 3771 1915.03 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3399 L 40 1915 L 40 40 L 40 40 L 40 40 L 1892.5 40 L 1902.5 40 L 1912.5 40 L 3771 40 Z",
          },
        ],
      },
      `-= ${animDuration}}`
    );
  };

  return (
    <div className={styles.container}>
      <svg
        className={`${styles.paperNoOutlineSVG} NoOutlineSvg`}
        viewBox="0 0 3788 4911"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // onClick={isClosed ? openUpAnimation : closeOffAnimation}
      >
        <path
          className={`${styles.paper} NoOutline`}
          d="M 1892.5 0 L 1902.5 0 L 1912.5 0 L 3811 0 L 3811 1887 L 3811 3931.5 L 3811 4911 L 0 4911 L 0 3659 L 0 2407 L 0 0 L 1892.5 0 Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="80"
        />
      </svg>
      <svg
        className={`${styles.paperOutlineSVG} OutlineSvg`}
        viewBox="0 0 3788 4911"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={isClosed ? openUpAnimation : closeOffAnimation}
      >
        <path
          className={`${styles.paper} Outline`}
          d="M 3771 40 L 3771 40 L 3771 40 L 3771 1915.03 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3399 L 40 1915 L 40 40 L 40 40 L 40 40 L 1892.5 40 L 1902.5 40 L 1912.5 40 L 3771 40 Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="80"
        />
      </svg>
    </div>
  );
};

export default Airplane;
