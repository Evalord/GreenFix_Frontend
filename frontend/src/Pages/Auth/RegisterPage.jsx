import React, { useState } from "react";
import { useAuth } from "../../Componentes/Authentification/AuthContext";
import RegisterForm from "../../Componentes/Authentification/RegisterForm";
import "./LoginRegister.css";

const RegisterPage = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, login } = useAuth();

  const handleRegister = () => {
    register(username, email, password)
      .then(() => {
        login(email, password);
        console.log("Registration successful");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };

  return (
    <div className="wrapper active">
      <RegisterForm
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        switchToLogin={switchToLogin}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default RegisterPage;