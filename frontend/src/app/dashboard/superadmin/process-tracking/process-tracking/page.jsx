import React from "react";
import styles from "./page.module.css";
import StatCard from "../../../../../Components/dashboard/StatCard";
import ProcessTable from "../../../../../Components/dashboard/ProcessTable";

const ProcessTrackingPage = () => {
  const stats = [
    { title: "Processes Completed", value: 120, icon: "✅", trend: { isPositive: true, value: 10 }, color: "green" },
    { title: "Processes Pending", value: 15, icon: "⏳", trend: { isPositive: false, value: 5 }, color: "orange" },
    { title: "Average Completion Time", value: "3 hrs", icon: "⏱️", trend: { isPositive: true, value: 2 }, color: "blue" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Process Tracking</h1>
      <p className={styles.description}>
        Monitor and track the progress of all ongoing and completed processes.
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

      <div className={styles.tableSection}>
        <h2 className={styles.tableTitle}>Process Details</h2>
        <ProcessTable />
      </div>
    </div>
  );
};

export default ProcessTrackingPage;