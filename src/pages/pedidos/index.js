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


        
        <div className='space-y-0 border-2 border-red-600 '>
          <div className="flex justify-around  mt-11">
            <div className="w-1/8 ">Pedido</div>
            <div className="w-1/8 ">Mesa</div>
            <div className="w-4/8 ">Produto</div>
            <div className="w-2/8 ">Status</div>
          </div>
          {/* as proximas divs serao geradas automaticamente */}
        </div>

   
       

  
      
      

      </div>
    </div>
  );
}
