/**
 * 
 * Serviço de categoria
 * 
 * @author codethebasics
 */

/**
 * Lista todas as categorias
 */
const listCategory = async () => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/categories`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`category.service> Error while listing categories`, e);
   }
}

/**
 * Busca categoria pelo id
 */
const findCategoryById = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/categories/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`category.service> Error while searching category by id ${id}`, e);
   }
}

/**
 * Insere nova categoria
 */
const insertCategory = async (category) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/categories`, {
         method: 'POST',
         body: JSON.stringify(category),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`category.service> Error while inserting category`, e);
   }
}

/**
 * Atualiza categoria
 */
const updateCategory = async (category) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/categories`, {
         method: 'PUT',
         body: JSON.stringify(category),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`category.service> Error while updating category`, e);
   }
}

/**
 * Remove categoria
 */
const removeCategory = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/categories/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`category.service> Error while removing category by id ${id}`, e);
   }
}

export {
   listCategory,
   findCategoryById,
   insertCategory,
   updateCategory,
   removeCategory
}