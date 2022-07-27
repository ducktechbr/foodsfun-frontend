import styles from "./styles.module.scss";

import CardProdutos from "../../components/CardProdutosApp";
import FooterBar from "../../components/FooterBar";

import { BiSearchAlt2 } from "react-icons/bi";

export default function conta() {
  return (
    <div>
      <div className={styles.banner}></div>

      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.text1}> Produtos </h1>
        </div>

        <div>
          <input type="search" className={styles.input} />
          <button className={styles.span}>
            <BiSearchAlt2 size={15} style={{ background: "transparent" }} />
          </button>
        </div>
        <div className={styles.divCategoria}>
          <h1>Cardápio</h1>{" "}
          <button className={styles.buttonFilter}>categoria</button>
        </div>
      </div>

      <div className={styles.card}>
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
        <CardProdutos />
      </div>
      <div className={styles.footerTotal}>
        <span>Total</span>
        <span>R$80,00</span>
      </div>
      <footer className={styles.footer}>
        <FooterBar />
      </footer>
    </div>
  );
}
