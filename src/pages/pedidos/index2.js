import { useEffect, useState } from 'react';
import styles from './pedidos.module.scss';

import {
   listOrders,
   findOrderById,
   insertOrder,
   updateOrder,
   removeOrder
} from '../../services/order.service';

import {
   listTables,
   findTableById,
   insertTable,
   updateTable,
   removeTable
} from '../../services/table.service';

import {
   listUsers,
   findUserById,
   insertUser,
   updateUser,
   removeUser
} from '../../services/user.service';



/**
 * =================
 * Página de pedidos
 * =================
 */
export default function Pedidos() {
   const [user, setUser] = useState(null);

   useEffect(() => {
      
      // Busca estabelecimento pelo id
      // TODO: receber id do estabelecimento via props
      const fetchUser = async () => {
         const userFetched = await findUserById(5);
         setUser(userFetched);
      }
      fetchUser();

   }, []);

   /**
    * 
    * Renderiza produtos
    * 
    */
   const renderProducts = (products) => {
      return (
         products.map((product, index) => {
            return (
               <div key={index} className={styles.product}>
                  <div className={styles.productTitle}>{product.title}</div>
                  <div className={styles.productImage}>
                     <img width={200} src={product.image} alt='hamburger' />
                  </div>
                  <div className={styles.productPrice}>R$ {(product.price).toFixed(2)}</div>
                  <div className={styles.productDescription}>{product.description}</div>
                  
               </div>
            )
         })
      )
   }

   /**
    * 
    * Renderiza pedidos
    * 
    */
   const renderOrders = (orders) => {
      return (
         orders.map((order, index) => {
            return (
               <div key={index} className={styles.orders}>
                  <div className={styles.flexRowCenter}>
                     <div>Pedido</div>
                     <div>#{order.number}</div>
                  </div>
                  <div className={styles.flexRowCenter}>
                     <div>Quantidade</div>
                     <div>{order.quantity}</div>
                  </div>
                  <div className={styles.flexRowCenter}>
                     <div>Hora</div>
                     <div>{order.date}</div>
                  </div>
                  <div className={styles.flexRowCenter}>
                     <div>Descrição</div>
                     <div>{order.info}</div>
                  </div>               
                  <div className={styles.flexRowStart}>
                     <div className={styles.productContainer}>
                        <div className={styles.products}>
                           {renderProducts(order.products)}
                        </div>
                     </div>
                  </div>
                  <div className={styles.total}>
                     <div>TOTAL</div>
                     <div>R$ {(order.products.map(product => product.price).reduce((total, price) => total + price)).toFixed(2)}</div>
                  </div>
               </div>
            )
         })
      )
   }

   /**
    * 
    * Renderiza mesas
    * 
    */
   const renderTables = (tables) => {
      return (
         <div className={styles.tables}>
            <div className={styles.label}>Mesas</div>
            {
               tables.map((table, index) => {
                  return (
                     <div key={index} className={styles.tableCard}>
                        <div className={styles.header}>
                           <div>{table.active? 'Liberada' : 'Ocupada'}</div>
                           <div>#{table.number}</div>
                        </div>                        
                        <div className={styles.qrCodeContainer}>
                           { table.active 
                              ? <img width={200} src='https://miro.medium.com/max/960/0*zPG9dqz508rmRR70.' />
                              : table?.client.name
                           }                           
                        </div>
                        <div className={styles.ordersContainer}>
                           {!table.active && renderOrders(table.orders)}
                        </div>
                     </div>
                  )
               })
            }
         </div>
      )
   }

   return (
      <div className={styles.pedidosWrapper}>
         <div className={styles.pedidosContainer}>
            <div className={styles.userInfo}>
               <div className={styles.headerInfo}>
                  <div className={styles.userName}>{user?.userName}</div>
                  <div className={styles.userId}>#{user?.id}</div>
               </div>
               <div className={styles.email}>{user?.email}</div>
               <div className={styles.paymentMethods}>
                  <span>Aceitamos</span>
                  <ul>
                     {user?.paymentMethods?.dinheiro && <li><div>Dinheiro</div></li>}
                     {user?.paymentMethods?.cartao && <li><div>Cartão</div></li>}
                     {user?.paymentMethods?.pix && <li><div>PIX</div></li>}
                  </ul>
               </div>
            </div>
            { user && renderTables(user.tables) }  
         </div>
      </div>
   )
}