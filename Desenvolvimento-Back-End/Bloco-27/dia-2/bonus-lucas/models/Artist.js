const connection = require('../config/Connection');

const getAll = async () => {
  try {
    const query = await connection()
      .then(db => db.collection('artists').find().toArray());
    return query
  } catch (error) {
    console.log(error)
  }
}

const create = async (name) => {
  try {
    const artist = await connection()
      .then(db => db.collection('artists').insertOne({name}));
    return artist;
  } catch (error) {
    console.log(error);
  }
}

const update = async (oldArtist, newArtist) => {
  try {
    const updatedArtist = await connection()
      .then(db => db.collection('artists').updateOne({name: oldArtist}, {$set:{name: newArtist}}));
    return updatedArtist;
  } catch (error) {
    console.log(error)
  }
}

const remove = async (name) => {
  try {
    await connection()
      .then(db => db.collection('artists').deleteOne({name}));
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove
};