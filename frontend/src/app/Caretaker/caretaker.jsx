import { useState, useEffect } from "react";
import "./caretaker.css";

export default function Caretaker() {
  const [caretakers, setCaretakers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setCaretakers([
        { id: 1, name: "Alice Johnson", email: "alice@example.com", status: "active" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", status: "inactive" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", status: "active" },
        { id: 4, name: "Diana Prince", email: "diana@example.com", status: "inactive" },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredCaretakers = caretakers.filter((caretaker) =>
    caretaker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="caretaker-container">
      <div className="caretaker-header">
        <h1>Caretakers</h1>
        <input
          type="text"
          placeholder="Search caretakers..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading caretakers...</p>
        </div>
      ) : (
        <table className="caretaker-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCaretakers.map((caretaker) => (
              <tr key={caretaker.id}>
                <td>{caretaker.name}</td>
                <td>{caretaker.email}</td>
                <td>
                  <span className={`status ${caretaker.status}`}>{caretaker.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}