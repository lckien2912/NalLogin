import React, { useEffect, useContext } from "react";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import { AuthContext } from "./store/Context/AuthContext";

function App() {
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const saveLoggedInState = localStorage.getItem("isLoggedIn");
    if (saveLoggedInState === "1") setIsLoggedIn(true);
  }, []);

  return (
    <>
      <Header />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Dashboard />}
      </main>
    </>
  );
}

export default App;
