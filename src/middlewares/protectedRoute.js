import { useContext } from "react";

import { AuthContext } from "../contexts/authContext";
import Index from "../pages";

export function ProtectedRoute({ component: Component }) {
  const { loggedInUser } = useContext(AuthContext);

  if (loggedInUser.token) {
    return <Component />;
  } else {
    return <Index />;
  }
}
