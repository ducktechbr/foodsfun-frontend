import styles from "../../../styles/login.module.css";
import { useState, useContext } from "react";
import { api } from "../../api/index";
import { AuthContext } from "../../contexts/authContext";

import Head from "next/head";
import Link from "next/link";

export default function Login() {
  // busca a função de setar o usuário logado no contexto que engloba toda a aplicação, assim todas as páginas terão acesso às informações do usuário logado

  const { setLoggedInUser } = useContext(AuthContext);

  // criação do estado do form com email e password vazio para não dar erro no primeiro render do componente

  const [form, setForm] = useState({ email: "", password: "" });

  // criação do estado de loading para nâo deixar ninguem atualizar o form durante o loading do login

  const [loading, setLoading] = useState(false);

  // função de atualização do estado do form toda vez que alguma parte do form for mudada

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  // função de submit do form para a api/db

  async function handleSubmit(event) {
    // event preventDefault prevente que o submit mande as informações do form para a url

    event.preventDefault();

    // try/catch para retorno de possíveis erros

    try {
      // seta o loading para true, desabilitando o preenchimento do form

      setLoading(true);

      // faz a requisição para a api de login

      const response = await api.post("/login", form);

      // seta o loggedInUser no contexto que engloba toda aplicação com a resposta do back-end

      setLoggedInUser(response.data);

      // guarda as informações do usuário logado no localStorage do browser

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      // Seta o loading para false novamente para reabilitar o preenchimento do form
      
      setLoading(false);
    } catch (error) {

      // caso tenha algum erro, mostra o erro no console e reabilita o preenchimento do form

      console.log(error);
      setLoading(false);
    }
  }
  return (
    <div className="font-theme">
      <Head>
        <title>Login</title>
        <meta name="description" content="Template web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>
        <div className={styles.logo}></div>
      </div>

      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          readOnly={loading}
          required={true}
          onChange={handleChange}
          name="email"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Senha"
          readOnly={loading}
          required={true}
          onChange={handleChange}
          name="password"
        />
        <button type="submit" disabled={loading} className={styles.button}>
          Acessar
        </button>
      </form>

      <div className={styles.textArea}>
        <Link href="#">
          <a className={styles.text}>Esqueceu a senha?</a>
        </Link>
        <Link href="/signup">
          <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
        </Link>
      </div>
    </div>
  );
}
