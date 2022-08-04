import Head from "next/head";

import { IoIosArrowDropright } from "react-icons/io";

import NavBar from "../../components/NavBar/index";
import { BackgroundBanner } from "../../components/BackgroundBanner";
import AddOrder from "../../components/AddOrder";
import { api } from "../../api";

import { ProtectedRoute } from "../../middlewares/protectedRoute";
import { useEffect, useMemo, useState } from "react";
import DivPedidos from "../../components/DivPedidos";
import styles from './pedidos.module.scss';

function Page() {
  const [pedidos, setPedidos] = useState({ data: [
    {
      "id": "62eab13c642440932e7d0d2a",
      "number": 1,
      "title": "Bigotten",
      "quantity": 2,
      "info": "Do vitao",
      "date": "2022-08-03T17:32:44.416Z",
      "active": false,
      "tableId": "62e974bdc7b686586fbb7064",
      "clientId": "62eab12a642440932e7d0d28",
      "checkId": "62eab13c642440932e7d0d29",
      "productId": "62e9337a6ab595195ab80734"
    },
    {
      "id": "62eab160642440932e7d0d2b",
      "number": 2,
      "title": "Duckao",
      "quantity": 3,
      "info": "Do higao (sem nada)",
      "date": "2022-08-03T17:33:20.051Z",
      "active": false,
      "tableId": "62e974bdc7b686586fbb7064",
      "clientId": "62eab12a642440932e7d0d28",
      "checkId": "62eab13c642440932e7d0d29",
      "productId": "62e836d3edb8cb79de964df8"
    },
    {
      "id": "62eab168642440932e7d0d2c",
      "number": 3,
      "title": "Duckao",
      "quantity": 1,
      "info": "",
      "date": "2022-08-03T17:33:28.275Z",
      "active": false,
      "tableId": "62e974bdc7b686586fbb7064",
      "clientId": "62eab12a642440932e7d0d28",
      "checkId": "62eab13c642440932e7d0d29",
      "productId": "62e836d3edb8cb79de964df8"
    },
    {
      "id": "62eab602ab429942cb2b7990",
      "number": 4,
      "title": "Duckao",
      "quantity": 1,
      "info": "sssdgfsdg",
      "date": "2022-08-03T17:53:06.661Z",
      "active": false,
      "tableId": "62e974bdc7b686586fbb7064",
      "clientId": "62eab12a642440932e7d0d28",
      "checkId": "62eab13c642440932e7d0d29",
      "productId": "62e836d3edb8cb79de964df8"
    },
    {
      "id": "62eab60fab429942cb2b7991",
      "number": 5,
      "title": "Bigotten",
      "quantity": 2,
      "info": "fvdasgsd\\g",
      "date": "2022-08-03T17:53:19.091Z",
      "active": false,
      "tableId": "62e974bdc7b686586fbb7064",
      "clientId": "62eab12a642440932e7d0d28",
      "checkId": "62eab13c642440932e7d0d29",
      "productId": "62e9337a6ab595195ab80734"
    },
    {
      "id": "62eac1ce29dc85883b51e776",
      "number": 6,
      "title": "xelada",
      "quantity": 5,
      "info": "NOSSA",
      "date": "2022-08-03T18:43:26.023Z",
      "active": false,
      "tableId": "62eac0ae5ab1639a6ef43af9",
      "clientId": "62e7e26463c62b9524330eea",
      "checkId": "62eac1ce29dc85883b51e775",
      "productId": "62e836d3edb8cb79de964df8"
    },
    {
      "id": "62eac1d029dc85883b51e778",
      "number": 7,
      "title": "xelada",
      "quantity": 5,
      "info": "NOSSA",
      "date": "2022-08-03T18:43:28.833Z",
      "active": true,
      "tableId": "62eac0ae5ab1639a6ef43af9",
      "clientId": "62e7e26463c62b9524330eea",
      "checkId": "62eac1d029dc85883b51e777",
      "productId": "62e836d3edb8cb79de964df8"
    }
  ] });
  const [pedidosSemOrdem, setPedidosSemOrdem] = useState({
    data: [{ title: "teste" }],
  });

  useEffect(() => {
    // getOrders();
  }, []);

  // useEffect(() => {
  //   var arrayPedidos = [];
  //   if (typeof pedidosSemOrdem.data === Array) {
  //     arrayPedidos = pedidosSemOrdem.data;
  //   }

  //   setPedidos({
  //     data: arrayPedidos.sort((a, b) =>
  //       a.number < b.number ? 1 : b.number < a.number ? -1 : 0
  //     ),
  //   });
  // }, [pedidosSemOrdem]);

  async function getOrders() {
    setPedidosSemOrdem(await api.get(`/getOrders`));
  }

  return (
    <div>
      {/* <NavBar /> */}
      <div className={styles.pedidosContainer}>
        <div className={styles.bannerSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.userBrand}>Bar do Zé</div>
            <div className={styles.uploadImageContainer}>
              <button>Enviar imagem +</button>
            </div>            
          </div>          
        </div>
        <div className={styles.tableSection}>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>Pedido</th>
                  <th>Mesa</th>
                  <th>Quantidade</th>
                  <th>Produto</th>
                  <th>Status</th>
                </tr>
              </thead>       
              <tbody>
              {pedidos.data
              ? pedidos.data.map((pedido, key) => {
                  return (
                  <tr key={key}>
                    <td>{pedido.number}</td>
                    <td>{pedido.number}</td>
                    <td>{pedido.quantity}</td>
                    <td>{pedido.title}</td>
                    <td>
                      <span className={pedido.active ? styles.waitingBadge: styles.successBadge}>{pedido.active ? 'Pendente' : 'Concluído'}</span>
                    </td>
                  </tr>                
                  );
                })
              : null}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <div>
              <button className={styles.hamburgerButton}>
                <img width={25} src='/hamburger.svg' />
              </button>
            </div>
            <div>
              <button>Adicionar +</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex">
    //   <Head>
    //     <title>FoodsFun - Pedidos</title>
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //   </Head>
    //   <div className="w-60"></div>
    //   <NavBar />

    //   <div className={styles.screen}>
    //     <BackgroundBanner />

    //     <div className="mt-5 px-5 flex justify-end">
    //       <AddOrder />
    //     </div>
    //     <div className="mt-14 mx-4 h-48 border-2 rounded-2xl bg-white ">
    //       <div className="space-y-0  h-16 bg-themeOrange text-white text-[1.3rem] py-2 px-2 rounded-t-lg">
    //         <div className="flex justify-around mt-2 bg-transparent">
    //           <div className="w-1/8 bg-transparent">Pedido</div>
    //           <div className="w-1/8 bg-transparent flex">
    //             Mesa
    //             <button>
    //               <IoIosArrowDropright
    //                 size={25}
    //                 color="#fff"
    //                 style={{
    //                   backgroundColor: "transparent",
    //                   marginLeft: "2px",
    //                 }}
    //               />
    //             </button>
    //           </div>

    //           <div className="w-1/8 bg-transparent">Quantidade</div>
    //           <div className="w-4/8 bg-transparent">Produto</div>
    //           <div className="w-1/8 bg-transparent flex">
    //             Status
    //             <button type="button">
    //               <IoIosArrowDropright
    //                 size={25}
    //                 color="#fff"
    //                 style={{
    //                   backgroundColor: "transparent",
    //                   marginLeft: "2px",
    //                 }}
    //               />
    //             </button>
    //           </div>
    //         </div>
    //         {/* as proximas divs serao geradas automaticamente */}
    //       </div>
    //       <div className="mt-5">
    //         {pedidos.data
    //           ? pedidos.data.map((current, key) => {
    //               return <DivPedidos current={current} key={key} />;
    //             })
    //           : null}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default function Pedidos() {
  return <ProtectedRoute component={Page} />;
}
