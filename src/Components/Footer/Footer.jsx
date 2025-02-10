import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../images/img1.png";
import style from "./Footer.module.css"; 

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.flex}>
          <NavLink
            to="#"
            className={style.logo}
          >
            <img
              src={img1}
              alt="Flowbite Logo"
            />
            <span className={style.title}>
              Recipe
            </span>
          </NavLink>
          <span className={style.route}>Route</span>
        </div>
        <hr />
        <span className={style.footerText}>
          © 2025{" "}
          <NavLink
            to="https://www.facebook.com/share/15wiUjNLx4/"
          >
            Zaki Alkholy™
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}