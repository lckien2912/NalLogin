import React, { useState } from "react";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { Pagination } from "antd";

function TodoList({ data, deleteItem }) {
  const [current, setCurrent] = useState(1);
  const pageSize = 6;

  const onChange = (page) => {
    setCurrent(page);
  };

  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  const newData = data.slice(start, end);

  return (
    <div className={classes.todo}>
      <h1 className={classes.heading}>Todo List </h1>
      <div className={classes.todoContainer}>
        <ul className={classes.todoList}>
          {newData.map(({ id, title, description, date }) => (
            <TodoItem
              id={id}
              key={id}
              title={title}
              description={description}
              date={new Date(date)}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
        <div className={classes.pagination}>
          <Pagination
            current={current}
            defaultPageSize={pageSize}
            onChange={onChange}
            total={data.length}
            wrapClassName={`${classes.paginationItem}`}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
