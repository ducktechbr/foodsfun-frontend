/**
 * 
 * Serviço de mesas
 * 
 * @author codethebasics
 */

/**
 * Lista todas as mesas
 */
 const listTables = async () => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/tables`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`table.service> Error while listing tables`, e);
   }
}

/**
 * Busca mesa pelo id
 */
const findTableById = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/tables/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`table.service> Error while searching table by id ${id}`, e);
   }
}

/**
 * Insere novo table
 */
const insertTable = async (table) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/table`, {
         method: 'POST',
         body: JSON.stringify(table),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`table.service> Error while inserting table`, e);
   }
}

/**
 * Atualiza mesa
 */
const updateTable = async (table) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/tables`, {
         method: 'PUT',
         body: JSON.stringify(table),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`table.service> Error while updating table`, e);
   }
}

/**
 * Remove mesa
 */
const removeTable = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/tables/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`table.service> Error while removing table by id ${id}`, e);
   }
}

export {
   listTables,
   findTableById,
   insertTable,
   updateTable,
   removeTable
}