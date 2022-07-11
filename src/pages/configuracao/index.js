import { NavBar } from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import  AddButton  from "../../components/AddButton";


import styles from "./styles.module.css"


export default function page() {
 return (
   <div className="flex">

    <div className="w-60"></div>
    <NavBar/>

    <div className={styles.screen}>
      <BackgroundBanner/>

      <div className="border border-black h-24 px-5 flex justify-end">
        <AddButton/>
      </div>

    </div>
   </div>
 );
}   