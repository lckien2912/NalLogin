import React from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import ErrMsg from "../../UI/ErrMsg/ErrMsg";
import classes from "./EditModal.module.css";
import Button from "../Button/Button";

let modalRoot = document.getElementById("modal-root");

if (!modalRoot) {
  const modalRootDiv = document.createElement("div");
  modalRootDiv.id = "modal-root";
  document.body.appendChild(modalRootDiv);
  modalRoot = modalRootDiv;
}

function CreateModal({ saveData, visible, setVisible }) {
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
    setVisible(false);
    reset();
  };

  const resetHandler = () => {
    reset();
    setVisible(false);
  };

  const errorTitle = () => {
    switch (errors.title?.type) {
      case "required":
        return <ErrMsg className={classes.errors}>Title is required!</ErrMsg>;
      case "maxLength":
        return (
          <ErrMsg className={classes.errors}>
            Title length must be less than 50 chars
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
  return createPortal(
    <div className={`${classes.modal} `}>
      <div className={classes["modal-container"]}>
        <h1>Create Todo List</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes["form-control"]}>
            <div className={classes.control}>
              <label>Title</label>
              <input
                rows="1"
                placeholder="Title"
                {...register("title", { required: true, maxLength: 50 })}
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
              Add
            </Button>
            <Button
              onClick={resetHandler}
              className={classes.resetBtn}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
}

export default CreateModal;
