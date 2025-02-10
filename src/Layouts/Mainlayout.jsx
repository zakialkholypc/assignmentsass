import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import styles from "./Mainlayout.module.css"; 

export default function Mainlayout() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}