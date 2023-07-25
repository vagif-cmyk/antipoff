import React from "react";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={styles.root}>
      <div className="container">
        {children}
      </div>
    </header>
  );
};

export default Header;
