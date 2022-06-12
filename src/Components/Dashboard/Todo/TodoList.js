import React from "react";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";

function TodoList({ data, deleteItem }) {
  return (
    <>
      <h1 style={{ marginTop: "1.5rem" }}>Todo List </h1>
      <ul className={classes.todoList}>
        {data.map(({ id, title, description, date }) => {
          return (
            <TodoItem
              id={id}
              key={id}
              title={title}
              description={description}
              date={date}
              deleteItem={deleteItem}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
