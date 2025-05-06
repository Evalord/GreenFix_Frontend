import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "John Doe", email: "john@example.com", role: "collector", status: "active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "caretaker", status: "active" },
        { id: 3, name: "Robert Johnson", email: "robert@example.com", role: "recycler", status: "active" },
        { id: 4, name: "Emily Davis", email: "emily@example.com", role: "manufacturer", status: "inactive" },
        { id: 5, name: "Michael Wilson", email: "michael@example.com", role: "distributor", status: "active" },
        { id: 6, name: "Sarah Brown", email: "sarah@example.com", role: "inhabitant", status: "active" },
        { id: 7, name: "David Miller", email: "david@example.com", role: "collector", status: "inactive" },
        { id: 8, name: "Lisa Anderson", email: "lisa@example.com", role: "caretaker", status: "active" },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="container">
      <div className="header">
        <h1>User Management</h1>
        <p>Manage all users in the GreenFix system</p>
      </div>

      <div className="actions">
        <Link to="/users/new" className="add-user-button">
          Add User
        </Link>
        <input
          type="text"
          placeholder="Search users..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="role-filter"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="inhabitant">Inhabitant</option>
          <option value="caretaker">Caretaker</option>
          <option value="collector">Collector</option>
          <option value="recycler">Recycler</option>
          <option value="manufacturer">Manufacturer</option>
          <option value="distributor">Distributor</option>
        </select>
      </div>

      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading users...</p>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status ${user.status}`}>{user.status}</span>
                </td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/users/${user.id}`} className="view-link">
                    View
                  </Link>
                  <Link to={`/users/${user.id}/edit`} className="edit-link">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="pagination">
        <button disabled>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}