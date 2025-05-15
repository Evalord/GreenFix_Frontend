import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import RegisterPage from "./Pages/Auth/RegisterPage";
import LoginPage from "./Pages/Auth/LoginPage";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/login' replace />} />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<h2>404 - page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
