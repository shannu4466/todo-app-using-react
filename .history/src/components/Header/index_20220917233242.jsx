import React from "react";
import todologo from "../../assets/todologo.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo} alt="" />

      <form >
        <input type="text" placeholder />
      </form>
    </header>
  );
}
