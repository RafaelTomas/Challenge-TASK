import axios from 'axios';
import AuthService from '../services/auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${AuthService.getToken()}`
  }
});

export default api;