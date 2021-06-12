const mysql = require('mysql2/promise');
require('dotenv').config();

const { HOSTNAME, MYSQL_USER, MYSQL_PASSWORD } = process.env;

const connection = mysql.createPool({
  host: HOSTNAME,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: 'Trybeer',
});

module.exports = connection;