const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const jokeContainer = document.querySelector('#jokeContainer');
    jokeContainer.innerText = data.joke;
  });



const fetchJoke = () => {
  
};

window.onload = () => fetchJoke();
