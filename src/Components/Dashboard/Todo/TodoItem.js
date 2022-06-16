import React, { useContext, useState } from "react";
import classes from "./TodoItem.module.css";
import TodoDate from "./TodoDate";
import Modal from "../../UI/Modal/Modal";
import { AuthContext } from "../../../store/Context/AuthContext";

function TodoItem({ date, description, title, id, deleteItem }) {
  const { role } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const deleteHandler = () => {
    deleteItem(id);
    // setVisible(true);
  };

  const openModal = () => {
    setVisible(true);
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
            <button>
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
    </>
  );
}

export default TodoItem;
