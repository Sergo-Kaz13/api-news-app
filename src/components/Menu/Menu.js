import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.css";

const Menu = () => {
  const activeStatus = ({ isActive }) => {
    return {
      color: isActive ? "rgba(0, 0, 0, .5)" : "rgb(0, 0, 0)",
      cursor: isActive ? "default" : "",
      opacity: isActive ? "100" : "",
    };
  };

  return (
    <nav className={styles.headerNav}>
      <ul className={styles.headerMenu}>
        <li>
          <NavLink to="/" style={activeStatus}>
            {/* General */}
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink to="entertaiment" style={activeStatus}>
            {/* Entertainment */}
            Розваги
          </NavLink>
        </li>
        <li>
          <NavLink to="business" style={activeStatus}>
            {/* Business */}
            Бізнес
          </NavLink>
        </li>
        <li>
          <NavLink to="health" style={activeStatus}>
            {/* Health */}
            Здоров'я
          </NavLink>
        </li>
        <li>
          <NavLink to="science" style={activeStatus}>
            {/* Science */}
            Наука
          </NavLink>
        </li>
        <li>
          <NavLink to="sports" style={activeStatus}>
            {/* Sports */}
            Спорт
          </NavLink>
        </li>
        <li>
          <NavLink to="technology" style={activeStatus}>
            {/* Technology */}
            Технології
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
