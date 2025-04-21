import { useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [metrics, setMetrics] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    const decoded = jwtDecode(token);
    setUser(decoded);

    axios
      .get("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) =>{
        setUser(res.data);
        setLoading(false);
        return axios.get("http://localhost:5000/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
      .then((res) => {
        setUsers(res.data); 
        return axios.get("http://localhost:5000/api/metrics", {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
      .then((res) => {
        setMetrics(res.data); 
        setLoading(false);
      })
      .catch((err) =>{
        setError(err.response?.data?.message || "An error occurred.");
        setLoading(false);
        navigate("/login")
      });
  }, [navigate]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  const handleRoleChange = (userId, newRole) => {
    // Function to handle role change
    axios
      .put(`http://localhost:5000/api/users/${userId}/role`, { role: newRole }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
        );
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update role.");
      });
  };

  return (
  <div className="dashboard">
  {/* Header */}
    <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">Welcome, {user.name}</h2>
          <p className="dashboard-role">Role: {user.role}</p>
        </div>
        <button
          onClick={() =>{
            localStorage.clear(); 
            navigate("/login")}
          }
          className="logout-button"
        >
          Logout
        </button>
      </div>
      {/* User Management */}
      <div className="user-management">
        <h3>User Management</h3>
        <table className="user_table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>
                <select
                  value={u.role}
                  onChange={(e) => handleRoleChange(u.id, e.target.value)}
                >
                  <option value="inhabitant">Inhabitant</option>
                  <option value="caretaker">Caretaker</option>
                  <option value="collector1">Collector 1</option>
                  <option value="collector2">Collector 2</option>
                  <option value="recycler">Recycler</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="distributor">Distributor</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleRoleChange(u.id, u.role)}>
                 Update Role
                 </button>
               </td>
             </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role-based message */}
      <div className="role-based-view">
        {user.role === "inhabitant" && (
          <div className="section">
            <h3>🏠 Inhabitant View</h3>
            <p>You’ve generated 18.2 kg of waste this week.</p>
            <p>Breakdown: Organic: 45%, Plastic: 35%, Others: 20%</p>
          </div>
        )}
        {user.role === "caretaker" && (
           <div className="section">
           <h3>🧹 Caretaker Dashboard</h3>
           <p>Building waste fill level: 72%</p>
           <p>Next pickup scheduled: 10:00 AM, April 20</p>
         </div>
        )}
        {user.role === "collector1" && (
           <div className="section">
           <h3>🚛 Collector 1 View</h3>
           <p>Assigned Routes: 3</p>
           <p>Total waste moved today: 3.2 tonnes</p>
         </div>
        )}
          {user.role === "collector2" && (
          <div className="section">
            <h3>🚛 Collector 2 View</h3>
            <p>Segregated waste moved: 2.1 tonnes</p>
            <p>Destination: Recycling Facility A</p>
          </div>
        )}
         {user.role === "recycler" && (
          <div className="section">
            <h3>♻️ Recycler Dashboard</h3>
            <p>Raw materials produced today: 850 kg (PET flakes, metal, paper)</p>
            <p>Conversion efficiency: 89%</p>
          </div>
        )}
         {user.role === "manufacturer" && (
          <div className="section">
            <h3>🏭 Manufacturer View</h3>
            <p>Raw material intake: 1.2 tonnes</p>
            <p>Products manufactured: 900 units</p>
          </div>
        )}
         {user.role === "distributor" && (
          <div className="section">
            <h3>📦 Distributor Dashboard</h3>
            <p>Products delivered: 6,700 units</p>
            <p>Current inventory: 1,200 units</p>
          </div>
        )}
        {user.role === "recycler" && <p>♻️ Recycler Dashboard</p>}
        {user.role === "manufacturer" && <p>🏭 Manufacturer Dashboard</p>}
      </div>

      {/* Dashboard Metrics */}
      <div className="metrics-grid">
        <MetricCard label="Total Waste Collected" value="617.0" unit="Kilo Tonnes" />
        <MetricCard label="Uncollected Waste" value="584.0" unit="Kilo Tonnes" />
        <MetricCard label="Avg Fill Level" value="50%" />
        <MetricCard label="Carbon Footprint" value="1,236.0" unit="MgCO2" />
        <MetricCard label="Segregation Rate" value="33%" />
        <MetricCard label="Electricity Generated" value="779.4" unit="kWh" />
        <MetricCard label="Routes in Use" value="43%" />
        <MetricCard label="Revenue (This Month)" value="$12,389" />
      </div>

      {/* Map and Chart */}
      <div className="charts-section">
        <div className="chart-box">
          <h3 className="chart-title">Map Overview</h3>
          <div className="chart-placeholder">[Map Component Here]</div>
        </div>
        <div className="chart-box">
          <h3 className="chart-title">Waste Sequestered (Hourly)</h3>
          <div className="chart-placeholder">[Chart Component Here]</div>
        </div>
      </div>

      {/* Ticket Log */}
      <div className="ticket-log">
        <h3 className="log-title">Ticket Log</h3>
        <table className="log-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Issue</th>
              <th>Source</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 108, issue: "Sensor not reporting", source: "System", date: "10/31/2019", status: "Under review" },
              { id: 117, issue: "Bin at 100% fill", source: "System", date: "10/24/2019", status: "Resolved" },
              { id: 122, issue: "Add new bin", source: "User", date: "09/26/2019", status: "Resolved" },
            ].map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.issue}</td>
                <td>{ticket.source}</td>
                <td>{ticket.date}</td>
                <td>{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const MetricCard = ({ label, value, unit }) => (
  <div className="metric-card">
    <p className="metric-label">{label}</p>
    <p className="metric-value">
      {value} <span className="metric-unit">{unit || ""}</span>
    </p>
  </div>
);


export default Dashboard