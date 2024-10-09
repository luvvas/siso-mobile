import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Substitua pela sua API
});

export default api;