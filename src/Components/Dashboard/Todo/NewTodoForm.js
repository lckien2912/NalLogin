import React, { useState, useContext } from "react";
import classes from "./NewTodoForm.module.css";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import CreateModal from "../../UI/Modal/CreateModal";
import { AuthContext } from "../../../store/Context/AuthContext";

export default function NewTodoForm({ saveData }) {
  const [visible, setVisible] = useState(false);
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);

  const openModal = () => {
    setVisible(true);
  };

  const openCreateModal = () => {
    setVisibleCreateModal(true);
  };

  return (
    <>
      <div className={classes.newForm}>
        <Button className={classes.logoutBtn} onClick={openCreateModal}>
        <i class="fa-solid fa-plus"></i>
        </Button>
        {isLoggedIn && (
          <Button className={classes.logoutBtn} onClick={openModal}>
            <i class="fa-solid fa-right-from-bracket"></i>
          </Button>
        )}
      </div>
      {visible && <Modal
        setVisible={setVisible}
        clickHandler={logoutHandler}
        title="Logout?"
        message="Are you sure you want to log out?"
      />}
      {visibleCreateModal && <CreateModal
        setVisible={setVisibleCreateModal}
        saveData={saveData}
      />}
    </>
  );
}
