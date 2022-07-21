import Head from "next/head";

import NavBar from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import AddTable from "../../components/AddTable";
import CardMesas from "../../components/CardMesas";

import { api } from "../../api";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import reloadStore from "../../store/reloadStore";

import { ProtectedRoute } from "../../middlewares/protectedRoute";

function Page() {
  const [lista, setLista] = useState([]);
  const setReload = reloadStore((state) => state.setReload);
  const reload = reloadStore((state) => state.reload);

  async function getTables() {
    setLista(await api.get("/getTables"));
  }

  useEffect(() => {
    getTables();
    setReload(false);
  }, [reload]);

  useEffect(() => {
    getTables();
  }, []);

  return (
    <div className="flex">
      <Head>
        <title>FoodsFun - Mesas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-60"></div>
      <NavBar />

      <div className={styles.screen}>
        <BackgroundBanner />

        <div className="h-24 mt-5 px-5 flex justify-end">
          <AddTable />
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5  w-full place-items-center mt-14">
          {lista.data
            ? lista.data.map((item, key) => {
                return <CardMesas info={item} key={key} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default function Mesas() {
  return <ProtectedRoute component={Page} />;
}
