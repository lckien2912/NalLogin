import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../Context/LoginContext";
import Button from "../UI/Button/Button";

const Navigation = ({ onLogout }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      {isLoggedIn && (
        <Button className={classes.logoutBtn} onClick={onLogout}>
          Logout
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
