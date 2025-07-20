// src/pages/Dashboard.js
import Sidebar from "../components/Sidebar.jsx";
import SearchBar from "../components/SearchBar.jsx";
import InventoryTable from "../components/InventoryTable.jsx";

export default function Dashboard({ onLogout }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar onLogout={onLogout} />
      <main className="main">
        <div className="dashboard-title">Inventory Management</div>
        <SearchBar />
        <InventoryTable />
      </main>
    </div>
  );
}
