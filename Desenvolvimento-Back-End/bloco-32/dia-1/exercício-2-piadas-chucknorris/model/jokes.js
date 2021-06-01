const axios = require('axios');

const getJokesByCategories = async (cateogories) => {
  const options = {
    method: 'GET',
    url: 'https://api.chucknorris.io/jokes/random',
    params: { category: cateogories },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.value;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getRandomJoke = async () => {
  const options = { method: 'GET', url: 'https://api.chucknorris.io/jokes/random' };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.value;
    })
    .catch(function (error) {
      console.error(error);
    });
};

module.exports = {
  getJokesByCategories,
  getRandomJoke,
};
