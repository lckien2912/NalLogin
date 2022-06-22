import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import classes from "./NewTodoForm.module.css";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import CreateModal from "../../UI/Modal/CreateModal";
import ErrMsg from "../../UI/ErrMsg/ErrMsg";
import { AuthContext } from "../../../store/Context/AuthContext";

export default function NewTodoForm({ saveData }) {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();
  const [visible, setVisible] = useState(false);
  const [visibleCreateModal, setVisibleCreateModal] = useState(false);
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);

  const openModal = () => {
    setVisible(true);
  };

  const openCreateModal = () => {
    setVisibleCreateModal(true);
  };

  // const onSubmit = (data) => {
  //   const changeData = {
  //     ...data,
  //     date: new Date(data.date),
  //     id: (Math.random() * 100000).toFixed(0),
  //   };
  //   saveData(changeData);
  //   reset();
  // };

  // const resetHandler = () => {
  //   reset();
  // };

  // const errorTitle = () => {
  //   switch (errors.title?.type) {
  //     case "required":
  //       return <ErrMsg className={classes.errors}>Title is required!</ErrMsg>;
  //     case "maxLength":
  //       return (
  //         <ErrMsg className={classes.errors}>
  //           Title length must be less than 50 chars
  //         </ErrMsg>
  //       );
  //     default:
  //       return;
  //   }
  // };

  // const errorDescription = () => {
  //   switch (errors.description?.type) {
  //     case "required":
  //       return (
  //         <ErrMsg className={classes.errors}>Description is required!</ErrMsg>
  //       );
  //     case "maxLength":
  //       return (
  //         <ErrMsg className={classes.errors}>
  //           Description length must be less than 1000 chars
  //         </ErrMsg>
  //       );
  //     default:
  //       return;
  //   }
  // };

  // const errorDate = () => {
  //   switch (errors.date?.type) {
  //     case "required":
  //       return <ErrMsg className={classes.errors}>Date is required!</ErrMsg>;
  //     default:
  //       return;
  //   }
  // };

  return (
    <>
      <div className={classes.newForm}>
        {isLoggedIn && (
          <Button className={classes.logoutBtn} onClick={openModal}>
            Logout
          </Button>
        )}
        <Button className={classes.logoutBtn} onClick={openCreateModal}>
          Add
        </Button>
        {/* <h1>Create Todo List</h1>
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
              Undo
            </Button>
          </div>
        </form> */}
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        clickHandler={logoutHandler}
        title="Logout?"
        message="Are you sure you want to log out?"
      />
      <CreateModal
        setVisible={setVisibleCreateModal}
        visible={visibleCreateModal}
        saveData={saveData}
      />
    </>
  );
}
