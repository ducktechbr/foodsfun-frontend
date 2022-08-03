const categories = require('./categories.json');

export default async function handler(req, res) {
   const {
      query: { id },
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const recoveredCategory = await getCategoryById(id);
            if (recoveredCategory) {
               res.status(200).json(recoveredCategory);
            } else {
               res.status(200).json({message: 'Category not found'});
            }
            break;
         case 'DELETE':
            const deletedCategory = await removeCategoryById(id);
            if (deletedCategory) {
               res.status(200).json(deletedCategory);
            } else {
               res.status(200).json({message: 'Category not found'});
            }
            break;
         default: res.status(400).json({message: 'Method not allowed'});
      }
   } catch (e) {
      res.status(500).json({message: 'Error occurred while processing request', cause: e});
   }
}

/**
 * -----------------------
 * Busca categoria pelo id
 * -----------------------
 */
const getCategoryById = async (CategoryId) => {
   return categories.find(user => user.id == CategoryId);
}

/**
 * ------------------------
 * Remove categoria pelo id
 * ------------------------
 */
const removeCategoryById = async (CategoryId) => {
   return categories.find(user => user.id == CategoryId);
}