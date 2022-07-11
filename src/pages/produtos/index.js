import Head from "next/head";
import { useDispatch } from "react-redux";

import { NavBar } from "../../components/NavBar";
import { DropDown } from "../../components/Dropdown";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import Card from "../../components/Card";
import AddButton from "../../components/AddButton";
import { ProtectedRoute } from "../../middlewares/protectedRoute";

import styles from "./styles.module.css";
import { useEffect } from "react";

function Page() {
  const navigation = [
    { name: "Pedidos", href: "#", current: true },
    { name: "Produtos", href: "#", current: false },
    { name: "Mesas", href: "#", current: false },
  ];
  const dispatch = useDispatch();

  function handleCurrent(navigation) {
    dispatch({
      type: "SELECTED_TWO",
      navigation,
    });
  }
  useEffect(() => {
    handleCurrent();
  }, []);

  return (
    <div className="flex">
      <Head>
        <title>FoodsFun - Produtos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="w-60">
        <NavBar />
      </div>

      <div className={styles.screen}>
        <BackgroundBanner />

        <div className="w-full rounded-2xl flex justify-between items-center">
          <div className="h-24 mt-5 px-5 flex w-full justify-between items-center">
            <DropDown/>
            <AddButton/>
          </div>
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5  w-full place-items-center mt-14">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default function Produtos() {
  return <ProtectedRoute component={Page} />;
}
