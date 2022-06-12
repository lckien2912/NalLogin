import React from "react";
import classes from "./CenterContainer.module.css";
function CenterContainer({ children }) {
  return <div className={classes.centerContainer}>{children}</div>;
}

export default CenterContainer;
