import Head from "next/head";

import styles from "./styles.module.scss"

import { NavBar } from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";

import { ToggleButton } from "../../components/ToggleButton";

export default function page() {
 return (

   <div className="flex">

     <Head>
        <title>FoodsFun - Configurações</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-60">
        <NavBar />
      </div>

      <div className={styles.screen}>
        <BackgroundBanner/>

        <div className={styles.lista}>
          <h1>Habilitar/Desabilitar meios de pagamento</h1>
          <ul>
            <li>Cartão    <div className={styles.buttonInit}><ToggleButton/></div>  </li>
            <li>PIX       <div className={styles.buttonMid}><ToggleButton/></div>  </li>
            <li>Dinheiro  <div className={styles.buttonEnd}><ToggleButton/></div>  </li>
          </ul>
        </div>

      </div>

   </div>
 );
}   