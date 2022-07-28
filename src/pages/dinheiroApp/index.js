import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import back from "../../assets/backbutton.svg";

import FooterBar from "../../components/FooterBar";
import CurrencyInput from "react-currency-input-field";

function handleChange() {
  null;
}

export default function dinheiro() {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/produtosApp">
          <Image src={back} alt="back button" />
        </Link>
        <h1>Dinheiro</h1>
        <div></div>
      </div>
      <div className={styles.divFormas}>
        <div className="bg-transparent">
          <h1 className="bg-transparent">Precisa de troco?</h1>
          <p>
            Seu pedido deu R$ 80,00. Digite quanto irá pagar em dinheiro para
            que o garçom leve seu troco.
          </p>
          <span className="bg-transparent">Valor:</span>
          <CurrencyInput
            prefix="R$:"
            className={styles.input}
            name="price"
            placeholder="R$:25,89"
            decimalsLimit={2}
            decimalSeparator=","
            disableGroupSeparators
            onValueChange={(value, name) => handleChange(name, value)}
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-3">
        <button className={styles.button}>CONFIRMAR</button>
      </div>

      <div className={styles.footer}>
        <FooterBar />
      </div>
    </div>
  );
}
