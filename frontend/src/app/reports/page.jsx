import { useState, useEffect } from "react";
import "./reports.css";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("overview");
  const [reportData, setReportData] = useState({
    totalWaste: 0,
    recycledWaste: 0,
    recyclingRate: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // Simulate fetching data from an API
    setReportData({
      totalWaste: 5280,
      recycledWaste: 3960,
      recyclingRate: 75,
      totalRevenue: 12450,
    });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Reports & Analytics</h1>
        <p>View performance metrics and generate reports</p>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`tab ${activeTab === "collection" ? "active" : ""}`}
          onClick={() => setActiveTab("collection")}
        >
          Collection
        </button>
        <button
          className={`tab ${activeTab === "recycling" ? "active" : ""}`}
          onClick={() => setActiveTab("recycling")}
        >
          Recycling
        </button>
        <button
          className={`tab ${activeTab === "financial" ? "active" : ""}`}
          onClick={() => setActiveTab("financial")}
        >
          Financial
        </button>
      </div>

      <div className="content">
        {activeTab === "overview" && (
          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card">
                <div className="card-body">
                  <h3>Total Waste Collected</h3>
                  <p>{reportData.totalWaste} kg</p>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "100%" }}></div>
                  </div>
                </div>
              </div>
              {/* Add other cards */}
            </div>
          </div>
        )}

        {activeTab === "collection" && (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Collector</th>
                  <th>Organic (kg)</th>
                  <th>Plastic (kg)</th>
                  <th>Other (kg)</th>
                  <th>Total (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>May 4, 2025</td>
                  <td>Green Heights</td>
                  <td>John Doe</td>
                  <td>25.5</td>
                  <td>15.2</td>
                  <td>4.8</td>
                  <td>45.5</td>
                </tr>
                {/* Add other rows */}
              </tbody>
            </table>
          </div>
        )}
        {/* Add other tabs */}
      </div>
    </div>
  );
}