import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Your backend's base URL
});

export default api;