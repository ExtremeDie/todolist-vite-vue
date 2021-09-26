import axios from 'axios';

const api = axios.create({
  baseURL: `http://api.pearson.com/v2/dictionaries`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const Api = () => {
  return api;
};
