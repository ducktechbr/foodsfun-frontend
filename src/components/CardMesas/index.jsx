import styles from "./styles.module.css";

export default function CardMesas(props) {
  return (
    <>
      <div className={styles.container}>
        

        <div className={styles.content}>

            <h1>MESA 1</h1>
            
            <div className={styles.imgContainer}>
                <div className={styles.img}>
            </div>

            </div>

          <div className={styles.iconsArea}>
            <button
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div className="bg-eye h-buttonBox w-7 bg-center bg-no-repeat bg-cover bg-white" />
              <div className={`${styles.iconsText} bg-white `}>ver</div>
            </button>
            <button
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div className="bg-printer h-buttonBox w-buttonBox bg-center bg-cover bg-white bg-no-repeat" />
              <div className={`${styles.iconsText} bg-white`}>imprimir</div>
            </button>
            <button
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div className="bg-trash h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white" />
              <div className={`${styles.iconsText} bg-white`}>deletar</div>
            </button>
            <button
              className={`${styles.icons} flex flex-col justify-center items-center space-y-1`}
            >
              <div className="bg-enabled h-buttonBox w-buttonBox bg-center bg-no-repeat bg-cover bg-white" />
              
              <div className={`${styles.iconsText} bg-white`}>ativar</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
