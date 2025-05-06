import React, { useState } from "react";
import { useAuth } from "../../Components/Authentification/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";
import LoginForm from "../../Components/Authentification/LoginForm";
import RegisterForm from "../../Components/Authentification/RegisterForm";

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { login, register } = useAuth();
  

 const handleLogin = () => {
    // Call the login function and navigate to the dashboard
    login(email, password) 
      .then(() => {
        console.log("Login successful");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  const handleRegister = () => {
    // Call the register function and handle success/error
    register(username, email, password) 
      .then(() => {
        login(email, password);
        console.log("Registration successful");
       // navigate('/dashboard');
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <div className={`wrapper ${isRegister ? "active" : ""}`}>
      {!isRegister ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          switchToRegister={() => setIsRegister(true)}
          onLogin={handleLogin}
        />
      ) : (
        <RegisterForm
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          switchToLogin={() => setIsRegister(false)}
          onRegister={handleRegister}
        />
      )}
    </div>
  );
};

export default LoginRegister;
