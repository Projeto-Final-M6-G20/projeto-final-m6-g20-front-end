import axios from 'axios';

const instanceKenzieCars = axios.create({
  baseURL: 'https://kenzie-kars.herokuapp.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instanceKenzieCars;
