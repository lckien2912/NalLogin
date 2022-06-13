import React, { useContext } from "react";
import { AuthContext } from "../../../store/AuthProvider";
import classes from "./UserInfo.module.css";
import Button from "../../UI/Button/Button";

function UserInfo({ onLogout, role }) {
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{role}</h1>
      <div className={classes.userAvatar}>
        <img
          alt="abc"
          src="https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWRtaW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        ></img>
      </div>
      {isLoggedIn && (
        <Button className={classes.logoutBtn} onClick={logoutHandler}>
          Logout
        </Button>
      )}
    </div>
  );
}

export default UserInfo;
