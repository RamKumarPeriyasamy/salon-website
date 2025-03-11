import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_API;

export const register = async (userData) => {
  const res = await axios.post(`${API_URL}/auth/register`, userData);
  return res.data;
};

export const login = async (userData) => {
  const res = await axios.post(`${API_URL}/auth/login`, userData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const getUser = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};
