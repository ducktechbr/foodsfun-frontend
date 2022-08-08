import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

import back from "../../assets/backbutton.svg";
import pagCartao from "../../assets/pagCartao.svg";
import pagDin from "../../assets/pagDinheiro.svg";
import pagQr from "../../assets/pagQr.svg";
import pagPix from "../../assets/pagPix.svg";

import FooterBar from "../../components/FooterBar";

export default function Pagamento() {

  const router = useRouter();

  function handleCard() {
    router.push("/solicitPagamentoApp");
  
  }

  function handlePix() {
    router.push("/solicitPagamentoApp");
  }

  function handleCash() {
    router.push("/dinheiroApp");
  }



  return (
    <div>
      <div className={styles.header}>
        <Link href="/pagamentoApp">
          <div>
            <Image src={back} alt="back button" />
          </div>
        </Link>
        <h1>Forma de pagamento</h1>
        <div></div>
      </div>
      <div className={styles.divFormas}>
        <div className="bg-transparent">
          <h1 className="bg-transparent">Escolha sua forma de pagamento:</h1>
        </div>
        <div className={styles.divPags}>
          <button className="h-20 bg-transparent" onClick={handleCard}>
            <Image
              src={pagCartao}
              alt="botao de pagamento com cartao"
              className="bg-transparent"
            />
          </button>
          <button className="h-20 bg-transparent" onClick={handleCash}>
            <Image
              src={pagDin}
              alt="botao de pagamento com dinheiro"
              className="bg-transparent"
            />
          </button>
        </div>
        <div className={styles.divPags}>
          <button className="h-20 bg-transparent mt-8">
            <Image
              src={pagQr}
              alt="botao de pagamento com QrCode"
              className="bg-transparent"
            />
          </button>
          <button className="h-20 bg-transparent mt-8" onClick={handlePix}>
            <Image
              src={pagPix}
              alt="botao de pagamento com pix"
              className="bg-transparent"
            />
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <FooterBar />
      </div>
    </div>
  );
}
