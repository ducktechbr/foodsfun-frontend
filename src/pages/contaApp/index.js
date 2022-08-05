import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

import back from "../../assets/backbutton.svg";
import botaoAdd from "../../assets/+.svg";

import FooterBar from "../../components/FooterBar";

export default function conta() {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/produtosApp">
          <div>
            <Image src={back} alt="back button" />
          </div>
        </Link>
        <h1>Conta</h1>

        

        <div>
          <Image src={botaoAdd} alt="back button" />
        </div>


      </div>

        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={styles.descricao}>Descrição</div>
            <div className={styles.quantidade}>Quant</div>
            <div className={styles.preco}>Preço</div>
          </div>

          <ul className={styles.items}>
            <li>
              <div className={styles.item1}><div>hamburguer</div></div>
              <div className={styles.item}><div>2</div></div>
              <div className={styles.item}><div>R$15,90</div></div>
            </li>
          </ul>
                    
        </div>

        <div className={styles.button}><button   >PAGAR</button></div>
      
      <footer className={styles.footer}>
        <FooterBar />
      </footer>
    </div>
  );
}
