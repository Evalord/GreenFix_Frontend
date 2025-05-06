import React from "react";
import "./testkit.css";

export default function Testkit() {
  return (
    <div className="testkit-container">
      <div className="testkit-header">
        <h1>Test Kit</h1>
        <p>Explore various testing tools and resources available for your needs.</p>
      </div>
      <div className="testkit-content">
        <div className="card">
          <h3>Tool 1</h3>
          <p>Details about Tool 1 and how it can help you.</p>
        </div>
        <div className="card">
          <h3>Tool 2</h3>
          <p>Details about Tool 2 and its features.</p>
        </div>
        <div className="card">
          <h3>Tool 3</h3>
          <p>Details about Tool 3 and its benefits.</p>
        </div>
      </div>
    </div>
  );
}