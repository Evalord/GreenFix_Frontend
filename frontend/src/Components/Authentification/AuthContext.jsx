import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Login Function
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      setUser(response.data.user); // Assuming the response contains user data
      setIsAuthenticated(true);
      return response.data; // Return the response data if needed
    } catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  // Register Function
  const register = (username, email, password) => {
    console.log("User registered:", { username, email, password });
  };

  // Logout Function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null); // Clear user state on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to Use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("useAuth must be used within an AuthProvider");
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};