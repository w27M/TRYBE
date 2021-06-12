const connection = require('./connection');
require('dotenv').config();

const register = async (name, email, password, role) => {
  const [user] = await connection.execute(
    `INSERT INTO Trybeer.users (name, email, password, role) 
            VALUES ("${name}","${email}","${password}","${role}")`,
  );
  return user;
};

const getUser = async (email) => {
  const [user] = await connection.execute(
    `SELECT * FROM Trybeer.users WHERE email = "${email}"`,
  );
  return user;
};

module.exports = {
  register,
  getUser,
};
