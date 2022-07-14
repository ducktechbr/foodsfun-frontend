import { createContext, useState, useEffect } from "react";

// criação do contexto authcontext que vai estar disponível para toda a aplicação

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {

  // criação do estado de usuário logado no contexto

  const [loggedInUser, setLoggedInUser] = useState({ token: "", user: {} });


  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.token) {
      setLoggedInUser(parsedStoredUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };
