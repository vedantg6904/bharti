// src/components/Sidebar.js
export default function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <h2>Inventory</h2>
      <ul>
        <li>Dashboard</li>
        <li>Inventory</li>
        <li>Add Product</li>
        <li
          style={{ marginTop: "30px", color: "#f87171", cursor: "pointer" }}
          onClick={onLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
