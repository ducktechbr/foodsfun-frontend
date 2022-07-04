import styles from '../../styles/login.module.css'

import Head from "next/head";
import Link from 'next/link';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Template web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>

        <div className={styles.logo}></div>

          <div className={styles.inputContainer}>
            <input className={styles.input} type='text' placeholder='Nome' />
            <input className={styles.input} type='email' placeholder='Email' />
            <input className={styles.input} type='password' placeholder='Senha' />
            <button className={styles.button} type='submit'> Cadastrar </button>
          </div>

            <div className={styles.textArea}>
              
              <Link href="/"><a className={styles.text} >Já possui uma conta? Acesse!</a></Link>
            </div>
          




      </div>  
      
    </div>
  );
}
