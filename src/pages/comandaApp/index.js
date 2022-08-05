import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import back from "../../assets/backbutton.svg";
import botaoAdd from "../../assets/+.svg";
import hamburgui from "../../assets/hamburgui.svg";
import load from "../../assets/load.svg";

import { api } from "../../api";

import FooterBar from "../../components/FooterBar";
import TotalBar from "../../components/TotalBar";

import { useEffect, useState } from "react";

export default function Comanda() {
  const [comanda, setComanda] = useState(null);
  const [total, setTotal] = useState(0);

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
        setTotal(sumTotal);
      },
    [comanda]
  );

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
                    width={"200px"}
                    height={"80px"}
                  />
                  <div className={styles.divFooterPedidos}>
                    <span>Quantidade : {cur.quantity}</span>
                    <div className="flex items-center">
                      <span>Status : </span>
                      <Image src={load} alt="load" />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className={styles.button}>
        <button>PAGAR</button>
      </div>
      <div className={styles.footer}>
        <TotalBar total={total.toFixed(2)} />
        <FooterBar />
      </div>
    </div>
  );
}
