/**
 * 
 * Serviço de ordens
 * 
 * @author codethebasics
 */

/**
 * Lista todas as ordens
 */
 const listOrders = async () => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/orders`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`order.service> Error while listing orders`, e);
   }
}

/**
 * Busca ordem pelo id
 */
const findOrderById = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/orders/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`order.service> Error while searching order by id ${id}`, e);
   }
}

/**
 * Insere novo order
 */
const insertOrder = async (order) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/order`, {
         method: 'POST',
         body: JSON.stringify(order),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`order.service> Error while inserting order`, e);
   }
}

/**
 * Atualiza ordem
 */
const updateOrder = async (order) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/orders`, {
         method: 'PUT',
         body: JSON.stringify(order),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`order.service> Error while updating order`, e);
   }
}

/**
 * Remove ordem
 */
const removeOrder = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/orders/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`order.service> Error while removing order by id ${id}`, e);
   }
}

export {
   listOrders,
   findOrderById,
   insertOrder,
   updateOrder,
   removeOrder
}