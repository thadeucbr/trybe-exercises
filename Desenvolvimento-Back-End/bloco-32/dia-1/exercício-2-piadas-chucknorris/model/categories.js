const axios = require('axios');

const getCategories = async () => {
  const options = {method: 'GET', url: 'https://api.chucknorris.io/jokes/categories'};

return axios.request(options).then(function (response) {
  return response.data;
}).catch(function (error) {
  console.error(error);
});
}
module.exports = {
  getCategories,
};