import React from "react";
import classes from "./Dashboard.module.css";
import Card from "../UI/Card/Card";
import UserInfo from "./UserInfo/UserInfo";
import Todo from "./Todo/Todo";
import CenterContainer from "../UI/CenterContainer/CenterContainer";

function Dashboard({ onLogout, role }) {
  return (
    <CenterContainer>
      <Card className={classes.home}>
        <UserInfo role={role} onLogout={onLogout} />
        <Todo></Todo>
      </Card>
    </CenterContainer>
  );
}

export default Dashboard;
