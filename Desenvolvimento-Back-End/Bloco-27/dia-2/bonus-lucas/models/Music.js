const connection = require('../config/Connection');

const getAll = async () => {
  try {
    const query = await connection()
      .then(db => db.collection('songs').find().toArray());
    return query;
  } catch (error) {
    console.error(error)
  }
}

const create = async (name, album) => {
  try {
    const query = await connection()
      .then(db => db.collection('songs').insertOne({name, album}));
    return query;
  } catch (error) {
    console.error(error)
  }
}

const updateMusic = async (oldName, name) => {
  try {
    const query = await connection()
      .then(db => db.collection('songs')
      .updateOne({name: oldName}, {$set:{name}}));
    return query;
  } catch (error) {
    console.error(error);
  }
};

const updateAlbum = async (oldAlbum, album) => {
  try {
    const query = await connection()
      .then(db => db.collection('songs')
      .updateOne({album: oldAlbum}, {$set:{album}}));
    return query;
  } catch (error) {
    console.error(error);
  }
};

const remove = async (name) => {
  try {
    const query = await connection()
    .then(db => db.collection('songs')
    .deleteOne({name: name}))
    return query;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAll,
  create,
  updateAlbum,
  updateMusic,
  remove
};