import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

let modalRoot = document.getElementById("modal-root");

if (!modalRoot) {
  const modalRootDiv = document.createElement("div");
  modalRootDiv.id = "modal-root";
  document.body.appendChild(modalRootDiv);
  modalRoot = modalRootDiv;
}

function Modal({ setVisible, message, title, clickHandler }) {
  const onClickHandler = () => {
    clickHandler();
    setVisible(false);
  };
  return createPortal(
    <div className={`${classes.modal} `}>
      <div className={classes["modal-container"]}>
        <div className={`${classes["modal-desc"]}`}>
          <i className="fa-solid fa-triangle-exclamation"></i>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
        <div className={classes["modal-actions"]}>
          <button onClick={() => setVisible(false)} className={classes.btn}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button
            onClick={onClickHandler}
            className={`${classes.btn} ${classes.accept}`}
          >
            <i className="fa-solid fa-check"></i>
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
