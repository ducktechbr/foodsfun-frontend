import styles from '../../styles/login.module.css'

import Head from "next/head";

import Input from '../components/input/Input';


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

        <Input/>
        
      </div>
      
    </div>
  );
}
