import React from "react";
import classes from "./Header.module.css";
import logoURL from "../../assets/img/NAL_logo.png";
function Header() {
  return (
    <header className={classes.header}>
      <img src={logoURL} alt="logo" className={classes.logo} />
    </header>
  );
}

export default Header;
