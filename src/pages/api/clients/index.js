const clients = require('./clients.json');

export default async function handler(req, res) {
   const {
      body,
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const clients = await listClients();
            if (clients.length) {
               res.status(200).json(clients);
            } else {
               res.status(200).json({message: 'Client list is empty'});
            }
            break;
         default: res.status(400).json({message: 'Method not allowed'});
      }
   } catch (e) {
      res.status(500).json({message: 'Error occurred while processing request', cause: e});
   }
}

/**
 * -----------------------------------
 * Lista todos os clientes cadastrados
 * -----------------------------------
 */
const listClients = async () => {
   console.log('Listando clientes');
   return clients;
}

/**
 * ---------------------
 * Cadastra novo cliente
 * ---------------------
 */
 const insertClient = async (client) => {
   console.log(`Inserindo cliente ${JSON.stringify(client)}`);
   clients.push(client);
   return client
}

/**
 * ----------------
 * Atualiza cliente
 * ----------------
 */
 const updateClient = async (client) => {

}