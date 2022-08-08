import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import back from "../../assets/backbutton.svg";
import card from "../../assets/card.svg";
import loading from "../../assets/miniLoading.svg";

import FooterBar from "../../components/FooterBar";

import totalStore from "../../store/totalStore";

export default function dinheiro() {

  const total = totalStore((state) => state.total);

  return (
    <div>
      <div className={styles.header}>
        <Link href="/comandaApp">
          <div>
            <Image src={back} alt="back button" />
          </div>
        </Link>
        <h1>Pagamento</h1>
        <div></div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentDiv}>
          <span>
            Forma de pagamento
            <br />
            selecionada:
          </span>
          <Image src={card} />
        </div>
        <div className="w-full flex justify-center mt-3 mb-2">
          <button className={styles.button}>
            Pagamento solicitado. Aguarde o garçom, em breve chegará até você.
          </button>
        </div>
        <div className={`${styles.contentDiv}`}>
          <span>
            Fechando conta: <Image src={loading} alt="bolinha de loading" />
          </span>
          <div></div>
        </div>
        <div className="w-full flex justify-center mt-3 mb-2">
          <button className={styles.button2}>
            Valor total da comanda: R$ {total !== null ? total.toString().replace("." , ",") : null}
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <FooterBar />
      </div>
    </div>
  );
}
