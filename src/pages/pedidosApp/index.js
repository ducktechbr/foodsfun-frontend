import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import back from "../../assets/backbutton.svg";
import botaoAdd from "../../assets/botaoAdd.svg";
import botaoFinalizar from "../../assets/botaoFinalizar.svg";
import FooterBar from "../../components/FooterBar";

export default function pedidos() {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/produtosApp">
          <Image src={back} alt="back button" />
        </Link>
        <h1>Meus Pedidos</h1>
        <div></div>
      </div>
      <div className={styles.grupoPedidos}>
        <h1>
          <strong>Último pedido</strong>
        </h1>
        <div className="bg-transparent my-2">
          <div className="bg-transparent flex items-center">
            <span className={styles.numero}>1</span>
            <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
          </div>
          <div className="bg-transparent flex items-center">
            <span className={styles.numero}>2</span>
            <span className={styles.text}>Pinga</span>
          </div>
          <div className="bg-transparent flex items-center">
            <span className={styles.numero}>4</span>
            <span className={styles.text}>X-Alface (sem salada)</span>
          </div>
        </div>
        <div className="bg-transparent flex justify-around">
          <button>
            <Image
              src={botaoAdd}
              alt="botao adicionar"
              className="bg-transparent"
            />
          </button>
          <button>
            <Image
              src={botaoFinalizar}
              alt="botao finalizar"
              className="bg-transparent"
            />
          </button>
        </div>
      </div>
      <div>
        <h1>
          <strong className={styles.segundoHeader}>Histórico</strong>
        </h1>
        <div className={styles.grupoPedidos}>
          <div className="bg-transparent my-2">
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>1</span>
              <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>2</span>
              <span className={styles.text}>Pinga</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>4</span>
              <span className={styles.text}>X-Alface (sem salada)</span>
            </div>
          </div>
        </div>
        <div className={styles.grupoPedidos}>
          <div className="bg-transparent my-2">
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>1</span>
              <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>2</span>
              <span className={styles.text}>Pinga</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>4</span>
              <span className={styles.text}>X-Alface (sem salada)</span>
            </div>
          </div>
        </div>
        <div className={styles.grupoPedidos}>
          <div className="bg-transparent my-2">
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>1</span>
              <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>2</span>
              <span className={styles.text}>Pinga</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>4</span>
              <span className={styles.text}>X-Alface (sem salada)</span>
            </div>
          </div>
        </div>
        <div className={styles.grupoPedidos}>
          <div className="bg-transparent my-2">
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>1</span>
              <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>2</span>
              <span className={styles.text}>Pinga</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>4</span>
              <span className={styles.text}>X-Alface (sem salada)</span>
            </div>
          </div>
        </div>
        <div className={styles.grupoPedidos}>
          <div className="bg-transparent my-2">
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>1</span>
              <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>2</span>
              <span className={styles.text}>Pinga</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>4</span>
              <span className={styles.text}>X-Alface (sem salada)</span>
            </div>
          </div>
        </div>
        <div className={styles.grupoPedidos}>
          <div className="bg-transparent my-2">
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>1</span>
              <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>2</span>
              <span className={styles.text}>Pinga</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>4</span>
              <span className={styles.text}>X-Alface (sem salada)</span>
            </div>
          </div>
        </div>
        <div className={styles.grupoPedidos}>
          <div className="bg-transparent my-2">
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>1</span>
              <span className={styles.text}>Burguer Bacon Deliciosissimo</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>2</span>
              <span className={styles.text}>Pinga</span>
            </div>
            <div className="bg-transparent flex items-center">
              <span className={styles.numero}>4</span>
              <span className={styles.text}>X-Alface (sem salada)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <FooterBar />
      </div>
    </div>
  );
}
