import React from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import InputField from "./../Field/InputFiels";

const LoginForm = ({ switchToRegister }) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false); // État pour la visibilité du mot de passe

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Veuillez entrer une adresse email valide.")
        .required("L'email est obligatoire."),
      password: Yup.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères.")
        .required("Le mot de passe est obligatoire."),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: values.email,
          password: values.password,
        });
        console.log(response.data);
        setErrorMessage("");
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            "Une erreur est survenue. Veuillez réessayer."
        );
      }
    },
  });

  return (
    <div className='form-box login'>
      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <h1>Login</h1>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
        <InputField
          type='email'
          placeholder='Email'
          icon={FaUser}
          fieldProps={formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />
        <div className='input-box'>
          <input
            type={isPasswordVisible ? "text" : "password"} // Basculer entre "text" et "password"
            placeholder='Password'
            {...formik.getFieldProps("password")}
          />
          <span
            className='icon'
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}>
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
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
        <button type='submit' disabled={false}>
          Login
        </button>
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
