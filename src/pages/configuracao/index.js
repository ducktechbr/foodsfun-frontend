import { NavBar } from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";

import styles from "./styles.module.css"


export default function page() {
 return (
   <div className="flex">

    <div className="w-60"></div>
    <NavBar/>

    <div className={styles.screen}>
      <BackgroundBanner/>     
    </div>
   </div>
 );
}   