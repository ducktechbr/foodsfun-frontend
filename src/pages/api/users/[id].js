const users = require('./users.json');

export default async function handler(req, res) {
   const {
      query: { id },
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const recoveredUser = await getUserById(id);
            if (recoveredUser) {
               res.status(200).json(recoveredUser);
            } else {
               res.status(200).json({message: 'User not found'});
            }
            break;
         case 'DELETE':
            const deletedUser = await removeUserById(id);
            if (deletedUser) {
               res.status(200).json(deletedUser);
            } else {
               res.status(200).json({message: 'User not found'});
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
 * Busca Usere pelo id
 * ---------------------
 */
const getUserById = async (userId) => {
   return users.find(user => user.id == userId);
}

/**
 * ----------------------
 * Remove Usere pelo id
 * ----------------------
 */
const removeUserById = async (userId) => {
   return users.find(user => user.id == userId);
}