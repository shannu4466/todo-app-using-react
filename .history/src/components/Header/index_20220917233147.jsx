import React from 'react';
import todologo from "../../"
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo} alt="" />
    </header>
    
  )
}
