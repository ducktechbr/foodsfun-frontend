import styles from "./style.module.scss";

import Head from "next/dist/shared/lib/head";

import InputMask from "react-input-mask";

export default function Login() {
  return (
    <div className={styles.background}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Template web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logo}></div>

      <div className={styles.login}>
        <p>
          Entre com o seu nome e telefone para obter acesso ao cardapio e
          realizar seu pedido.
        </p>

        <form>
          <input type="text" placeholder="Nome" />

          <InputMask mask="(99) 99999-9999" placeholder="Telefone" />

          <div>
            <button type="submit"> ACESSAR </button>
          </div>
        </form>
      </div>
    </div>
  );
}
