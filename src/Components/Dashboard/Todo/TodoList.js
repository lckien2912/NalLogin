import React from "react";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";
// import { Pagination } from "antd";

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
      {/* <Pagination
        size="small"
        defaultCurrent={2}
        total={data.length}
        pageSize={2}
      /> */}
    </>
  );
}

export default TodoList;
