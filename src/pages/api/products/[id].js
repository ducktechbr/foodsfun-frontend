const products = require('./products.json');

export default async function handler(req, res) {
   const {
      query: { id },
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const recoveredProduct = await getProductById(id);
            if (recoveredProduct) {
               res.status(200).json(recoveredProduct);
            } else {
               res.status(200).json({message: 'Product not found'});
            }
            break;
         case 'DELETE':
            const deletedProduct = await removeProductById(id);
            if (deletedProduct) {
               res.status(200).json(deletedProduct);
            } else {
               res.status(200).json({message: 'Product not found'});
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
 * Busca Producte pelo id
 * ---------------------
 */
const getProductById = async (ProductId) => {
   return products.find(user => user.id == ProductId);
}

/**
 * ----------------------
 * Remove Producte pelo id
 * ----------------------
 */
const removeProductById = async (ProductId) => {
   return products.find(user => user.id == ProductId);
}