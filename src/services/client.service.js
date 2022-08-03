/**
 * 
 * Serviço de cliente
 * 
 * @author codethebasics
 */

/**
 * Lista todas os clientes
 */
 const listClients = async () => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/clients`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`client.service> Error while listing clients`, e);
   }
}

/**
 * Busca cliente pelo id
 */
const findClientById = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/clients/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`client.service> Error while searching client by id ${id}`, e);
   }
}

/**
 * Insere novo client
 */
const insertClient = async (client) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/client`, {
         method: 'POST',
         body: JSON.stringify(client),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`client.service> Error while inserting client`, e);
   }
}

/**
 * Atualiza cliente
 */
const updateClient = async (client) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/clients`, {
         method: 'PUT',
         body: JSON.stringify(client),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`client.service> Error while updating client`, e);
   }
}

/**
 * Remove cliente
 */
const removeClient = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/clients/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`client.service> Error while removing client by id ${id}`, e);
   }
}

export {
   listClients,
   findClientById,
   insertClient,
   updateClient,
   removeClient
}