import styles from './pedidos.module.scss';

/**
 * =================
 * Página de pedidos
 * =================
 */
export default function Pedidos() {

   // Pedidos da mesa
   const pedidos = [
      {
         id: 1,
         produtos: [
            {
               id: '#1',
               nome: 'Hamburger',
               observacao: 'Com maionese',
               preco: 10.0,
               quantidade: 2
            },
            {
               id: '#2',
               nome: 'Batata frita',
               observacao: 'Sem sal',
               preco: 5.0,
               quantidade: 2
            },
            {
               id: '#3',
               nome: 'Refrigerante',
               observacao: 'Coca-Cola',
               preco: 4.0,
               quantidade: 2
            }
         ]
      }
   ];

   // Mesas do estabelecimento
   const mesas = [
      {
         idMesa: 1,
         pedidos: pedidos
      },
   ];

   /**
    * ------------------------
    * Renderiza todas as mesas
    * ------------------------
    */
   const renderMesas = () => {
      return mesas.map((mesa, index) => { 
         return (
            <div key={index} className={styles.mesa}>
               <div>
                  <div className={styles.header}>Mesa #{mesa.idMesa}</div>
                  <div className={styles.pedidosContainer}>
                     {renderPedidosByMesaId(1)}
                  </div>
               </div>
            </div>
         )
      })
   }

   /**
    * --------------------------------------------
    * Renderiza todos os pedidos da mesa informada
    * --------------------------------------------
    */
   const renderPedidosByMesaId = (mesaId) => {
      return pedidos.map((pedido, index) => {
         return (
            <div key={index} className={styles.produtosContainer}>
               {renderProdutosByPedidoId(pedido.id)}
            </div>
         )
      })
   }

   /**
    * ----------------------------------------------------
    * Renderiza todos os produtos de um determinado pedido
    * ----------------------------------------------------
    */
   const renderProdutosByPedidoId = (pedidoId) => {
      const pedido = pedidos.find(pedido => pedido.id === pedidoId);
      const produtos = pedido.produtos;
      if (produtos) {
         return produtos.map((produto, index) => {
            return (
               <div className={styles.list} key={index}>
                  <div className={styles.item}>
                     <div>ID</div>
                     <div>{produto.id}</div>
                  </div>
                  <div className={styles.item}>
                     <div>Produto</div>
                     <div>{produto.nome}</div>
                  </div>
                  <div className={styles.item}>
                     <div>Observação</div>
                     <div>{produto.observacao}</div>
                  </div>
                  <div className={styles.item}>
                     <div>Quantidade</div>
                     <div>{produto.quantidade}</div>
                  </div>
                  <div className={styles.item}>
                     <div>Valor</div>
                     <div>R$ {produto.preco.toFixed(2)}</div>
                  </div>
                  <div className={styles.separator}></div>
               </div>
            )
         })
      } else {
         return <div>Nenhum pedido realizado</div>
      }
   }

   return (
      <div className={styles.pedidosWrapper}>
         <div className={styles.pedidosContainer}>
            { renderMesas() }         
         </div>
      </div>
   )
}