import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import anime from "animejs/lib/anime.es.js";

import Airplane from "./assets/Airplane/airplane";

const App = () => {
  return (
    <div className={styles.container}>
      <Airplane />
    </div>
  );
};

export default App;
