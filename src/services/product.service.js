/**
 * 
 * Serviço de produtos
 * 
 * @author codethebasics
 */

/**
 * Lista todas as produtos
 */
 const listProducts = async () => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/products`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`Product.service> Error while listing products`, e);
   }
}

/**
 * Busca produto pelo id
 */
const findProductById = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/products/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`Product.service> Error while searching Product by id ${id}`, e);
   }
}

/**
 * Insere novo Product
 */
const insertProduct = async (Product) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/Product`, {
         method: 'POST',
         body: JSON.stringify(Product),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`Product.service> Error while inserting Product`, e);
   }
}

/**
 * Atualiza produto
 */
const updateProduct = async (Product) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/products`, {
         method: 'PUT',
         body: JSON.stringify(Product),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`Product.service> Error while updating Product`, e);
   }
}

/**
 * Remove produto
 */
const removeProduct = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/products/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`Product.service> Error while removing Product by id ${id}`, e);
   }
}

export {
   listProducts,
   findProductById,
   insertProduct,
   updateProduct,
   removeProduct
}