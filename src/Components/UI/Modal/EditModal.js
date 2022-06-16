import React from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import Button from "../../UI/Button/Button";
import classes from "./EditModal.module.css";

const modalRootDiv = document.createElement("div");
modalRootDiv.id = "modal-root";
document.body.appendChild(modalRootDiv);

function EditModal({ visible, setVisible }) {
  //   const onClickHandler = () => {
  //     clickHandler();
  //     setVisible(false);
  //   };

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
    console.log(changeData);
    reset();
  };

  const resetHandler = () => {
    reset();
  };

  return createPortal(
    <div className={`${classes.modal} ${visible ? "" : classes.hide}`}>
      <div className={classes["modal-container"]}>
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
            </div>
            <div className={classes.control}>
              <label>Description</label>
              <textarea
                placeholder="Description"
                rows="4"
                {...register("description", { required: true, maxLength: 999 })}
              />
            </div>
            <div className={classes.control}>
              <label>Date Modified</label>
              <input
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
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>,
    modalRootDiv
  );
}

export default EditModal;
