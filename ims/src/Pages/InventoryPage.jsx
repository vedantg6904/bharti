import Sidebar from "../components/Sidebar";

export default function InventoryPage() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>Inventory Page</h1>
        {/* Show full inventory here */}
      </div>
    </div>
  );
}
