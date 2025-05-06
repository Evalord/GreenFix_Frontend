import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  const isSuperAdmin = location.pathname.includes("/dashboard/superadmin");
  const isRecycler = location.pathname.includes("/dashboard/recycler");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const superAdminLinks = [
    { path: "/dashboard/superadmin", icon: "📊", label: "Overview" },
    { path: "/dashboard/superadmin/users", icon: "👥", label: "Users" },
    { path: "/dashboard/superadmin/waste-tracking", icon: "🗑️", label: "Waste Tracking" },
    { path: "/dashboard/superadmin/process-tracking", icon: "♻️", label: "Process Tracking" },
    { path: "/dashboard/superadmin/payments", icon: "💰", label: "Payments" },
    { path: "/dashboard/superadmin/reports", icon: "📝", label: "Reports" },
    { path: "/dashboard/superadmin/settings", icon: "⚙️", label: "Settings" },
  ];

  const recyclerLinks = [
    { path: "/dashboard/recycler", icon: "📊", label: "Overview" },
    { path: "/dashboard/recycler/incoming", icon: "📥", label: "Incoming Waste" },
    { path: "/dashboard/recycler/production", icon: "🏭", label: "Production" },
    { path: "/dashboard/recycler/inventory", icon: "📦", label: "Inventory" },
    { path: "/dashboard/recycler/sales", icon: "💰", label: "Sales" },
    { path: "/dashboard/recycler/reports", icon: "📝", label: "Reports" },
    { path: "/dashboard/recycler/settings", icon: "⚙️", label: "Settings" },
  ];

  const links = isSuperAdmin ? superAdminLinks : isRecycler ? recyclerLinks : [];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>♻️</div>
          {!collapsed && <h1 className={styles.logoText}>GreenFix</h1>}
        </div>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <div className={styles.sidebarContent}>
        <nav className={styles.navigation}>
          {links.map((link) => {
            const isActive = location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
            return (
              <Link
                to={link.path}
                key={link.path}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""} ${
                  hoveredLink === link.path ? styles.navLinkHover : ""
                }`}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <div className={styles.navIcon}>{link.icon}</div>
                {!collapsed && <span>{link.label}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className={styles.sidebarFooter}>
        <Link
          to="/"
          className={`${styles.logoutButton} ${hoveredLink === "logout" ? styles.logoutButtonHover : ""}`}
          onMouseEnter={() => setHoveredLink("logout")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className={styles.navIcon}>🚪</div>
          {!collapsed && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;