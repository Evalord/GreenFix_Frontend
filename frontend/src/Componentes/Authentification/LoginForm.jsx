import React from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import InputField from "./../Field/InputFiels";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ switchToRegister }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
      setIsSubmitting(true);
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: values.email,
          password: values.password,
        });
        console.log(response.data);
        setErrorMessage("");
        login(values.email, values.password);
        navigate("/dashboard");
      } catch (error) {
        console.error("error reponse", error.response);
        setErrorMessage(
          error.response?.data?.message ||
            "Une erreur est survenue. Veuillez réessayer."
        );
      } finally {
        setIsSubmitting(false);
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
            type={isPasswordVisible ? "text" : "password"}
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
          <a href='#'>Forgot password?</a>
        </div>
        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        <div className='register-link'>
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
