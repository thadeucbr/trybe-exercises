const Music = require('../models/Music');

const getAll = async () => {
  try {
    const result = await Music.getAll();
    if(!result) return {message: "Não existem musicas cadastradas"};
    return result
  } catch (error) {
    console.error(error)
  }
}

const create = async (name, album) => {
  try {
    if(!name || !album) return {message: "O nome da musica e do album são obrigatorios"}
    const result = await Music.create(name, album)
    return result;
  } catch (error) {
    console.error(error)
  }
}

const updateMusic = async (oldMusic, music) => {
  try {
    if(!oldMusic || !music) return {message: "O nome da musica a ser modificado e o nome da nova musica são obrigatorios"}
    const result = await Music.updateMusic(oldAlbum, album);
    return result;
  } catch (error) {
    console.error(error)
  }
}

const updateAlbum = async (oldName, name) => {
  try {
    if(!oldName || !name) return {message: "O nome do album a ser modificado e o nome do novo album são obrigatorios"}
    const result = await Music.updateAlbum(oldName, name)
    return result;
  } catch (error) {
    console.error(error)
  }
}

const remove = async (name) => {
  try {
    if(!name) return {message: "O nome é obrigatorio"}
    const result = await Music.remove(name);
    return result;
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getAll,
  create,
  updateMusic,
  updateAlbum,
  remove
}