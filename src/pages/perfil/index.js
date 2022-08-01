import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import fulano from "../../assets/fulano.svg";
import dados from "../../assets/dados.svg";
import arrowLeft from "../../assets/arrowLeft.svg";

import bell from "../../assets/bell.svg"

import FooterBar from "../../components/FooterBar";

export default function perfil() {
  return (
    <div>
      <div className={styles.header}>
        <Image src={fulano} alt="foto do usuário" />
        <h1>Fulano de Tal</h1>
      </div>
      
        
          <ul className={styles.ul}>
            <li className="w-full relative">
              <div className="flex justify-between">
                <div className="flex flex-col items-start">
                  <div className="flex justify-center items-center space-x-2 ">
                    <Image src={dados} alt="icone dados" />
                    <span className={styles.spanzin}>Meus Dados</span>
                  </div>
                  <span className={styles.span}>Meus dados de conta</span>
                </div>
                <div className="flex justify-center items-center mr-10"> <Image src={arrowLeft} /> </div>
              </div>
            </li>
          </ul>
          <hr className={styles.line} />

          <ul className={styles.ul}>
            <li className="w-full relative">
              <div className="flex justify-between">
                <div className="flex flex-col items-start">
                  <div className="flex justify-center items-center space-x-2 ">
                    <Image src={bell} alt="icone notificacoes" />
                    <span className={styles.spanzin}>Notificações</span>
                  </div>
                  <span className={styles.span}>Central de notificaçãoes</span>
                </div>
                <div className="flex justify-center items-center mr-10"> <Image src={arrowLeft} /> </div>
              </div>
            </li>
          </ul>
          <hr className={styles.line} />
        
      
      <div className={styles.footer}>
        <FooterBar />
      </div>
    </div>
  );
}
