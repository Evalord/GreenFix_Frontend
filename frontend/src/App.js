import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./Pages/Auth/LoginRegister";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path={"login"} element={<LoginRegister />} />
          <Route path={"/"} element={<LoginRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
