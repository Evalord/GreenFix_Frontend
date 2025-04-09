import React, { useState } from "react";
import "./LoginRegister.css";
import LoginForm from "../../Componentes/Authentification/LoginForm";
import RegisterForm from "../../Componentes/Authentification/RegisterForm";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../Services/authService";

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Failed", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, email, password);
      alert("Registration successful! You can now log in.");
      setIsRegister(false);
    } catch (err) {
      console.error("Registration Failed", err);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className={`wrapper ${isRegister ? "active" : ""}`}>
      {!isRegister ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleLogin}
          switchToRegister={() => setIsRegister(true)}
        />
      ) : (
        <RegisterForm
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleRegister}
          switchToLogin={() => setIsRegister(false)}
        />
      )}
    </div>
  );
};

export default LoginRegister;
