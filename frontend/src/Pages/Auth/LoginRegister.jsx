import React, { useState } from "react";
import "./LoginRegister.css";
import LoginForm from "../../Componentes/Authentification/LoginForm";
import RegisterForm from "../../Componentes/Authentification/RegisterForm";

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className={`wrapper ${isRegister ? "active" : ""}`}>
      {!isRegister ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
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
          switchToLogin={() => setIsRegister(false)}
        />
      )}
    </div>
  );
};

export default LoginRegister;
