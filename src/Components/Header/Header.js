import React, { useContext, useState } from "react";
import classes from "./Header.module.css";
import logoURL from "../../assets/img/NAL_logo.png";
import Button from "../UI/Button/Button";
import { AuthContext } from "../../store/Context/AuthContext";
import Modal from "../UI/Modal/Modal";

function Header() {
  const [visible, setVisible] = useState(false);
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);

  const openModal = () => {
    setVisible(true);
  };

  return (
    <>
      <header className={classes.header}>
        <img src={logoURL} alt="logo" className={classes.logo} />
        {isLoggedIn && (
          <Button className={classes.logoutBtn} onClick={openModal}>
            Logout
          </Button>
        )}
      </header>
      <Modal
        visible={visible}
        setVisible={setVisible}
        clickHandler={logoutHandler}
        title="Logout?"
        message="Are you sure you want to log out?"
      ></Modal>
    </>
  );
}

export default Header;
