import React, { useState } from "react";
import { useAuth } from "../../Hooks/AuthContext";
import RegisterForm from "../../components/Authentification/RegisterForm";
import "./LoginRegister.css";

const RegisterPage = () => {
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
    <div className='wrapper active'>
      <RegisterForm
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default RegisterPage;
