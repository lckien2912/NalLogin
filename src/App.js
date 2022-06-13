import React, { useContext, useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Modal from "./Components/UI/Modal/Modal";
import { AuthContext } from "./store/AuthProvider";

function App() {
  const [visible, setVisible] = useState(false);

  const { isLoggedIn, setIsLoggedIn, loginHandler } = useContext(AuthContext);

  useEffect(() => {
    const saveLoggedInState = localStorage.getItem("isLoggedIn");
    if (saveLoggedInState === "1") setIsLoggedIn(true);
  }, []);
  // setVisible(loginHandler);

  return (
    <>
      <Header />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Dashboard />}
      </main>
      <Modal
        visible={visible}
        setVisible={setVisible}
        title="Login Failed"
        message="Please check your email/password again!"
        closeMessage="Okay"
      ></Modal>
    </>
  );
}

export default App;
