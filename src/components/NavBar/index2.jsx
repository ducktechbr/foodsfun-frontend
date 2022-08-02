import styles from "./style.module.css";

/**
 * -------------------------------------------
 * Refactor de navbar aplicando responsividade
 * -------------------------------------------
 */
export default function Navbar() {
   return (
      <div className={styles.navbar}>
         <div className="bg-themeWhite font-theme">
            <div className={styles.brand}>
               <img width={160} src="/logo.png" />
            </div>
            <div className={styles.navlinks}>
               <ul>
                  <li>Pedidos</li>
                  <li>Produtos</li>
                  <li>Mesas</li>
                  <li>Configurações</li>
               </ul>
            </div>
         </div>
      </div>
   );
}