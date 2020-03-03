import axios from 'axios';
import { API_URL } from './constants';

const configureAxios = () =>
  axios.create({
    baseURL: API_URL,
  });

export default configureAxios;

export const configureAxiosMock = () =>
  axios.create({
    baseURL: '/api/',
  });
