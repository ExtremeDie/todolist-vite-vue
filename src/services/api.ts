import axios from 'axios';

export default axios.create({
  baseURL: `https://todolist-express-mongodb.glitch.me/v1/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
