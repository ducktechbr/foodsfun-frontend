/**
 * 
 * Serviço de usuários
 * 
 * @author codethebasics
 */

/**
 * Lista todas as usuários
 */
 const listUsers = async () => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/users`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`user.service> Error while listing users`, e);
   }
}

/**
 * Busca usuário pelo id
 */
const findUserById = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/users/${id}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`user.service> Error while searching user by id ${id}`, e);
   }
}

/**
 * Insere novo user
 */
const insertUser = async (user) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/user`, {
         method: 'POST',
         body: JSON.stringify(user),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`user.service> Error while inserting user`, e);
   }
}

/**
 * Atualiza usuário
 */
const updateUser = async (user) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/users`, {
         method: 'PUT',
         body: JSON.stringify(user),
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`user.service> Error while updating user`, e);
   }
}

/**
 * Remove usuário
 */
const removeUser = async (id) => {
   try {
      return await fetch(`${process.env.NEXT_PUBLIC_API_URI}/users/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }).then(response => response.json());
   } catch (e) {
      console.log(`user.service> Error while removing user by id ${id}`, e);
   }
}

export {
   listUsers,
   findUserById,
   insertUser,
   updateUser,
   removeUser
}