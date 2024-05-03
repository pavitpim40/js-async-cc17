import axios from 'axios';

async function updateUser(userId, updateData) {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      updateData
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

updateUser(1, { name: 'Jame', username: 'Jami' });
