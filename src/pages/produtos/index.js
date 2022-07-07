import Head from 'next/head'

import { NavBar } from "../../components/NavBar";
import { DropDown } from "../../components/Dropdown";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import Card from "../../components/Card";
import AddButton from "../../components/AddButton";

import styles from "./styles.module.css";

export default function Pedidos() {
  return (

    
    <div className="flex">

      <Head>
        <title>FoodsFun - Produtos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <div className="w-60">
        <NavBar />  
      </div>

      <div className={styles.screen}>

      <BackgroundBanner/>
        
        
          <div className="w-full mt-11 px-3 rounded-2xl flex justify-between items-center">
            <DropDown />
            <AddButton />
          </div>
  
          <div className="grid  md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5  w-full place-items-center mt-40">
  
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

{
  /* <div className="md:col-span-2 lg:col-span-3 2xl:col-span-4 3xl:col-span-5 flex justify-around w-full mt-4 mb-4">
<DropDown />
<div>
  <h1></h1>
</div>
</div> */
}
