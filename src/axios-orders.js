import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-d0f3b.firebaseio.com/',
});

export default instance;
