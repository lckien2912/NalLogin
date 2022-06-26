import React, { useState, useContext } from "react";
import classes from "./NewTodoForm.module.css";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import CreateModal from "../../UI/Modal/CreateModal";
import { AuthContext } from "../../../store/Context/AuthContext";

export default function NewTodoForm({ saveData }) {
  const [visible, setVisible] = useState(false);
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const { isLoggedIn, logoutHandler, role } = useContext(AuthContext);

  const openModal = () => {
    setVisible(true);
  };

  const openCreateModal = () => {
    setVisibleCreateModal(true);
  };

  return (
    <>
      <div className={classes.newForm}>
        <div className={classes.userCard}>
          <i class="fa-solid fa-user"></i>
          {role}
        </div>
        <ul className={classes.navList}>
          <li>
            <i className="fa-solid fa-bars-progress"></i>
            Todo List
          </li>
          <li>
            <i class="fa-solid fa-calendar-days"></i>
            Calendar
          </li>
          <li>
            <i class="fa-solid fa-chart-line"></i>
            Activity
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            Message
          </li>
          <li>
            <i class="fa-solid fa-diagram-project"></i>
            Projects
          </li>
          <li>
            <i class="fa-solid fa-gear"></i>
            Settings
          </li>
          <Button onClick={openCreateModal}>
            <i class="fa-solid fa-plus"></i>
            Add
          </Button>
        </ul>
        {isLoggedIn && (
          <Button className={classes.logoutBtn} onClick={openModal}>
            <i class="fa-solid fa-right-from-bracket"></i>
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
      {visibleCreateModal && (
        <CreateModal setVisible={setVisibleCreateModal} saveData={saveData} />
      )}
    </>
  );
}
