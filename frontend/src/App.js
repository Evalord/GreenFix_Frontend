import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import { AuthProvider } from "./Componentes/Authentification/AuthContext";
import RegisterPage from "./Pages/Auth/RegisterPage";
import LoginPage from "./Pages/Auth/LoginPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Navigate to='/login' replace />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<h2>404 - page Not Found</h2>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
