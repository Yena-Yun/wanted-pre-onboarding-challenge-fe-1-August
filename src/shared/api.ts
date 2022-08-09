import axios from 'axios';
import { TodoType, UserInfoType } from './type';

const API_URL = 'http://localhost:8080';

export const fetchData = () => {
  return axios.get(`${API_URL}/data`);
};

export const login = async (userInfo: UserInfoType) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userInfo);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const signUp = async (userInfo: UserInfoType) => {
  try {
    const response = await axios.post(`${API_URL}/users/create`, userInfo);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const headers = {
  'Content-Type': 'application/json',
  Authorization: `${localStorage.getItem('token')}`,
};

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`, { headers });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getTodoById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/todos/${id}`, { headers });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const createTodo = async (todo: TodoType) => {
  try {
    const response = await axios.post(`${API_URL}/todos`, todo, { headers });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = async (id: string, todo: TodoType) => {
  try {
    const response = await axios.put(`${API_URL}/todos/${id}`, todo, {
      headers,
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/todos/${id}`, { headers });
    return response;
  } catch (err) {
    console.error(err);
  }
};
