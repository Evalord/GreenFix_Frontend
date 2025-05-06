import React from "react";
import "./StatCard.css";

const colorStyles = {
  green: {
    before: "green-before",
    icon: "green-icon",
  },
  blue: {
    before: "blue-before",
    icon: "blue-icon",
  },
  orange: {
    before: "orange-before",
    icon: "orange-icon",
  },
  red: {
    before: "red-before",
    icon: "red-icon",
  },
  purple: {
    before: "purple-before",
    icon: "purple-icon",
  },
};

const StatCard = ({ title, value, icon, trend, color = "green" }) => {
  const colorStyle = colorStyles[color];

  return (
    <div className={`stat-card ${colorStyle.before}`}>
      <div className={`stat-icon ${colorStyle.icon}`}>{icon}</div>
      <div className="stat-info">
        <h3 className="stat-title">{title}</h3>
        <p className="stat-value">{value}</p>
        {trend && (
          <div
            className={`stat-trend ${
              trend.isPositive ? "positive" : "negative"
            }`}
          >
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;