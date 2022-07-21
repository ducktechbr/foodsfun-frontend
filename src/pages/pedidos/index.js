import Head from "next/head";

import { IoIosArrowDropright } from "react-icons/io";


import NavBar from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import AddOrder from "../../components/AddOrder";
import { api } from "../../api";

import { ProtectedRoute } from "../../middlewares/protectedRoute";

import styles from "./styles.module.css";
import { useEffect, useMemo, useState } from "react";
import ModalInfo from "../../components/ModalInfo";
import DivPedidos from "../../components/DivPedidos";

function Page() {
  const [pedidos, setPedidos] = useState({ data: [{ title: "" }] });

  // const [filtroMesa , setFiltroMesa] = useState(2)

  useEffect(() => {
    getOrders();
  }, []);

  async function getOrders() {
    setPedidos(await api.get(`/getOrders`));
  }

  return (
    <div className="flex">
      <Head>
        <title>FoodsFun - Pedidos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-60"></div>
      <NavBar />

      <div className={styles.screen}>
        <BackgroundBanner />

        <div className="mt-5 px-5 flex justify-end">
          <AddOrder />
        </div>
        <div className="mt-14 mx-4 h-48 border-2 rounded-2xl bg-white ">
          <div className="space-y-0  h-16 bg-themeOrange text-white text-[1.3rem] py-2 px-2 rounded-t-lg">
            <div className="flex justify-around mt-2 bg-transparent">
              <div className="w-1/8 bg-transparent">Pedido</div>
              <div className="w-1/8 bg-transparent flex">
                Mesa
                <button>
                  <IoIosArrowDropright
                    size={25}
                    color="#fff"
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: "2px",
                    }}
                  />
                </button>
              </div>

              <div className="w-1/8 bg-transparent">Quantidade</div>
              <div className="w-4/8 bg-transparent">Produto</div>
              <div className="w-1/8 bg-transparent flex">
                Status
                <button type="button">
                  <IoIosArrowDropright
                    size={25}
                    color="#fff"
                    style={{
                      backgroundColor: "transparent",
                      marginLeft: "2px",
                    }}
                  />
                </button>
              </div>
            </div>
            {/* as proximas divs serao geradas automaticamente */}
          </div>
          <div className="mt-5">
            {pedidos.data[0]
              ? pedidos.data.map((current, key) => {
                  return <DivPedidos current={current} key={key} />;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pedidos() {
  return <ProtectedRoute component={Page} />;
}
