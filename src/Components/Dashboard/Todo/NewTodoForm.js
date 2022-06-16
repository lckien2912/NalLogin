import React from "react";
import { useForm } from "react-hook-form";
import classes from "./NewTodoForm.module.css";
import Button from "../../UI/Button/Button";
import ErrMsg from "../../UI/ErrMsg/ErrMsg";

export default function NewTodoForm({ saveData }) {
  // function GetDateFormat(date) {
  //   var month = (date.getMonth() + 1).toString();
  //   month = month.length > 1 ? month : "0" + month;
  //   var day = date.getDate().toString();
  //   day = day.length > 1 ? day : "0" + day;
  //   return date.getFullYear() + "-" + month + "-" + day;
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const changeData = {
      ...data,
      date: new Date(data.date),
      id: (Math.random() * 100000).toFixed(0),
    };
    saveData(changeData);
    reset();
  };

  const resetHandler = () => {
    reset();
  };

  const errorTitle = () => {
    switch (errors.title?.type) {
      case "required":
        return <ErrMsg className={classes.errors}>Title is required!</ErrMsg>;
      case "maxLength":
        return (
          <ErrMsg className={classes.errors}>
            Title length must be less than 100 chars
          </ErrMsg>
        );
      default:
        return;
    }
  };

  const errorDescription = () => {
    switch (errors.description?.type) {
      case "required":
        return (
          <ErrMsg className={classes.errors}>Description is required!</ErrMsg>
        );
      case "maxLength":
        return (
          <ErrMsg className={classes.errors}>
            Description length must be less than 1000 chars
          </ErrMsg>
        );
      default:
        return;
    }
  };
  const errorDate = () => {
    switch (errors.date?.type) {
      case "required":
        return <ErrMsg className={classes.errors}>Date is required!</ErrMsg>;
      default:
        return;
    }
  };

  return (
    <div className={classes.newForm}>
      <h1>Adjust Todo List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes["form-control"]}>
          <div className={classes.control}>
            <label>Title</label>
            <textarea
              rows="1"
              placeholder="Title"
              {...register("title", { required: true, maxLength: 100 })}
            />
            {errors.title && errorTitle()}
          </div>
          <div className={classes.control}>
            <label>Description</label>
            <textarea
              placeholder="Description"
              rows="4"
              {...register("description", { required: true, maxLength: 999 })}
            />
            {errors.description && errorDescription()}
          </div>
          <div className={classes.control}>
            <label>Date Modified</label>
            <input
              type="date"
              placeholder="Date"
              {...register("date", { required: true })}
            />
            {errors.date && errorDate()}
          </div>
        </div>
        <div className={classes.action}>
          <Button className={classes.addBtn} type="submit">
            Apply
          </Button>
          <Button
            onClick={resetHandler}
            className={classes.resetBtn}
            type="button"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}
