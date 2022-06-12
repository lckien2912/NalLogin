import { createContext } from "react";

const AuthContext = createContext({ isLoggedIn: true, role: "" });

export default AuthContext;
