const orders = require('./orders.json');

export default async function handler(req, res) {
   const {
      query: { id },
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const recoveredOrder = await getOrderById(id);
            if (recoveredOrder) {
               res.status(200).json(recoveredOrder);
            } else {
               res.status(200).json({message: 'Order not found'});
            }
            break;
         case 'DELETE':
            const deletedOrder = await removeOrderById(id);
            if (deletedOrder) {
               res.status(200).json(deletedOrder);
            } else {
               res.status(200).json({message: 'Order not found'});
            }
            break;
         default: res.status(400).json({message: 'Method not allowed'});
      }
   } catch (e) {
      res.status(500).json({message: 'Error occurred while processing request', cause: e});
   }
}

/**
 * ---------------------
 * Busca ordem pelo id
 * ---------------------
 */
const getOrderById = async (OrderId) => {
   return orders.find(user => user.id == OrderId);
}

/**
 * ----------------------
 * Remove ordem pelo id
 * ----------------------
 */
const removeOrderById = async (OrderId) => {
   return orders.find(user => user.id == OrderId);
}