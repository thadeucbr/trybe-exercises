const { ObjectId } = require('bson');
const connect = require('./connection');

// const getAll = async () => {
//   const [books] =  await connect.execute(
//     'SELECT id, title, author_id FROM model_example.books'
//   );
//   return books;
// };

const getAll = async () => {
  return connect()
    .then((db) => db.collection('books').find().toArray());
};

const getById = async (id) => {
  const books = await connect().then((db) => db.collection('books').findOne(ObjectId(id)));
  if (!books) return null;
  return books;
};

const isValid = async (title, author_id) => {
  const [author] = await connect.execute(
    'SELECT id FROM model_example.authors WHERE id = ?',
    [author_id]
  );
  if(!title || title.length < 3) return false;
  if(!author_id || author.length < 1) return false;
  return true;
}

// const create = async (title, author_id) => await connect.execute(
//   'INSERT INTO model_example.books VALUES (?,?,?)',
//   [null, title, author_id]
// )

const create = async (title, author_id) => {
  connect()
    .then((db) => db.collection('books').insertOne({ title, author_id }));
}

module.exports = ({
  getAll,
  getById,
  isValid,
  create,
});