import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

import back from "../../assets/backbutton.svg";
import botaoAdd from "../../assets/+.svg";

import FooterBar from "../../components/FooterBar";

export default function conta() {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/produtosApp">
          <div>
            <Image src={back} alt="back button" />
          </div>
        </Link>
        <h1>Conta</h1>
        <div>
          <Image src={botaoAdd} alt="back button" />
        </div>
      </div>
      <footer className={styles.footer}>
        <FooterBar />
      </footer>
    </div>
  );
}
