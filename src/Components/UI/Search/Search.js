import React from "react";
import { useForm } from "react-hook-form";

export default function Search({ takeSearchText }) {
  const {
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => takeSearchText(data);

  const handleSearchText = (e) => {
    takeSearchText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="search"
        onChange={handleSearchText}
        placeholder="Search"
      />
      <input type="submit" />
    </form>
  );
}
