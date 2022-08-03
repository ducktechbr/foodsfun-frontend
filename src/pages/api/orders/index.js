const orders = require('./orders.json');

export default async function handler(req, res) {
   const {
      body,
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const orders = await listOrders();
            if (orders.length) {
               res.status(200).json(orders);
            } else {
               res.status(200).json({message: 'Order list is empty'});
            }
            break;
         default: res.status(400).json({message: 'Method not allowed'});
      }
   } catch (e) {
      res.status(500).json({message: 'Error occurred while processing request', cause: e});
   }
}

/**
 * ---------------------------------
 * Lista todos as ordens cadastradas
 * ---------------------------------
 */
const listOrders = async () => {
   console.log('Listando ordens');
   return orders;
}

/**
 * -------------------
 * Cadastra nova ordem
 * -------------------
 */
 const insertOrder = async (Order) => {
   console.log(`Inserindo ordem ${JSON.stringify(Order)}`);
   orders.push(Order);
   return Order
}

/**
 * --------------
 * Atualiza ordem
 * --------------
 */
 const updateOrder = async (Order) => {

}