import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  switchToRegister,
  onForgotPassword,

}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // onsubmit(values)
      console.log(values);
    },
  });

  return (
    <div className='form-box login'>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input
            type='email'
            placeholder='Email'
            {...formik.getFieldProps("email")}
          />
          <FaUser className='icon' />
          {formik.touched.email && formik.errors.email && (
            <div className='error '>{formik.errors.email}</div>
          )}
        </div>
        <div className='input-box '>
          <input
            type='password'
            placeholder='Password'
            {...formik.getFieldProps("password")}
          />
          <FaLock className='icon' />
          {formik.touched.password && formik.errors.password && (
            <div className='error'>{formik.errors.password}</div>
          )}
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href='#' onClick={onForgotPassword}>Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>
            Don't have an account?{" "}
            <a href='#' onClick={switchToRegister}>
              Sign In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
