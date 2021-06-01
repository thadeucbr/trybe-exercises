const { getJokes } = require('../model/joke');
const listJokes = async (_req, res) => {
  try {
    const joke = await getJokes();
    return res.render('jokeView.ejs', { joke })
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listJokes,
};