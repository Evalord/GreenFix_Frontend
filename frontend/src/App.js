import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./Pages/Auth/LoginRegister";
import Dashboard from "./Componentes/Dashboard/dashboard";
import { ToastContainer } from "react";
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path={"login"} element={<LoginRegister />} />
          <Route path={"/"} element={<LoginRegister />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h2>404 - page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
