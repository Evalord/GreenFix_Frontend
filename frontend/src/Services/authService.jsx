import axios from "axios";

const API_URL = process.env.URL;

export const loginUser = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const registerUser = (username, email, password) => {
  return axios.post(`${API_URL}/register`, { username, email, password });
};

export const sendResetPasswordLink = async (email) => {
  return await axios.post(`${API_URL}/auth/forgot-password`, { email })
};

export { loginUser, registerUser};