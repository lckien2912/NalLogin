import React, { useState, useEffect } from "react";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { Pagination } from "antd";
import Search from "../../UI/Search/Search";
import Button from "../../UI/Button/Button";
import CreateModal from "../../UI/Modal/CreateModal";

function TodoList({ saveData, data, deleteItem, editData }) {
  const [current, setCurrent] = useState(1);
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const [searchData, setSearchData] = useState(data);

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const onChange = (page) => {
    setCurrent(page);
  };

  const openCreateModal = () => {
    setVisibleCreateModal(true);
  };

  const takeSearchText = (text) => {
    setCurrent(1);
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
    <>
      <div className={classes.todo}>
        <div className={classes.todoTop}>
          <h1 className={classes.heading}>
            <i
              className="fa-solid fa-list-check"
              style={{ marginRight: "12px" }}
            ></i>
            Todo List
          </h1>
          <div className={classes.todoAction}>
            <Button onClick={openCreateModal} className={classes.addBtn}>
              <i className="fa-solid fa-plus"></i>
              Add
            </Button>
            <Search takeSearchText={takeSearchText} />
          </div>
        </div>
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
              style={{ margin: "10px" }}
              current={current}
              defaultPageSize={pageSize}
              onChange={onChange}
              total={searchData.length}
              wrapClassName={`${classes.paginationItem}`}
            />
          </div>
        </div>
      </div>
      {visibleCreateModal && (
        <CreateModal setVisible={setVisibleCreateModal} saveData={saveData} />
      )}
    </>
  );
}

export default TodoList;
