import React from "react";
import classes from "./TodoItem.module.css";
import TodoDate from "./TodoDate";

function TodoItem({ date, description, title, id, deleteItem }) {
  const deleteHandler = () => {
    deleteItem(id);
  };

  return (
    <li className={classes.todoItem}>
      <TodoDate date={date} />
      <div className={classes.detail}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={classes.action}>
        <button>
          <i className="fa-solid fa-pencil"></i>
        </button>
        <button onClick={deleteHandler}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
