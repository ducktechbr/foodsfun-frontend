import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/authContext";
const jwt = require("jsonwebtoken");

export function ProtectedRoute({ component: Component }) {
  const router = useRouter();
  const { loggedInUser } = useContext(AuthContext);
  const { setLoggedInUser } = useContext(AuthContext);
  useEffect(() => {
    if (loggedInUser.token) {
      const token = jwt.decode(loggedInUser.token);
      var dateNow = new Date();
      if (token.exp < dateNow.getTime() / 1000) {
        localStorage.clear();
        setLoggedInUser({ token: "", user: {} });
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, [loggedInUser]);

  return <Component />;
}
