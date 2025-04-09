import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const RegisterForm = ({ switchToLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    //Validation des donnée
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      //   onSubmit(values); // Appelle la fonction passée depuis le parent
      console.log(values);
    },
  });

  return (
    <div className='form-box register'>
      <form onSubmit={formik.handleSubmit}>
        <h1>Sign In</h1>

        <div className='input-box'>
          <input
            type='text'
            placeholder='Username'
            {...formik.getFieldProps("username")}
          />
          <FaUser className='icon' />
          {formik.touched.username && formik.errors.username && (
            <div className='error '>{formik.errors.username}</div>
          )}
        </div>

        <div className='input-box'>
          <input
            type='email'
            placeholder='Email'
            {...formik.getFieldProps("email")}
          />
          <FaEnvelope className='icon' />
          {formik.touched.email && formik.errors.email && (
            <div className='error '>{formik.errors.email}</div>
          )}
        </div>

        <div className='input-box'>
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
            <input type='checkbox' />I agree to the terms & conditions
          </label>
        </div>

        <button type='submit' className='submit'>
          Sign In
        </button>

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
};

export default RegisterForm;
