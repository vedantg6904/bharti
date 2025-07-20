import { Link } from "react-router-dom";

export default function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <h2>MENU</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
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
