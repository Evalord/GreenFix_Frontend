import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginRegister from "./Pages/Auth/LoginRegister";
import Dashboard from "./Pages/Dashboard/dashboard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import { AuthProvider, useAuth } from "./Componentes/Authentification/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
            <div className='App'>
              <ToastContainer/>
              <Routes>
                <Route path={"/"} element={<LoginRegister />} />
                <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
                <Route path="*" element={<h2>404 - page Not Found</h2>} />
              </Routes>
            </div>
      </Router>
    </AuthProvider>
  );
}

const PrivateRoute =({component: Component}) => {
  const {isAuthenticated} = useAuth();
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
}

export default App;
