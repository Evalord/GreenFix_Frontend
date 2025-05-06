import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./app/Home";
import About from "./app/about";
import Testkit from "./app/testKit/testkit";
import Contact from "./app/contact/contact";
import { AuthProvider } from "./Components/Authentification/AuthContext";
import './styles/globals.css'; // Import the CSS file
import Dashboard from "./app/dashboard/page";
import { UserProvider } from "./contexts/user-context";
import Processes from "./app/processes/page";
import RecyclingPage from "./app/processes/recycling/page";
import Collection1Page from "./app/processes/collection/collection1/page";
import ManufacturingPage from "./app/processes/manufacturer/page";
import SuperAdminDashboardPage from "./app/dashboard/superadmin/page";
import RecyclerDashboardPage from "./app/dashboard/recycler/page";
import RecyclerProductionPage from "./app/dashboard/recycler/production/page";
import Users from "./app/users/page";
import Caretaker from "./app/Caretaker/caretaker";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element= {<About/>} /> 
            <Route path="/users" element= {<Users/>} /> 
            <Route path="/dashboard" element= {<Dashboard/>} />
            <Route path="/dashboard/superAdmin" element={<SuperAdminDashboardPage/>} />
            <Route path="/dashboard/recycler" element={<RecyclerDashboardPage/>} />
            <Route path="/dashboard/recycler/production" element={<RecyclerProductionPage/>} />
            <Route path="/testkit" element={<Testkit/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="processes" element={<Processes/>} />
            <Route path="processes/collection-collector1" element={<Collection1Page/>} />
            <Route path="processes/collection-collector2" element={<Collection1Page/>} />
            <Route path="processes/recycling" element={<RecyclingPage/>} />
            <Route path="manufacturing" element={<ManufacturingPage/>} />
            <Route path="*" element={<h2>404 - page Not Found</h2>} />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}
export default App;
