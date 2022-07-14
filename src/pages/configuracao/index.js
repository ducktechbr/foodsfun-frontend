import { NavBar } from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";

import { ToggleButton } from "../../components/ToggleButton";





import styles from "./styles.module.css"


export default function page() {
 return (
   <div className="flex-col">

    <div className="w-60"></div>
    <NavBar/>

    <div className={styles.screen}>
      <BackgroundBanner/>

    </div>

  
      <div className="ml-80"><ToggleButton/></div>
      <div className="ml-80"><ToggleButton/></div>
      <div className="ml-80"><ToggleButton/></div>
    

   </div>
 );
}   