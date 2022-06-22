import React, { useState, useEffect } from "react";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { Pagination } from "antd";
import Search from "../../UI/Search/Search";

function TodoList({ data, deleteItem, editData }) {
  const [current, setCurrent] = useState(1);
  const [searchData, setSearchData] = useState(data);

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const onChange = (page) => {
    setCurrent(page);
  };

  const takeSearchText = (text) => {
    setCurrent(1)
    const newData =
      text.length === 0
        ? [...data]
        : data.filter(
            (item) =>
              item.title.includes(text) || item.description.includes(text)
          );
    setSearchData(newData);
  };

  const pageSize = 6;
  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  const newData = searchData.slice(start, end);

  return (
    <div className={classes.todo}>
      <h1 className={classes.heading}>Todo List </h1>
      <Search takeSearchText={takeSearchText} />
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
              editData={editData}
              setCurrent={setCurrent}
            />
          ))}
        </ul>
        <div className={classes.pagination}>
          <Pagination
            current={current}
            defaultPageSize={pageSize}
            onChange={onChange}
            total={searchData.length}
            wrapClassName={`${classes.paginationItem}`}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
