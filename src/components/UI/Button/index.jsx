import React from "react";
import styles from "./Button.module.css";

const Button = ({ position, text, onClick }) => {
  return (
    <button className={styles.btn + " " + styles[position]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
