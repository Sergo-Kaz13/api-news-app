import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <h1>
      <Link to="/" className={styles.logoLink}>
        <img className={styles.logoImg} src={logo} alt="timenewsbd.com" />
      </Link>
    </h1>
  );
};

export default Logo;
