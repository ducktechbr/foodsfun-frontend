import styles from "./styles.module.scss";

export default function CardProdutos() {
  return (
    <div className="mb-3">
      <div className={styles.background}></div>

      <div className={styles.container}>
        <div className={styles.namePrice}>
          <h1>Hamburguer simples</h1>
          <h1>R$ 16</h1>
        </div>

        <p className={styles.text}>
          Burguer Angus (160g), queijo prato, molho Fanis, maionese e no pão
          brioche.
        </p>
      </div>
    </div>
  );
}
