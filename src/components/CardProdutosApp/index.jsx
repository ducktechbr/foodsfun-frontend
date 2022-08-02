import styles from "./styles.module.scss";
import Image from "next/image";

export default function CardProdutos(props) {
  const { image, title, price, description } = props.card;
  // const decoded = image.content.toString().replace("data:image/png;base64, " || "image/jpeg;base64" || "image/svg;base64" || "image/gif;base64" , "");

  return (
    <div className="mb-3 flex flex-col justify-between">
      <Image
        src={image}
        width="120px"
        height="120px"
        alt="Imagem do produto"
        className="bg-transparent"
      />

      <div className={styles.container}>
        <div className={styles.namePrice}>
          <h1>{title}</h1>
          <h1>{price}</h1>
        </div>

        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}
