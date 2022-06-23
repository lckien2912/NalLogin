import React from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import Button from "../../UI/Button/Button";
import classes from "./EditModal.module.css";

let modalRoot = document.getElementById("modal-root");

if (!modalRoot) {
  const modalRootDiv = document.createElement("div");
  modalRootDiv.id = "modal-root";
  document.body.appendChild(modalRootDiv);
  modalRoot = modalRootDiv;
}

function EditModal({
  setVisible,
  date,
  title,
  description,
  takeEditData,
  id,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const watchAllFields = watch();

  const onSubmit = (data) => {
    data = { ...watchAllFields, id };
    setVisible(false);
    reset();
    takeEditData(data);
  };

  const GetDateFormat = (date) => {
    let month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return date.getFullYear() + "-" + month + "-" + day;
  };

  const resetHandler = () => {
    setVisible(false);
    reset();
  };

  return createPortal(
    <div className={`${classes.modal}`}>
      <div className={classes["modal-container"]}>
        <h1>Adjust Todo List</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes["form-control"]}>
            <div className={classes.control}>
              <label>Title</label>
              <textarea
                defaultValue={title}
                rows="1"
                placeholder="Title"
                {...register("title", { required: true, maxLength: 100 })}
              />
            </div>
            <div className={classes.control}>
              <label>Description</label>
              <textarea
                defaultValue={description}
                placeholder="Description"
                rows="4"
                {...register("description", { required: true, maxLength: 999 })}
              />
            </div>
            <div className={classes.control}>
              <label>Date Modified</label>
              <input
                defaultValue={GetDateFormat(date)}
                type="date"
                placeholder="Date"
                {...register("date", { required: true })}
              />
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
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
}

export default EditModal;
