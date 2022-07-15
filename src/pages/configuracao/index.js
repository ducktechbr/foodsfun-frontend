import { NavBar } from "../../components/NavBar";
import { BackgroundBanner } from "../../components/BackgroundBanner";

import { ToggleButton } from "../../components/ToggleButton";





import styles from "./styles.module.css"


export default function page() {
 return (
   <div>

    <div className="w-60"></div>
    <NavBar/>

    <div>
      <BackgroundBanner/>

    </div>

  
      <div className="ml-80"><ToggleButton/></div>
      <div className="ml-80"><ToggleButton/></div>
      <div className="ml-80"><ToggleButton/></div>
    

   </div>
 );
}   