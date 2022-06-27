import React, { useState, useContext } from "react";
import classes from "./NewTodoForm.module.css";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import { AuthContext } from "../../../store/Context/AuthContext";

export default function NewTodoForm({ saveData }) {
  const [visible, setVisible] = useState(false);
  const { isLoggedIn, logoutHandler, role } = useContext(AuthContext);

  const openModal = () => {
    setVisible(true);
  };

  return (
    <>
      <div className={classes.newForm}>
        <div className={classes.userCard}>
          <i className="fa-solid fa-user"></i>
          {role}
        </div>
        <ul className={classes.navList}>
          <li className={classes.active}>
            <i className="fa-solid fa-bars-progress"></i>
            Todo List
          </li>
          <li>
            <i className="fa-solid fa-calendar-days"></i>
            Calendar
          </li>
          <li>
            <i className="fa-solid fa-chart-line"></i>
            Activity
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            Message
          </li>
          <li>
            <i className="fa-solid fa-diagram-project"></i>
            Projects
          </li>
          <li>
            <i className="fa-solid fa-gear"></i>
            Settings
          </li>
        </ul>
        {isLoggedIn && (
          <Button className={classes.logoutBtn} onClick={openModal}>
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </Button>
        )}
      </div>
      {visible && (
        <Modal
          setVisible={setVisible}
          clickHandler={logoutHandler}
          title="Logout?"
          message="Are you sure you want to log out?"
        />
      )}
    </>
  );
}
