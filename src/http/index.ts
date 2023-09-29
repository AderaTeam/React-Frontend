import axios from "axios";

export const API_URL = `http://178.170.192.87:8000`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
}); 

export default $api;