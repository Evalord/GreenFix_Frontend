import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  switchToRegister,
}) => (
  <div className='form-box login'>
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <div className='input-box'>
        <input
          type='text'
          placeholder='Username or Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FaUser className='icon' />
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
          <input type='checkbox' /> Remember me
        </label>
        <a href='#'>Forgot password?</a>
      </div>
      <button type='submit'>Login</button>
      <div className='register-link'>
        <p>
          Don't have an account?{" "}
          <a href='#' onClick={switchToRegister}>
            Register
          </a>
        </p>
      </div>
    </form>
  </div>
);

export default LoginForm;
