import React from "react";
import styles from "./Hero.module.css";
import ContainerCard from "../ContainerCard/ContainerCard";

const Hero = () => {
  return (
    <ContainerCard className={styles.hero_container}>
      <p>Hello world!</p>
    </ContainerCard>
  );
};

export default Hero;
