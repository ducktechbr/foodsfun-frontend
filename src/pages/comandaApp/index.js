import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import back from "../../assets/backbutton.svg";
import botaoAdd from "../../assets/+.svg";
import hamburgui from "../../assets/hamburgui.svg";
import load from "../../assets/load.svg";

import FooterBar from "../../components/FooterBar";

export default function comanda() {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/produtosApp">
          <Image src={back} alt="back button" />
        </Link>
        <h1>Conta</h1>
        <div>
          
        </div>
      </div>

      <div className={styles.footerTotal}>
        <span>Total</span>
        <span>R$80,00</span>
      </div>
      <div className={styles.footer}>
        <FooterBar />
      </div>
    </div>
  );
}
