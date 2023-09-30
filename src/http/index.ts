import axios from "axios";

export const API_URL = `http://178.170.192.87:8000`;
export const API_PYTHON_URL = `http://178.170.192.87:8003`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export const $apiPython = axios.create({
  withCredentials: true,
  baseURL: API_PYTHON_URL,
}); 

export default $api;