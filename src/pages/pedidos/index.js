import Head from 'next/head'

import { NavBar } from "../../components/NavBar";
import { DropDown } from "../../components/Dropdown";
import { BackgroundBanner } from "../../components/BackgroundBanner";

import AddButton from "../../components/AddButton";
import styles from "./styles.module.css";

export default function Pedidos() {
  return (
    <div className="flex">

      <Head>
        <title>FoodsFun - Pedidos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      {/* div container da navbar para utilizae position fixed sem quebrar o layout */}
      <div className="w-60">
        <NavBar />
      </div>

      <div className={styles.screen}>
        <BackgroundBanner/>
        
        
        <div className="w-full mt-11 px-3 rounded-2xl flex justify-between items-center">
          <DropDown />
          <AddButton />
        </div>


        <thead></thead>
        {/* <div className="grid grid-cols-4  border-2 border-red-600 mt-11">
          <div>Pedido</div>
          <div>Mesa</div>
          <div>Produto</div>
          <div>Status</div>
        </div> */}

  
      
      

      </div>
    </div>
  );
}
