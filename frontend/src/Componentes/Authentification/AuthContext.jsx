import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Add user state

  const login =async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,       
    }); // Set user state with email or any other user data
    console.log(response.data);
    setUser(response.data.user ); // Assuming the response contains user data
    setIsAuthenticated(true);
    return response.data; // Return the response data if needed
    }
    catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
      throw error; // Rethrow the error to handle it in the component
    }
  };
 

  const register = (username, email, password) => {
    // Handle registration logic here
    // For example, you can send a request to your backend to register the user
    console.log("User registered:", { username, email, password });
  }

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};