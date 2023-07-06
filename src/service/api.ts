import axios from 'axios';

const api = axios.create({
  baseURL: 'https://g20-motors-shop.onrender.com',
  timeout: 6000
});
export default api;
