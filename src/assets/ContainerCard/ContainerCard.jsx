import React from "react";
import styles from "./ContainerCard.module.css";

const ContainerCard = (props) => {
  <div className={`${styles.container_card} ${props.className}`}>
    {props.children}
  </div>;
};

export default ContainerCard;
