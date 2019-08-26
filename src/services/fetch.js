import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://0f1680c6.ngrok.io/api/v1',
});

export default instance;

//bearer token