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
            <li>Cartão    <ToggleButton/>  </li>
            <li>PIX       <ToggleButton/>  </li>
            <li>Dinheiro  <ToggleButton/>  </li>
          </ul>
        </div>

      </div>



   </div>
 );
}   