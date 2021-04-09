const Author = require('../models/Author');

const isValid = (firstName, _middleName, lastName) => {
  if(!firstName || typeof firstName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;
  return true;
}

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
  };

  const getAll = async () => {
    const authors = await Author.getAll();

    return authors.map(getNewAuthor);
  }

  const findById = async (id) => {
    const author = await Author.findById(id)

    return getNewAuthor(author)
  }

  const create = async (firstName, middleName, lastName) => {
    const valid = isValid(firstName, middleName, lastName);

    if(!valid) return false;

    const teste = await Author.create(firstName, middleName, lastName);
    return teste
  }

  module.exports = {
    getAll,
    findById,
    create
  }