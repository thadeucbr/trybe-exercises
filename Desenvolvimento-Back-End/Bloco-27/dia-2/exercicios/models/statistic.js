const connection = require('../config/connect');

const statisticUfIncrement = async (data) => {
  await connection()
    .then(db => db.collection('statistic')
    .findOneAndUpdate({uf: data[0].uf}, {$inc:{quantidade: 1}}));
};

const statisticCityIncrement = async (data) => {
  await connection()
    .then(db => db.collection('statistic')
    .findOneAndUpdate({cidade: data[0].cidade}, {$inc:{quantidade: 1}}));
};

module.exports = {
  statisticUfIncrement,
  statisticCityIncrement,
}