import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchData = () => {
  return axios.get(`${API_URL}/data`);
};
