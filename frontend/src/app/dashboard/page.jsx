

import { useEffect, useState } from "react";
import useUser from "../../hooks/use-user";
import { Link } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const { user, loading } = useUser();
  const [stats, setStats] = useState({
    totalWaste: 0,
    recycledWaste: 0,
    pendingCollections: 0,
    completedCollections: 0,
  });

  useEffect(() => {
    // In a real app, fetch stats from API
    setStats({
      totalWaste: 1250,
      recycledWaste: 875,
      pendingCollections: 12,
      completedCollections: 48,
    });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="login-container">
        <h2>Please log in to view your dashboard</h2>
        <div className="mt-6">
          <Link to="/auth/login" className="login-button">
            Go to login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user.name}</h1>
        <p>Your {user.role} dashboard</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="stat-card">
          <div className="flex items-center">
            <div className="icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="stat-title">Total Waste</dt>
                <dd>
                  <div className="stat-value">{stats.totalWaste} kg</div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other stats */}
      </div>

      <div className="recent-activity">
        <div className="recent-activity-header">
          <h3>Recent Activity</h3>
        </div>
        <div>
          <dl>
            <div className="activity-item">
              <dt>Today, 9:30 AM</dt>
              <dd>Waste collection completed at Green Heights Building</dd>
            </div>
            <div className="activity-item">
              <dt>Yesterday, 2:15 PM</dt>
              <dd>120kg of plastic waste delivered to recycling facility</dd>
            </div>
            <div className="activity-item">
              <dt>Yesterday, 10:00 AM</dt>
              <dd>New collection scheduled for Riverside Apartments</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Link to="/processes" className="view-processes-button">
          View All Processes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}