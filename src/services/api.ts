import axios from 'axios';

const api = axios.create({
  // TODO: API base
  baseURL: 'https://api.example.com',
});

export default api;