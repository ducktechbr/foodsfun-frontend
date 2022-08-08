import styles from "./styles.module.css";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'

import back from "../../assets/backbutton.svg";
import botaoAdd from "../../assets/+.svg";
import hamburgui from "../../assets/hamburgui.svg";
import load from "../../assets/load.svg";

import { api } from "../../api";

import FooterBar from "../../components/FooterBar";
import TotalBar from "../../components/TotalBar";

import { useEffect, useState } from "react";

import totalStore from "../../store/totalStore";

export default function Comanda() {

  const router = useRouter()

  const total = totalStore((state) => state.total);
  const setTotal = totalStore((state) => state.changeTotal);

  const [comanda, setComanda] = useState(null);
  

  useEffect(() => {
    getChecksId();
  }, []);

  async function getChecksId() {
    const localStore = localStorage.getItem("loggedInClient");
    const clientId = JSON.parse(localStore).clientId;
    const response = await api.get(`/comanda/${clientId}`);
    comanda !== [] ? setComanda(response.data) : null;
  }

  useEffect(
    () =>
      async function () {
        var sumTotal = 0;
        comanda
          ? comanda.map((cur) => {
              let price = Number(cur.price.replace(",", "."));
              let quantity = cur.quantity;
              let sum = price * quantity;
              sumTotal += sum;
            })
          : null;
        setTotal(sumTotal.toFixed(2));
      },
    [comanda]
  );

  function handleChekout(){
    router.push("/pagamentoApp")
  }

  return (
    <div>
      <div className={styles.header}>
        <Link href="/produtosApp">
          <div>
            <Image src={back} alt="back button" />
          </div>
        </Link>
        <h1>Comanda</h1>
        <div>
          <Image src={botaoAdd} alt="back button" />
        </div>
      </div>

      <div className={styles.divPedidos}>
        {comanda !== null
          ? comanda.map((cur, key) => {
              return (
                <div className={styles.divPedido} key={key}>
                  <Image
                    src={cur.image}
                    alt="hamburgui"
                    objectFit="cover"
                    width={"800px"}
                    height={"260px"}
					          className="rounded-lg "
                  />
                  <div className={styles.divFooterPedidos}>
                    <span>Quantidade : {cur.quantity}</span>

					          {/* div com status do pedido
					
                    {/* <div className="flex items-center">
                      <span>Status : </span>
                      <Image src={load} alt="load" />
                    </div> */}

                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className={styles.button}>
        <button onClick={handleChekout} >FECHAR COMANDA</button>
        
      </div>
      <div className="w-full h-32">
        
      </div>
      <div className={styles.footer}>
        <TotalBar total={ total !== null ? total.toString().replace("." , ",") : null} />
        <FooterBar />
      </div>
    </div>
  );
}
