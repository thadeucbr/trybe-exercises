const Music = require('../services/Music');

const getAll = async (_req, res) => {
    try {
        const result = await Music.getAll()
        if(result.message) return res.status(204).json(result)
        res.status(200).json(result)
    }   catch (error) {
        console.error(error)
    }
}

const create = async (req, res) => {
    try {
      const { name, album } = req.body;
      const result = await Music.create(name, album);
      res.status(201).json(result)
    } catch (error) {
      console.error(error)
    }
}

const updateMusic = async (req, res) => {
  try {
    const { oldMusic, newMusic } = req.body;
    const response = await Music.updateMusic(oldMusic, newMusic);
    res.status(200).json(response);
  } catch (error) {
    console.error(error)
  }
}

const updateAlbum = async (req, res) => {
  try {
    const { oldAlbum } = req.params;
    const { newAlbum } = req.body;
    const response = await Music.updateAlbum(oldAlbum, newAlbum);
    res.status(200).json(response);
  } catch (error) {
    console.error(error)
  }
}

const remove = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await Music.remove(name);
    res.status(200).json(response);
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