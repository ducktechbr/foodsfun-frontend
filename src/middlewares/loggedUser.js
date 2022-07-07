import { useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../contexts/authContext";

export function LoggedUser({ component: Component }) {
  const router = useRouter();
  const { loggedInUser } = useContext(AuthContext);

  if (!loggedInUser.token) {
    return <Component />;
  } else {
    router.push("/pedidos");
  }
}
