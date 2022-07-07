import styles from "../../styles/login.module.css";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { api } from "../api/index";
import { AuthContext } from "../contexts/authContext";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const { setLoggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/login", form);

      setLoggedInUser(response.data);

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      setLoading(false);

      console.log("logado");
    } catch (error) {
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
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Senha"
          readOnly={loading}
          required={true}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading} className={styles.button}>
          Acessar
        </button>
      </form>

      <div className={styles.textArea}>
        <Link href="#">
          <a className={styles.text}>Esqueceu a senha?</a>
        </Link>
        <Link href="../signup">
          <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
        </Link>
      </div>
    </div>
  );
}
