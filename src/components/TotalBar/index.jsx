import styles from "./style.module.scss";

export default function TotalBar(props) {
  return (
    <div>
      <div className={styles.iconsArea}>
        <div className={styles.divTotal}>
          <h1>Total</h1>

          <h1>R$ {props.total}</h1>
        </div>
      </div>
    </div>
  );
}
