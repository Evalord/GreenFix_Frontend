import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginRegister from "./Pages/Auth/LoginRegister";
import Dashboard from "./Pages/Dashboard/dashboard";
import { AuthProvider} from "./Componentes/Authentification/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route path={"/"} element={<LoginRegister />} />
            <Route path="/dashboard" element= {<Dashboard/>} /> 
            <Route path="*" element={<h2>404 - page Not Found</h2>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

{/*const PrivateRoute =({component: Component}) => {
  const {isAuthenticated} = useAuth();
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
}*/}

export default App;
