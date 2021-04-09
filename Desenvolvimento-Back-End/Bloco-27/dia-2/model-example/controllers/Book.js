const Books = require('../services/Book');

const getAll = async (_req, res) => {
  const books = await Books.getAll();
  if (!books) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(books);
}

const getById = async (req, res) => {
  const { id } = req.params;
  const books = await Books.getById(id);
  if (books.length < 1) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(books);
}

const create = async (req, res) => {
  const { title, author_id } = req.body;
  const book = Books.create(title, author_id);
  if(!book) return res.status(404).json({ message: 'Dados invalidos'});
  res.status(201).json({message: 'Livro adicionado com sucesso'});
}

module.exports = {
  getAll,
  getById,
  create
}