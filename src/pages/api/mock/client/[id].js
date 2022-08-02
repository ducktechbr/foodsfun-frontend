const clients = require('./clients.json');

export default async function handler(req, res) {
   const {
      query: { id },
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const recoveredClient = await getClientById(id);
            if (recoveredClient) {
               res.status(200).json(recoveredClient);
            } else {
               res.status(200).json({message: 'Client not found'});
            }
            break;
         case 'DELETE':
            const deletedClient = await removeClientById(id);
            if (deletedClient) {
               res.status(200).json(deletedClient);
            } else {
               res.status(200).json({message: 'Client not found'});
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
 * Busca cliente pelo id
 * ---------------------
 */
const getClientById = async (clientId) => {
   return clients.find(user => user.id == clientId);
}

/**
 * ----------------------
 * Remove cliente pelo id
 * ----------------------
 */
const removeClientById = async (clientId) => {
   return clients.find(user => user.id == clientId);
}