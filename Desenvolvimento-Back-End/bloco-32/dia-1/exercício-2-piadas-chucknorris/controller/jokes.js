const { getJokesByCategories, getRandomJoke } = require('../model/jokes');

const getARandomJoke = async (_req, res) => {
  try {
    const joke = await getRandomJoke();
    res.render('./jokes', { joke });
  } catch (error) {
    console.log(error.message);
  }
};

const getJokesCategories = async (req, res) => {
  try {
    const joke = await getJokesByCategories(req.params.categorie);
    res.render('./jokes', { joke });
  } catch (error) {
    
  }
};

module.exports = {
  getARandomJoke,
  getJokesCategories,
};