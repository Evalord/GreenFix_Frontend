import Sidebar from "../../Components/dashboard/Sidebars"
import Header from "../../Components/dashboard/Header"
import './layout.module.css'



export default function DashboardLayout({ children }) {
  return (
    <div style={dashboardStyles.dashboardContainer}>
      <Sidebar />
      <div style={dashboardStyles.mainContent}>
        <Header />
        <main style={dashboardStyles.contentArea}>{children}</main>
      </div>
    </div>
  )
}
