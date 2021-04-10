const Artist = require('../services/Artist');

const getAll = async (_req, res) => {
  try {
    const result = await Artist.getAll()
    if(result.message) return res.status(204).json(result)
    res.status(200).json(result)
  } catch (error) {
    console.error(error)
  }
}

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await Artist.create(name);
    res.status(201).json(result)
  } catch (error) {
    console.error(error)
  }
}

const update = async (req, res) => {
  try {
    const { oldArtist ,newArtist } = req.body;
    const response = await Artist.update(oldArtist, newArtist);
    res.status(200).json(response);
  } catch (error) {
    console.error(error)
  }
}

const remove = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await Artist.remove(name);
    res.status(200).json(response);
  } catch (error) {
   console.error(error) 
  }
}

module.exports = {
  getAll,
  create,
  update,
  remove
}