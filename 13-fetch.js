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
    let response = await fetch('https://jsonplaceholder.typicode.com/users'); // new Promise(fulfill,reject) {}
    let data = await response.json(); // Promise.resolve(response.json())
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// getAllTodo();

// ถ้าต้องเรียก Request ด้วย method อื่นทำยังไง
// GET,DELETE - USER
async function getUserById(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUserById(id) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    });
    console.log(response.status);
  } catch (error) {
    console.log(error);
  }
}
// deleteUserById(1);

// PATCH,POST - USER
async function createUser(user) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user), //JSON.stringify({ name: 'John', age: 27 })
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// createUser({ name: 'John', age: 27 });
// createUser({ name: 'Jane', age: 32 });

async function updateUser(userId, updateData) {
  try {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData), //JSON.stringify({ name: 'John', age: 27 })
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

updateUser(1, { name: 'Jame', username: 'Jami' });
