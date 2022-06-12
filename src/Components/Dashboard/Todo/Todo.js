import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import classes from "./Todo.module.css";

const todoData = [
  {
    id: (Math.random() * 100000).toFixed(0),
    title: "New Todo 1",
    date: new Date("February 1, 2022 01:15:00"),
    description: "This is Todo Item 1",
  },
  {
    id: (Math.random() * 100000).toFixed(0),
    title: "New Todo 2",
    date: new Date("June 3, 2022 21:15:00"),
    description: "This is Todo Item 2",
  },
  {
    id: (Math.random() * 100000).toFixed(0),
    title: "New Todo 3",
    date: new Date("June 28, 2022 11:15:00"),
    description: "This is Todo Item 3",
  },
];

function Todo() {
  const [newData, setNewData] = useState(todoData);

  const deleteItem = (id) => {
    setNewData((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };

  const saveData = (data) => {
    setNewData((prevData) => [data, ...prevData]);
  };

  return (
    <div className={classes.todo}>
      <NewTodoForm saveData={saveData}></NewTodoForm>
      <TodoList data={newData} deleteItem={deleteItem}></TodoList>
    </div>
  );
}

export default Todo;
