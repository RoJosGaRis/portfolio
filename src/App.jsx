import { useState, useRef, useEffect } from "react";
import styles from "./App.module.css";
import anime from "animejs/lib/anime.es.js";

import Airplane from "./components/Airplane/airplane";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default App;
