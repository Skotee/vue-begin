import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://84f2835e.ngrok.io/api/v1',
});

export default instance;

//bearer token