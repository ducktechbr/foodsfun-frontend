import Head from "next/head";
import { useEffect, useState, useContext } from "react";

import styles from "./styles.module.scss";

import NavBar from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";

import { ToggleButton } from "../../components/ToggleButton";
// import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/index";
import paymentStore from "../../store/paymentStore";
import reloadStore from "../../store/reloadStore";

import { ProtectedRoute } from "../../middlewares/protectedRoute";

function Page() {
  // const { loggedInUser } = useContext(AuthContext);

  const changeMethods = paymentStore((state) => state.changeMethods);
  const reload = reloadStore((state) => state.reload);
  const setReload = reloadStore((state) => state.setReload);

  async function getPaymentMethod() {
    const user = await api.get("/user");
    changeMethods(user.data.paymentMethod);
  }

  useEffect(() => {
    getPaymentMethod();
  }, []);

  useEffect(() => {
    setReload(false);
    getPaymentMethod();
  }, [reload]);

  return (
    <div className="flex">
      <Head>
        <title>FoodsFun - Configurações</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-60">
        <NavBar />
      </div>

      <div className={styles.screen}>
        <BackgroundBanner />

        <div className={styles.lista}>
          <h1>Habilitar/Desabilitar meios de pagamento</h1>
          <ul>
            <li>
              Cartão{" "}
              <div className={styles.buttonInit}>
                <ToggleButton id="cartao" />
              </div>{" "}
            </li>
            <li>
              PIX{" "}
              <div className={styles.buttonMid}>
                <ToggleButton id="pix" />
              </div>{" "}
            </li>
            <li>
              Dinheiro{" "}
              <div className={styles.buttonEnd}>
                <ToggleButton id="dinheiro" />
              </div>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function configuracao() {
  return <ProtectedRoute component={Page} />;
}
