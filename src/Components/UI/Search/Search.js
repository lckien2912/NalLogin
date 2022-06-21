import React from "react";
import classes from "./Search.module.css";

export default function Search({ takeSearchText }) {
  const handleSearchText = (e) => {
    takeSearchText(e.target.value);
  };

  return (
    <input
      className={classes.search}
      type="search"
      onChange={handleSearchText}
      placeholder="Search"
    />
  );
}
