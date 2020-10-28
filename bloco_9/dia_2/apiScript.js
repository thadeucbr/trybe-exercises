const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, {method: 'GET', headers: {'Accept': 'application/json'}})
  .then(data => data.json())
  .then(teste => document.getElementById('jokeContainer').innerHTML = teste.joke);
};

window.onload = () => fetchJoke();