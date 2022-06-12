import React, { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import AuthContext from "./Context/LoginContext";
import Modal from "./Components/UI/Modal/Modal";

const USERS = [
  {
    id: 1,
    email: "admin@admin.com",
    password: "admin",
    role: "Admin",
  },
  {
    id: 2,
    email: "user@user.com",
    password: "useruser",
    role: "User",
  },
  {
    id: 1,
    email: "kien@gmail.com",
    password: "kkkkk",
    role: "User",
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const saveLoggedInState = localStorage.getItem("isLoggedIn");
    if (saveLoggedInState === "1") setIsLoggedIn(true);
  }, []);

  const checkExistedUser = (userData) => {
    return USERS.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );
  };

  const loginHandler = (data) => {
    const validUser = checkExistedUser(data);
    if (validUser) {
      setIsLoggedIn(true);
      setUser(validUser.role);
      localStorage.setItem("isLoggedIn", "1");
    } else setVisible(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, role: user }}>
      <Header />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Dashboard role={user} onLogout={logoutHandler} />}
      </main>
      <Modal
        visible={visible}
        setVisible={setVisible}
        title="Login Failed"
        message="Please check your email/password again!"
        closeMessage="Okay"
      ></Modal>
    </AuthContext.Provider>
  );
}

export default App;
