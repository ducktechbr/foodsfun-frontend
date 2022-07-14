import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/authContext";
const jwt = require("jsonwebtoken");

export function ProtectedRoute({ component: Component }) {
  // declaração do router para empurrar outra url para o browser

  const router = useRouter();

  // puxa os dados do usuário logado e a função de mudar o usuário logado do contexto que engloba toda a aplicação

  const { loggedInUser } = useContext(AuthContext);
  const { setLoggedInUser } = useContext(AuthContext);

  // roda o conteúdo do useEffect toda vez que o usuário logado muda no contexto que engloba toda a aplicação

  useEffect(() => {
    // caso o usuário logado tenha uma token, o código decodifica a token e verifica o hoário de expiração, caso o horário de expiração da token seja menor que o horário atual: o código limpa o localStorage e seta o usuário logado no contexto como usuário vazio e token vazia.

    if (loggedInUser.token) {
      const token = jwt.decode(loggedInUser.token);
      var dateNow = new Date();
      if (token.exp < dateNow.getTime() / 1000) {
        localStorage.clear();
        setLoggedInUser({ token: "", user: {} });

        // caso o token esteja expirado muda a url para o login

        router.push("/");
      }
    } else {
      
      // caso o usuário logado não tenha uma token, muda a url para o login

      router.push("/");
    }
  }, [loggedInUser]);

  return <Component />;
}
