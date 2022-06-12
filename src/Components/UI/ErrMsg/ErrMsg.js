import React from "react";
import classes from "./ErrMsg.module.css";

function ErrMsg({ children }) {
  return <p className={classes.errMsg}>{children}</p>;
}

export default ErrMsg;
