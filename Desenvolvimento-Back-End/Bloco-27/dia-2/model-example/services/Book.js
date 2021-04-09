 const Books = require('../models/Book');

 const isValid = async (title, author_id) => {
  const [author] = await connect.execute(
    'SELECT id FROM model_example.authors WHERE id = ?',
    [author_id]
  );
  if(!title || title.length < 3) return false;
  if(!author_id || author.length < 1) return false;
  return true;
}

const getAll = async () => {
  const books = await Books.getAll();
  
  if(!books) return null;
  return books;
}

const getById = async () => {
  const book = await Books.getById();
  
  if(!book) return null;
  return book;
}

const create = async () => {
  const newBook = await Books.create();

  if(!newBook) return null;
  return newBook;
}

module.exports = {
  isValid,
  getAll,
  getById,
  create,
}