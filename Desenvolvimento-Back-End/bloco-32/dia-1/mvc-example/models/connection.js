const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'thadeu',
  database: 'mvc_example'});

module.exports = connection;