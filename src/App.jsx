import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import anime from "animejs/lib/anime.es.js";

const App = () => {
  const animation = useRef(null);

  const setOffAnmation = () => {
    console.log("setOffAnmation");
    animation.current = anime.timeline({
      // direction: "alternate",
      // loop: true,
      duration: 4000,
      easing: "easeInOutSine",
    });
    // First Step
    animation.current.add({
      targets: ".paperNoOutline",
      d: [
        {
          value:
            "M 1862.5 0 L 1942.5 0 L 3811 1887 L 3811 2255 L 3811 3931.5 L 3811 4911 L 0 4911 L 0 3583 L 0 2255 L 0 1887 L 1862.5 0 Z",
        },
        {
          value:
            "M 1862.5 0 L 1942.5 0 L 3811 3931.5 L 3811 4446 L 3811 4679.5 L 3811 4911 L 0 4911 L 0 4679.5 L 0 4446 L 0 3931.5 L 1862.5 0 Z",
        },
        {
          value:
            "M 1862.5 0 L 1942.5 0 L 1942.5 3931.5 L 1942.5 4446 L 1942.5 4679.5 L 1942.5 4911 L 1862.5 4911 L 1862.5 4679.5 L 1862.5 4446 L 1862.5 3931.5 L 1862.5 0 Z",
        },
        {
          value:
            "M 1862.5 0 L 1942.5 0 L 3142.5 4515 L 3142.5 4726.5 L 3142.5 4815 L 3142.5 4911 L 662.5 4911 L 662.5 4815 L 662.5 4726.5 L 662.5 4515 L 1862.5 0 Z",
        },
      ],
    });
    animation.current.add(
      {
        targets: ".paperOutline",
        d: [
          {
            value:
              "M 1942.5 1223 L 1942.5 1251.03 L 1968.85 1260.6 L 3771 1915.03 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3399 L 40 1915 L 1836.19 1260.58 L 1862.5 1251 L 1862.5 1223 L 1862.5 40 L 1942.5 40 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1965.45 3106.18 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3956.84 L 1839.59 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1862.5 40 L 1942.5 40 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1942.5 3106.18 L 1942.5 3931.5 L 1942.5 4871 L 1862.5 4871 L 1862.5 3956.84 L 1862.5 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1862.5 40 L 1942.5 40 L 1942.5 1223 Z",
          },
          {
            value:
              "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1942.5 3106.18 L 3142.5 4515 L 3142.5 4871 L 662.5 4871 L 662.5 4515 L 1862.5 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1862.5 40 L 1942.5 40 L 1942.5 1223 Z",
          },
        ],
      },
      "-= 4000"
    );
    // Second Step
    // animation.current.add({
    //   targets: ".paperNoOutline",
    //   d: [
    //     {
    //       value:
    //         "M 1862.5 0 L 1942.5 0 L 3811 3931.5 L 3811 4446 L 3811 4679.5 L 3811 4911 L 0 4911 L 0 4679.5 L 0 4446 L 0 3931.5 L 1862.5 0 Z",
    //     },
    //   ],
    // });
    // animation.current.add({
    //   targets: ".paperOutline",
    //   d: [
    //     {
    //       value:
    //         "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1965.45 3106.18 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3956.84 L 1839.59 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1862.5 40 L 1942.5 40 L 1942.5 1223 Z",
    //     },
    //   ],
    // });
    // // Third Step
    // animation.current.add({
    //   targets: ".paperNoOutline",
    //   d: [
    //     {
    //       value:
    //         "M 0.5 0 L 80.5 0 L 80.5 3931.5 L 80.5 4446 L 80.5 4679.5 L 80.5 4911 L 0.5 4911 L 0.5 4679.5 L 0.5 4446 L 0.5 3931.5 L 0.5 0 Z",
    //     },
    //   ],
    // });
    // animation.current.add({
    //   targets: ".paperOutline",
    //   d: [
    //     {
    //       value:
    //         "M 1942.5 1223 L 1942.5 3070 L 1942.5 3095.37 L 1942.5 3106.18 L 1942.5 3931.5 L 1942.5 4871 L 1862.5 4871 L 1862.5 3956.84 L 1862.5 3106.16 L 1862.5 3095.34 L 1862.5 3070 L 1862.5 1223 L 1862.5 40 L 1942.5 40 L 1942.5 1223 Z",
    //     },
    //   ],
    // });
    // // Fourth Step
    // animation.current.add({
    //   targets: ".paperNoOutline",
    //   d: [
    //     {
    //       value:
    //         "M 1200 0 L 1280 0 L 2480 4515 L 2480 4726.5 L 2480 4815 L 2480 4911 L 0 4911 L 0 4815 L 0 4726.5 L 0 4515 L 1200 0 Z",
    //     },
    //   ],
    // });
  };

  return (
    <>
      <svg
        className={styles.paperNoOutlineSVG}
        width="200"
        height="400"
        viewBox="0 0 3788 4911"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={setOffAnmation}
      >
        <path
          className="paperNoOutline"
          d="M 1862.5 0 L 1942.5 0 L 3811 0 L 3811 1887 L 3811 3931.5 L 3811 4911 L 0 4911 L 0 3659 L 0 2407 L 0 0 L 1862.5 0 Z"
          fill="#D9D9D9"
        />
      </svg>
      <svg
        className={styles.paperOutlineSVG}
        width="200"
        height="400"
        viewBox="0 0 3788 4911"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={setOffAnmation}
      >
        <path
          className="paperOutline"
          d="M 3771 40 L 3771 40 L 3771 40 L 3771 1915.03 L 3771 3931.5 L 3771 4871 L 40 4871 L 40 3399 L 40 1915 L 40 40 L 40 40 L 40 40 L 1862.5 40 L 1942.5 40 L 3771 40 Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="80"
        />
      </svg>
      {/*
      <svg
        width="161"
        height="4911"
        viewBox="0 0 161 4911"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M120.5 4871H40.5V3931.5V3070V1223V40H120.5V1223V3070V3931.5V4871Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="80"
        />
      </svg>
      */}
    </>
  );
};

export default App;
