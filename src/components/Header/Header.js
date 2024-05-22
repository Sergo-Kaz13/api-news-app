import React from "react";

import Logo from "../Logo/Logo";
import CurrentDate from "../CurrentDate/CurrentDate";
import Menu from "../Menu/Menu";
import searchBtn from "../../assets/images/search_button.svg";
import menuBtn from "../../assets/images/nav_toggler.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div>Select</div>
        <div>
          <Logo />
          <CurrentDate />
        </div>
        <div className={styles.navBlock}>
          <button className={styles.searchBtn}>
            <img src={searchBtn} alt="search_button" />
          </button>
          <button className={styles.menuBtn}>
            <img src={menuBtn} alt="menu" />
          </button>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default Header;
