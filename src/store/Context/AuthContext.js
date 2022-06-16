import { createContext, useState } from "react";
import { USERS } from "../../constant/constant";
import { notification } from "antd";
import "antd/dist/antd.css";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role"));

  const loginHandler = (data) => {
    const validUser = USERS.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (validUser) {
      setIsLoggedIn(true);
      setRole(validUser.role);
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("role", validUser.role);
    } else {
      notification.open({
        message: "Login Failed",
        description: "Please check your email/password again!",
        duration: 1,
        key: "updatable",
        placement: "topRight",
      });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setRole("");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        logoutHandler,
        loginHandler,
        role,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
