import React, { useState } from "react";
import { useAuth } from "../../Hooks/AuthContext";
import LoginForm from "../../components/Authentification/LoginForm";
import "./LoginRegister.css";

const LoginPage = ({ switchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    login(email, password)
      .then(() => {
        console.log("Login successful");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className='wrapper'>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        switchToRegister={switchToRegister}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
