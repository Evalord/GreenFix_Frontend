import React from "react";
import styles from "./recycler.module.css";
import StatCard from "../../../Components/dashboard/StatCard";
import Sidebar from "../../../Components/dashboard/Sidebar";

const RecyclerDashboardPage = () => {
  const stats = [
    { title: "Waste Processed", value: "10,000 kg", icon: "♻️", trend: { isPositive: true, value: 12 }, color: "green" },
    { title: "Recycled Products", value: 500, icon: "🏭", trend: { isPositive: true, value: 8 }, color: "blue" },
    { title: "Pending Orders", value: 20, icon: "📦", trend: { isPositive: false, value: 5 }, color: "orange" },
    { title: "Revenue", value: "$25,000", icon: "💰", trend: { isPositive: true, value: 15 }, color: "red" },
  ];

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <h1 className={styles.title}>Recycler Dashboard</h1>
        <p className={styles.description}>
          Welcome to the Recycler Dashboard. Monitor your recycling activities and key metrics here.
        </p>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecyclerDashboardPage;