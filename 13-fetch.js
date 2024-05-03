// fetch : BuildIn JS (On Browser | Not on Node)

// ESM : ES Module (ES6)
import fetch from 'node-fetch';

// CJS : Common JS (Node)
// const fetch = require('node-fetch');

// console.log = function (...data) { //print //}
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function getAllTodo() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users?website'); // new Promise(fulfill,reject) {}
    let data = await response.json(); // Promise.resolve(response.json())
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllTodo();

// GET,DELETE - USER
// PATCH,POST - USER
