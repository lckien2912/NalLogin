import React, { useContext } from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import { AuthContext } from "./store/Context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Dashboard />}
      </main>
    </>
  );
}

export default App;
