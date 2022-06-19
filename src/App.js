import React, { useContext } from "react";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import { AuthContext } from "./store/Context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {/* <Header /> */}
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Dashboard />}
      </main>
    </>
  );
}

export default App;
