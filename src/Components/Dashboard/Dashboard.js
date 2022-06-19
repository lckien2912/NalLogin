import React, { useState, useEffect } from "react";
import classes from "./Dashboard.module.css";
import Card from "../UI/Card/Card";
import TodoList from "./Todo/TodoList";
import CenterContainer from "../UI/CenterContainer/CenterContainer";
import NewTodoForm from "./Todo/NewTodoForm";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("LIST_KEY");
    if (storedTodoList) {
      setData(JSON.parse(storedTodoList));
    }
  }, []);

  const saveData = (data) => {
    setData((prevData) => {
      localStorage.setItem("LIST_KEY", JSON.stringify([data, ...prevData]));
      return [data, ...prevData];
    });
  };

  const deleteItem = (id) => {
    setData((prevList) => {
      localStorage.setItem(
        "LIST_KEY",
        JSON.stringify(prevList.filter((item) => item.id !== id))
      );
      return prevList.filter((item) => item.id !== id);
    });
  };

  return (
    <CenterContainer>
      <Card className={classes.home}>
        <NewTodoForm saveData={saveData} />
        <TodoList data={data} deleteItem={deleteItem} />
      </Card>
    </CenterContainer>
  );
}

export default Dashboard;
