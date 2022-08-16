import axios from 'axios';
import { UserInfo, Todo } from 'types/type';

const API_URL = 'http://localhost:8080';

export const fetchData = () => {
  return axios.get(`${API_URL}/data`);
};

export const login = async (userInfo: UserInfo) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userInfo);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const signUp = async (userInfo: UserInfo) => {
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
    const { data } = await axios.get(`${API_URL}/todos`, { headers });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getTodoById = async (id: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/todos/${id}`, { headers });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const createTodo = async (todo: Todo) => {
  try {
    const { data } = await axios.post(`${API_URL}/todos`, todo, { headers });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = async (todo: Todo) => {
  try {
    const { data } = await axios.put(`${API_URL}/todos/${todo.id}`, todo, {
      headers,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/todos/${id}`, { headers });
    return data;
  } catch (err) {
    console.error(err);
  }
};
