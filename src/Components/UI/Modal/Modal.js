import React, { useContext } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { AuthContext } from "../../../store/Context/AuthContext";

const modalRootDiv = document.createElement("div");
modalRootDiv.id = "modal-root";
document.body.appendChild(modalRootDiv);

function Modal({ visible, setVisible, message, title, clickHandler }) {
  const onClickHandler = () => {
    clickHandler();
    setVisible(false);
  };

  return createPortal(
    <div className={`${classes.modal} ${visible ? "" : classes.hide}`}>
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
    modalRootDiv
  );
}

export default Modal;
