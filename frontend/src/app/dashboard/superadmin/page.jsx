import React from "react";
import styles from "./superadmin.module.css";
import StatCard from "../../../Components/dashboard/StatCard";
import Sidebar from "../../../Components/dashboard/Sidebar";

const SuperAdminDashboardPage = () => {
  const stats = [
    { title: "Total Users", value: 1200, icon: "👥", trend: { isPositive: true, value: 5 }, color: "green" },
    { title: "Waste Collected", value: "15,000 kg", icon: "🗑️", trend: { isPositive: true, value: 8 }, color: "blue" },
    { title: "Recycling Rate", value: "75%", icon: "♻️", trend: { isPositive: true, value: 3 }, color: "orange" },
    { title: "Revenue", value: "$50,000", icon: "💰", trend: { isPositive: false, value: 2 }, color: "red" },
  ];

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.welcomeSection}>
          <h2>Welcome, SuperAdmin</h2>
          <p>Here’s an overview of the platform’s performance and key metrics.</p>
        </div>

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

        <div className={styles.rowContainer}>
          <div className={styles.column}>
            <div className={styles.userDistribution}>
              <h3>User Distribution</h3>
              <div className={styles.distributionItem}>
                <div className={`${styles.colorDot} ${styles.green}`}></div>
                <div className={styles.distributionLabel}>Admins</div>
                <div className={styles.distributionBar}>
                  <div className={`${styles.distributionProgress} ${styles.green}`} style={{ width: "40%" }}></div>
                </div>
                <div className={styles.distributionValue}>40%</div>
              </div>
              <div className={styles.distributionItem}>
                <div className={`${styles.colorDot} ${styles.blue}`}></div>
                <div className={styles.distributionLabel}>Recyclers</div>
                <div className={styles.distributionBar}>
                  <div className={`${styles.distributionProgress} ${styles.blue}`} style={{ width: "30%" }}></div>
                </div>
                <div className={styles.distributionValue}>30%</div>
              </div>
              <div className={styles.distributionItem}>
                <div className={`${styles.colorDot} ${styles.orange}`}></div>
                <div className={styles.distributionLabel}>Users</div>
                <div className={styles.distributionBar}>
                  <div className={`${styles.distributionProgress} ${styles.orange}`} style={{ width: "30%" }}></div>
                </div>
                <div className={styles.distributionValue}>30%</div>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.activityList}>
              <h3>Recent Activities</h3>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>📥</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>New waste collection registered</p>
                  <span className={styles.activityTime}>5 minutes ago</span>
                </div>
                <button className={styles.activityAction}>View</button>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>💰</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>Payment received from Manufacturer</p>
                  <span className={styles.activityTime}>2 hours ago</span>
                </div>
                <button className={styles.activityAction}>View</button>
              </div>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>⚠️</div>
                <div className={styles.activityContent}>
                  <p className={styles.activityText}>Low inventory alert: PET flakes</p>
                  <span className={styles.activityTime}>1 day ago</span>
                </div>
                <button className={styles.activityAction}>View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboardPage;