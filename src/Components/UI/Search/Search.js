import React from "react";
import { useForm } from "react-hook-form";

export default function Search({takeSearchText}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const searchText = watch(["Search"]);
  takeSearchText(searchText);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" placeholder="Search" {...register("Search", {})} />
      <input type="submit" />
    </form>
  );
}
