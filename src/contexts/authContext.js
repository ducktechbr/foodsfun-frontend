import { createContext, useState, useEffect } from "react";
const jwt = require("jsonwebtoken");

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ token: "", user: {} });

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.token) {
      setLoggedInUser(parsedStoredUser);
      try {
        var decodedToken = jwt.verify(
          parsedStoredUser.token,
          process.env.TOKEN_SIGN_SECRET
        );
        var dateNow = new Date();
        if (decodedToken.exp > dateNow.getTime()) {
          localStorage.setItem("loggedInUser", JSON.stringify(""));
        }
      } catch (error) {
        localStorage.setItem("loggedInUser", JSON.stringify(""));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };
