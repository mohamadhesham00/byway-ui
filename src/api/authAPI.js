import axios from "axios";
const API_URL = "https://localhost:7172/api/User";
export const register = async (registerData) => {
  const res = await axios.post(API_URL, registerData);
  return res.data;
};

export const login = async (loginData) => {
  const res = await axios.post(`${API_URL}/login`, loginData);
  return res.data;
};
