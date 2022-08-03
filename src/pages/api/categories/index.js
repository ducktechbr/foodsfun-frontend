const categories = require('./categories.json');

export default async function handler(req, res) {
   const {
      body,
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const categories = await listCategories();
            if (categories.length) {
               res.status(200).json(categories);
            } else {
               res.status(200).json({message: 'Category list is empty'});
            }
            break;
         default: res.status(400).json({message: 'Method not allowed'});
      }
   } catch (e) {
      res.status(500).json({message: 'Error occurred while processing request', cause: e});
   }
}

/**
 * -------------------------------------
 * Lista todos as categorias cadastrados
 * -------------------------------------
 */
const listCategories = async () => {
   console.log('Listando categoria');
   return categories;
}

/**
 * -----------------------
 * Cadastra nova categoria
 * -----------------------
 */
 const insertCategory = async (Category) => {
   console.log(`Inserindo categoria ${JSON.stringify(Category)}`);
   categories.push(Category);
   return Category
}

/**
 * ------------------
 * Atualiza categoria
 * ------------------
 */
 const updateCategory = async (Category) => {

}