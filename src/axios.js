import axios from 'axios';

const configureAxios = () =>
  axios.create({
    baseURL: '/api/',
  });

export default configureAxios;

export const configureAxiosMock = () =>
  axios.create({
    baseURL: '/api/',
  });
