const connection = require('./connection');
require('dotenv').config();

const login = async (email, password) => {
    const [user] = await connection.execute(
        `SELECT * FROM Trybeer.users WHERE email = "${email}" AND password = "${password}"`,
     );
    return user;
};

module.exports = { login };