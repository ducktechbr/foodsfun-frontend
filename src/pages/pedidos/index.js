import Head from "next/head";

import { NavBar } from "../../components/NavBar";
import { DropDown } from "../../components/Dropdown";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import AddButton from "../../components/AddButton";

import { ProtectedRoute } from "../../middlewares/protectedRoute";

import styles from "./styles.module.css";

function Page() {
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

        <div className="w-full mt-11 px-3 rounded-2xl flex justify-between items-center">
          <DropDown />
          <AddButton />
        </div>


        
        <div className="mt-11 mx-4 h-48 border-2 rounded-2xl bg-white ">
          <div className='space-y-0  h-11 bg-themeOrange text-white text-[1.3rem] py-2 px-2 rounded-2xl'>
            <div className="flex justify-around bg-transparent">
              <div className="w-1/8 bg-transparent">Pedido</div>
              <div className="w-1/8 bg-transparent">Mesa</div>
              <div className="w-1/8 bg-transparent">Quantidade</div>
              <div className="w-4/8 bg-transparent">Produto</div>
              <div className="w-1/8 bg-transparent">Status</div>
            </div>
            {/* as proximas divs serao geradas automaticamente */}
          </div>

          <div className="flex mt-5 px-2 bg-white">
            <div className="w-1/8 bg-white"><span className="p-2 rounded-2xl bg-white border ">002</span></div>
            <div className="w-1/8 bg-white"><span className="p-2 rounded-2xl bg-white border ">22</span></div>
            <div className="w-1/8 bg-white"><span className="p-2 rounded-2xl bg-white border ">05</span></div>
            <div className="w-4/8 bg-white"><span className="rounded-2xl bg-white ">Hamburguer</span></div>
            <div className="w-1/8 bg-white"><span className="p-2 rounded-2xl bg-white border J">Concluido</span></div>
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default function Pedidos() {
  return <ProtectedRoute component={Page} />;
}
