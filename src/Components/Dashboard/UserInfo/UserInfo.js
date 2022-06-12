import React from "react";

import classes from "./UserInfo.module.css";
import Navigation from "../Navigation";

function UserInfo({ onLogout, role }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{role}</h1>
      <div className={classes.userAvatar}>
        <img
          alt="abc"
          src="https://images.unsplash.com/photo-1526656001029-20a71b17f7ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWRtaW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        ></img>
      </div>
      <Navigation onLogout={onLogout}></Navigation>
    </div>
  );
}

export default UserInfo;
