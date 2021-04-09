const connection = require('./connection');
const ObjectID = require('mongodb').ObjectID;

const create = async (firstName, lastName, email, password) => {
  await connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password}));
}

const update = async (id, firstName, lastName, email, password) => {
  await connection()
    .then((db) => db.collection('users')
    .updateOne({"_id": ObjectID(id)}, {$set:{firstName, lastName, email, password}}))
}

const getById = async (id) => {
  const users = await connection().then((db) => db.collection('users').findOne((ObjectID(id))));
  return users;
}

const checkFields = async (firstName, lastName, email, password) => {
  if(!firstName || !lastName || !email || !password) return false;
  return true;
}

const checkPassword = async (password) => {
  if(password.length < 6) return false;
  return true;
}

const getAll = async () => {
  const response = await connection()
    .then((db) => db.collection('users').find().toArray());
  return response;
}

module.exports = {
  create,
  getById,
  checkFields,
  checkPassword,
  getAll,
  update,
}