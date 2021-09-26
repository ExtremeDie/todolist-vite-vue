import axios from 'axios';

export default axios.create({
  baseURL: `http://apidsadsa.pearson.com/v2/dictionaries`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
