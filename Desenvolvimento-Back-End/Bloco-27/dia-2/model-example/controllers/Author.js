const Author = require('../services/Author');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
}

const create = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  const author = await Author.create(first_name, middle_name, last_name);
  if(!author) return res.status(400).json({message: 'Dados invalidos'});
  res.status(201).json(author);
}

module.exports = {
  getAll,
  create,
}