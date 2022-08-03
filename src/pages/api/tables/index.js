const tables = require('./tables.json');

export default async function handler(req, res) {
   const {
      body,
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const tables = await listTables();
            if (tables.length) {
               res.status(200).json(tables);
            } else {
               res.status(200).json({message: 'table list is empty'});
            }
            break;
         default: res.status(400).json({message: 'Method not allowed'});
      }
   } catch (e) {
      res.status(500).json({message: 'Error occurred while processing request', cause: e});
   }
}

/**
 * --------------------------------
 * Lista todos os mesas cadastrados
 * --------------------------------
 */
const listTables = async () => {
   console.log('Listando mesas');
   return tables;
}

/**
 * ------------------
 * Cadastra novo mesa
 * ------------------
 */
 const insertTable = async (table) => {
   console.log(`Inserindo mesa ${JSON.stringify(table)}`);
   tables.push(table);
   return table
}

/**
 * -------------
 * Atualiza mesa
 * -------------
 */
 const updateTable = async (table) => {

}