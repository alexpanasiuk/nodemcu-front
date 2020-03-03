import configureAxios from '../axios';
const axios = configureAxios();

export const loadData = (id, params) => axios.get(`/sensor/${id}`, { params });
