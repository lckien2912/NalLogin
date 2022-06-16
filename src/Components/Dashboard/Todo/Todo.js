import React from "react";
import TodoList from "./TodoList";
import classes from "./Todo.module.css";

function Todo({ newData, deleteItem }) {
  return (
    <div className={classes.todo}>
      <TodoList data={newData} deleteItem={deleteItem}></TodoList>
    </div>
  );
}

export default Todo;
