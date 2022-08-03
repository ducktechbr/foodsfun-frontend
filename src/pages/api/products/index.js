const products = require('./products.json');

export default async function handler(req, res) {
   const {
      body,
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const products = await listProducts();
            if (products.length) {
               res.status(200).json(products);
            } else {
               res.status(200).json({message: 'Product list is empty'});
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
 * Lista todos os produtos cadastrados
 * -----------------------------------
 */
const listProducts = async () => {
   console.log('Listando produtos');
   return products;
}

/**
 * ---------------------
 * Cadastra novo produto
 * ---------------------
 */
 const insertProduct = async (Product) => {
   console.log(`Inserindo produto ${JSON.stringify(Product)}`);
   products.push(Product);
   return Product
}

/**
 * ----------------
 * Atualiza produto
 * ----------------
 */
 const updateProduct = async (Product) => {

}