import { useContext } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "../contexts/authContext";

export function LoggedUser({ component: Component }) {
  const router = useRouter();

  // puxa as informações do usuario logado do contexto

  const { loggedInUser } = useContext(AuthContext);

  // caso o usuario não tenha um token ativo ele retorna o componente que veio como props, caso tenha um token ativo ele manda para a pagina pedidos

  if (!loggedInUser.token) {
    return <Component />;
  } else {
    router.push("/pedidos");
  }
}
