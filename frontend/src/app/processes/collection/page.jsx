import { useState } from "react";
import { Link } from "react-router-dom";
import "./collection.css";

export default function CollectionProcess() {
  const [formData, setFormData] = useState({
    buildingName: "",
    date: "",
    time: "",
    collectorName: "",
    wasteCategories: {
      organic: 0,
      plastic: 0,
      other: 0,
    },
    caretakerName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("waste-")) {
      const category = name.replace("waste-", "");
      setFormData({
        ...formData,
        wasteCategories: {
          ...formData.wasteCategories,
          [category]: Number.parseFloat(value) || 0,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Collection form submitted successfully!");
    setFormData({
      buildingName: "",
      date: "",
      time: "",
      collectorName: "",
      wasteCategories: {
        organic: 0,
        plastic: 0,
        other: 0,
      },
      caretakerName: "",
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Collection Process</h1>
        <p>Record waste collection details</p>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h3>Collection Form</h3>
          <p>Fill out all details for Collector 1 collection process</p>
        </div>
        <div className="form-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="buildingName">Building Name</label>
              <input
                type="text"
                name="buildingName"
                id="buildingName"
                value={formData.buildingName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Add other input fields here */}
            <div className="button-group">
              <Link to="/processes" className="button cancel">
                Cancel
              </Link>
              <button type="submit" className="button submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="table-container">
        <div className="table-header">
          <h3>Recent Collections</h3>
          <p>Last 5 collections recorded</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Building</th>
              <th>Date & Time</th>
              <th>Collector</th>
              <th>Total Waste (kg)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Green Heights</td>
              <td>May 3, 2025 - 09:30 AM</td>
              <td>John Doe</td>
              <td>45.5</td>
              <td>
                <span className="status completed">Completed</span>
              </td>
            </tr>
            {/* Add other rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}