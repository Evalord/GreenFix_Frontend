import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const RegisterForm = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  switchToLogin,
}) => (
  <div className='form-box register'>
    <form onSubmit={onSubmit}>
      <h1>Registration</h1>
      <div className='input-box'>
        <input
          type='text'
          placeholder='Username'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <FaUser className='icon' />
      </div>
      <div className='input-box'>
        <input
          type='email'
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FaEnvelope className='icon' />
      </div>
      <div className='input-box'>
        <input
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FaLock className='icon' />
      </div>
      <div className='remember-forgot'>
        <label>
          <input type='checkbox' /> I agree to the terms & conditions
        </label>
      </div>
      <button type='submit'>Register</button>
      <div className='register-link'>
        <p>
          Already have an account?{" "}
          <a href='#' onClick={switchToLogin}>
            Login
          </a>
        </p>
      </div>
    </form>
  </div>
);

export default RegisterForm;
