const Artist = require('../models/Artist');

const getAll = async () => {
  try {
    const result = await Artist.getAll()
    if(!result) return {message: 'Não existem artistas cadastrados'};
    return result;
  } catch (error) {
    console.log(error);
  }
};

const create = async (name) => {
  try {
    if(!name) return {message: 'O nome do artista a ser adicionado é obrigatorio'};
    if(name.length < 2) return {message: 'O nome do artista deve conter ao menos 2 caracteres'};
    const result = await Artist.create(name);
    return result;
  } catch (error) {
    console.log(error)
  }
}

const update = async (oldArtist, newArtist) => {
  try {
    if(!oldArtist || !newArtist) return {message: 'O nome do artista é obrigatorio'};
    if(newArtist.length < 2) return {message: 'O nome do artista deve conter ao menos 2 caracteres'};
    const result = await Artist.update(oldArtist, newArtist);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const remove = async (name) => {
  try {
    if(!name) return {message: 'O nome do artista é obrigatorio'};
    const result = await Artist.remove(name);
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  getAll,
  create,
  update,
}