import axios from "axios";

const API_URL = process.env.URL;

const loginUser = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const registerUser = (username, email, password) => {
  return axios.post(`${API_URL}/register`, { username, email, password });
};

const sendResetPasswordLink = async (email) => {
  return await axios.post(`${API_URL}/auth/forgot-password`, { email })
};

const logout = () => {
  localStorage.removeItem('user');
}

export { loginUser, registerUser, sendResetPasswordLink, logout};