import React from "react";
import todologo from "../../assets/todologo.svg";
import {AiOutlinePlusCircle} from "react-icons/ai"
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo} alt="" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder="add new task" />
        <button>Create Task
          <AiOutlinePlusCircle Sizew={/>
        </button>
      </form>
    </header>
  );
}
