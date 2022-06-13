import React, { useState, createContext } from "react";
import { USERS } from "../Constant/Constant";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const loginHandler = (data) => {
    const validUser = USERS.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (validUser) {
      setIsLoggedIn(true);
      setRole(validUser.role);
      return false;
    } else return true;
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const value = {
    setIsLoggedIn,
    isLoggedIn,
    role,
    loginHandler,
    logoutHandler,
  };

  console.log(value);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
