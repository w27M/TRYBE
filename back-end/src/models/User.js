const connection = require('./connection');
require('dotenv').config();

const updateUser = async (name, oldName) => {
  const [id] = await connection.execute(
    `SELECT * FROM Trybeer.users WHERE name = "${oldName}"`,
  );

  await connection.execute(
    `UPDATE Trybeer.users SET users.name = '${name}' WHERE id = '${id[0].id}'`,
  );
  return 'update Sucess';
};

module.exports = {
  updateUser,
};