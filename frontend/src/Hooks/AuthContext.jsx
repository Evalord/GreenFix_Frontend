import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      setIsAuthenticated(true);
      // Optionnel : axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };

  const register = async (username, email, password) => {
    const response = await axios.post("http://localhost:5000/api/register", {
      name: username,
      email,
      password,
    });
    return response.data;
  };

  const logout = React.useCallback(() => {
    // Nettoyage du localStorage
    localStorage.removeItem("token");
    // Optionnel : delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    setIsAuthenticated(false);
    // Redirection après la mise à jour de l'état
    navigate("/login", { replace: true });
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
