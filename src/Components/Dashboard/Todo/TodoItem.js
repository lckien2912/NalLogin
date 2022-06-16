import React, { useContext, useState } from "react";
import classes from "./TodoItem.module.css";
import TodoDate from "./TodoDate";
import Modal from "../../UI/Modal/Modal";
import EditModal from "../../UI/Modal/EditModal";
import { AuthContext } from "../../../store/Context/AuthContext";

function TodoItem({ date, description, title, id, deleteItem }) {
  const { role } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  const deleteHandler = () => {
    deleteItem(id);
  };

  const openModal = () => {
    setVisible(true);
  };

  const openEditModal = () => {
    setEditVisible(true);
  };

  return (
    <>
      <li className={classes.todoItem}>
        <TodoDate date={date} />
        <div className={classes.detail}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {role === "Admin" && (
          <div className={classes.action}>
            <button onClick={openEditModal}>
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button onClick={openModal}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        )}
      </li>
      <Modal
        visible={visible}
        setVisible={setVisible}
        clickHandler={deleteHandler}
        title="Delete Item?"
        message="Are you sure you want to delete this item?"
      ></Modal>
      <EditModal
        date={date}
        title={title}
        description={description}
        id={id}
        visible={editVisible}
        setVisible={setEditVisible}
      />
    </>
  );
}

export default TodoItem;
