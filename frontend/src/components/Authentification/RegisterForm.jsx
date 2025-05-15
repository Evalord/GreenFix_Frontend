import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import InputField from "../Field/InputFiels";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/AuthContext";

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const { register } = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères.")
        .required("Le nom d'utilisateur est obligatoire."),
      email: Yup.string()
        .email("Veuillez entrer une adresse email valide.")
        .required("L'email est obligatoire."),
      password: Yup.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères.")
        .required("Le mot de passe est obligatoire."),
    }),
    onSubmit: async ({ username, email, password }) => {
      try {
        await register(username, email, password);
        setErrorMessage("");
        navigate("/login");
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            "Une erreur est survenue. Veuillez réessayer."
        );
      }
    },
  });

  return (
    <div className='form-box register'>
      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <h1>Sign In</h1>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
        <InputField
          type='text'
          placeholder='Username'
          icon={FaUser}
          fieldProps={formik.getFieldProps("username")}
          error={formik.touched.username && formik.errors.username}
        />
        <InputField
          type='email'
          placeholder='Email'
          icon={FaEnvelope}
          fieldProps={formik.getFieldProps("email")}
          error={formik.touched.email && formik.errors.email}
        />
        <InputField
          type='password'
          placeholder='Password'
          icon={FaLock}
          fieldProps={formik.getFieldProps("password")}
          error={formik.touched.password && formik.errors.password}
        />
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' /> J'accepte les termes et conditions
          </label>
        </div>
        <button type='submit' className='submit'>
          Sign In
        </button>
        <div className='register-link'>
          <p>
            Vous avez déjà un compte ? <Link to='/login'>login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
