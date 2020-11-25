import axios from 'axios';

const api = axios.create({
  baseURL: 'https://working-service.herokuapp.com',
})

export default api;