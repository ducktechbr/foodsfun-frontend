import styles from "./styles.module.scss";
import Image from "next/image";

export default function CardProdutos(props) {
  const { image, title, price, description } = props.card;
  // const decoded = image.content.toString().replace("data:image/png;base64, " || "image/jpeg;base64" || "image/svg;base64" || "image/gif;base64" , "");

  return (
    <div className="mb-3">
      
        <div className={styles.background}>
          <Image src={image} width="300px" height="100" alt="Imagem do produto" objectFit="cover" layout="fill" className="rounded-md" />
        </div>
      

      <div className={styles.container}>
        <div>
        <div className={styles.namePrice}>
          <h1>{title}</h1>
          
        </div>

        <p className={styles.text}>
          {description}
        </p>
        </div>
       
        <h1 className={styles.priceText}>R${price}</h1>
      </div>
    </div>
  );
}
