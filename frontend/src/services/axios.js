import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://events-registration-q7v3.onrender.com/api'
});

export default instance;
