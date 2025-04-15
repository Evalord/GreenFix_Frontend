import React, { useState } from "react";
import "./LoginRegister.css";
import LoginForm from "../../Componentes/Authentification/LoginForm";
import RegisterForm from "../../Componentes/Authentification/RegisterForm";
import ForgotPasswordForm from "../../Componentes/Authentification/ForgotPasswordForm";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser, sendResetPasswordLink } from "../../Componentes/Services/authService";

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleForgotPassword = async (email) => {
    try {
      await sendResetPasswordLink(email);
      alert("A password reset link has been sent to your email.");
      setIsForgotPassword(false)
    } catch (err) {
      console.error("Failed to send reset link", err);
      alert("Failed to send the reset link. please try again.");
    }
  };

  const handleBack = () => {
    setIsForgotPassword(false);
  };

  return (
    <div className={`wrapper ${isRegister ? "active" : ""}`}>
      {!isForgotPassword ? (
      !isRegister ? (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          switchToRegister={() => setIsRegister(true)}
          onForgotPassword={() => setIsForgotPassword(true)}
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
      )
    ) : (
      <ForgotPasswordForm
        onSubmit={handleForgotPassword}
        switchToLogin={handleBack}
      />
    )}
    </div>
  );
};

export default LoginRegister;
