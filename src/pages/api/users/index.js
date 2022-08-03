const users = require('./users.json');

export default async function handler(req, res) {
   const {
      body,
      method,
   } = req;
   
   try {
      switch (method) {
         case 'GET':
            const users = await listUsers();
            if (users.length) {
               res.status(200).json(users);
            } else {
               res.status(200).json({message: 'User list is empty'});
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
 * Lista todos os usuários cadastrados
 * -----------------------------------
 */
const listUsers = async () => {
   console.log('Listando usuários');
   return users;
}

/**
 * ---------------------
 * Cadastra novo Usere
 * ---------------------
 */
 const insertUser = async (User) => {
   console.log(`Inserindo Usere ${JSON.stringify(User)}`);
   users.push(User);
   return User
}

/**
 * ----------------
 * Atualiza Usere
 * ----------------
 */
 const updateUser = async (User) => {

}