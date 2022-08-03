import Link from 'next/link'

import styles from "./style.module.scss";
import Image from "next/image";
import inicio from "../../assets/inicio.svg";
import garcon from "../../assets/garcon.svg";
import pedidos from "../../assets/pedidosapp.svg";
import user from "../../assets/user.svg";
import comanda from "../../assets/comanda.svg";

export default function FooterBar() {
  return (
    <div>
      <div className={styles.iconsArea}>

        <Link href="/produtosApp">
          <button className={styles.button}>
            <div className={styles.div_image}>
              <Image src={inicio} alt="botao home" className="bg-transparent" />
            </div>
            <span className="bg-transparent">Início</span>
          </button>
        </Link>

        <Link href="">
          <button className={styles.button}>
            <div className={styles.div_image}>
              <Image src={garcon} alt="botao garçon" className="bg-transparent" />
            </div>
            <span className="bg-transparent">Garçon</span>
          </button>
        </Link>

        <Link href="/pedidosApp">
          <button className={styles.button}>
            <div className={styles.div_image}>
              <Image
                src={pedidos}
                alt="botao pedidos"
                className="bg-transparent"
              />
            </div>
            <span className="bg-transparent">Pedidos</span>
          </button>
        </Link>

        <Link href="/perfilApp">
          <button className={styles.button}>
            <div className={styles.div_image}>
              <Image src={user} alt="botao perfil" className="bg-transparent" />
            </div>
            <span className="bg-transparent">Perfil</span>
          </button>
        </Link>

        <Link href="/comandaApp">
          <button className={styles.button}>
            <div className={styles.div_image}>
              <Image
                src={comanda}
                alt="botao comanda"
                className="bg-transparent"
              />
            </div>
            <span className="bg-transparent">Comanda</span>
          </button>
        </Link>

      </div>
    </div>
  );
}
