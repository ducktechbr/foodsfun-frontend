const tables = require('./tables.json');

export default async function handler(req, res) {
   const {
      query: { id },
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const recoveredTable = await getTableById(id);
            if (recoveredTable) {
               res.status(200).json(recoveredTable);
            } else {
               res.status(200).json({message: 'Table not found'});
            }
            break;
         case 'DELETE':
            const deletedTable = await removeTableById(id);
            if (deletedTable) {
               res.status(200).json(deletedTable);
            } else {
               res.status(200).json({message: 'Table not found'});
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
 * Busca mesa pelo id
 * ---------------------
 */
const getTableById = async (TableId) => {
   return tables.find(user => user.id == TableId);
}

/**
 * ----------------------
 * Remove mesa pelo id
 * ----------------------
 */
const removeTableById = async (TableId) => {
   return tables.find(user => user.id == TableId);
}