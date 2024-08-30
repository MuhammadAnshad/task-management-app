import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7192/api', // Replace with your backend URL
});

export default api;