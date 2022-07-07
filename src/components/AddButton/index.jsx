import styles from "./styles.module.css";

export default function Card(props) {
  return (
    <div className=" flex items-center justify-center">
      <div className={styles.content}>
        <div className={styles.contentText}>
          <h1>+</h1>
          <p>Adicionar</p>
        </div>
      </div>
    </div>
  );
}
