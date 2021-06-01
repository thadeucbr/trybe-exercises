const axios = require('axios');
const getJokes = async () => {
  const options = {
    method: 'GET',
    url: 'https://sv443.net/jokeapi/v2/joke/Programming',
    params: {
      asd: ['', ''],
      blacklistFlags: 'nsfw,religious,political,racist,sexist',
      type: 'single',
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.joke;
    })
    .catch(function (error) {
      console.error(error);
    });
};

module.exports = {
  getJokes
};