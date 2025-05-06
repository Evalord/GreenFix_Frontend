import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const router = useRouter();
  const pathname = router.pathname;

  const isSuperAdmin = pathname.includes("/dashboard/superadmin");
  const isRecycler = pathname.includes("/dashboard/recycler");

  const getPageTitle = () => {
    if (pathname === "/dashboard/superadmin") return "SuperAdmin Dashboard";
    if (pathname === "/dashboard/recycler") return "Recycler Dashboard";
    if (pathname === "/dashboard/superadmin/process-tracking") return "Process Tracking";
    if (pathname === "/dashboard/recycler/production") return "Production Management";

    const pathParts = pathname.split("/");
    const lastPart = pathParts[pathParts.length - 1];
    return lastPart.charAt(0).toUpperCase() + lastPart.slice(1).replace(/-/g, " ");
  };

  const notifications = [
    { id: 1, icon: "📥", text: "New waste collection registered", time: "5 minutes ago" },
    { id: 2, icon: "💰", text: "Payment received from Manufacturer", time: "2 hours ago" },
    { id: 3, icon: "⚠️", text: "Low inventory alert: PET flakes", time: "1 day ago" },
  ];

  const profileMenuItems = [
    { id: "profile", icon: "👤", label: "My Profile" },
    { id: "settings", icon: "⚙️", label: "Account Settings" },
    { id: "password", icon: "🔐", label: "Change Password" },
    { id: "logout", icon: "🚪", label: "Logout", isLogout: true },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.pageTitle}>
        <h1>{getPageTitle()}</h1>
        {isSuperAdmin && <span className={styles.badge}>SuperAdmin</span>}
        {isRecycler && <span className={styles.badge}>Recycler</span>}
      </div>

      <div className={styles.headerActions}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={`${styles.searchInput} ${searchFocused ? styles.searchInputFocused : ""}`}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>

        <div className={styles.notifications}>
          <button
            className={styles.notificationButton}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            🔔<span className={styles.notificationBadge}>{notifications.length}</span>
          </button>

          {showNotifications && (
            <div className={styles.notificationDropdown}>
              <div className={styles.notificationHeader}>
                <h3>Notifications</h3>
                <button className={styles.markAllRead}>Mark all as read</button>
              </div>
              <div className={styles.notificationList}>
                {notifications.map((notification) => (
                  <div key={notification.id} className={styles.notificationItem}>
                    <div className={styles.notificationIcon}>{notification.icon}</div>
                    <div className={styles.notificationContent}>
                      <p>{notification.text}</p>
                      <span className={styles.notificationTime}>{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.notificationFooter}>
                <button>View all notifications</button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.profile}>
          <button
            className={styles.profileButton}
            onClick={() => setShowProfile(!showProfile)}
          >
            <div className={styles.profileAvatar}>JD</div>
            <span className={styles.profileName}>John Doe</span>
          </button>

          {showProfile && (
            <div className={styles.profileDropdown}>
              <div className={styles.profileHeader}>
                <div className={styles.profileAvatar}>JD</div>
                <div>
                  <h3>John Doe</h3>
                  <p>{isSuperAdmin ? "Super Administrator" : "Recycler Manager"}</p>
                </div>
              </div>
              <div className={styles.profileMenu}>
                {profileMenuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`${styles.profileMenuItem} ${
                      item.isLogout ? styles.logoutButton : ""
                    }`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;