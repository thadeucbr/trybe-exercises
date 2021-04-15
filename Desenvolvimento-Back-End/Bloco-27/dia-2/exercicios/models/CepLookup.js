const connection = require('../config/connect');

const getCep = async (cep) => {
  try {
    const result = await connection()
      .then((db) => db.collection('cep').find({cep}).toArray());
    return result;
  } catch (error) {
    console.log(error)
  }
};

const addCep = async ({cep, uf, cidade, bairro, logradouro}) => {
  try {
    const addres = await connection()
      .then((db) => db.collection('cep').insertOne({cep, uf, cidade, bairro, logradouro}));
    await connection().then(db => db.collection('statistic').insertOne({uf: addres.ops[0].uf, quantidade: 1}))
    await connection().then(db => db.collection('statistic').insertOne({cidade: addres.ops[0].cidade, quantidade: 1}))
    return addres;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCep,
  addCep,
};