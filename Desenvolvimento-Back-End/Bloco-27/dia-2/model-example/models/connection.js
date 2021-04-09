// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'thadeu',
//   database: 'model_example'
// });

// module.exports = connection;

const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;