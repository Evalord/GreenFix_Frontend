import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import styles from "./sidebar.module.css";

const SidebarContext = React.createContext(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

const SidebarProvider = ({ defaultOpen = true, children }) => {
  const [open, setOpen] = React.useState(defaultOpen);

  const toggleSidebar = () => setOpen((prev) => !prev);

  const contextValue = React.useMemo(
    () => ({
      open,
      toggleSidebar,
    }),
    [open]
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div className={`${styles.sidebarWrapper} ${open ? styles.expanded : styles.collapsed}`}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

const Sidebar = ({ children }) => {
  const { open } = useSidebar();

  return (
    <aside className={`${styles.sidebar} ${open ? styles.expanded : styles.collapsed}`}>
      {children}
    </aside>
  );
};

const SidebarHeader = ({ children }) => {
  return <div className={styles.sidebarHeader}>{children}</div>;
};

const SidebarFooter = ({ children }) => {
  return <div className={styles.sidebarFooter}>{children}</div>;
};

const SidebarMenu = ({ children }) => {
  return <ul className={styles.sidebarMenu}>{children}</ul>;
};

const SidebarMenuItem = ({ children, isActive }) => {
  return (
    <li className={`${styles.sidebarMenuItem} ${isActive ? styles.active : ""}`}>
      {children}
    </li>
  );
};

const SidebarMenuButton = ({ icon, label, onClick }) => {
  return (
    <button className={styles.sidebarMenuButton} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <button className={styles.sidebarTrigger} onClick={toggleSidebar}>
      ☰
    </button>
  );
};

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
};