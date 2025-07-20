import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { db } from "../FirebaseConfig.jsx";
import { collection, getDocs } from "firebase/firestore";

export default function InventoryPage() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inventory"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInventory(items);
      } catch (error) {
        console.error("Error fetching inventory: ", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <h1 className="dashboard-title">Inventory</h1>

        <div className="inventory-table">
          <h2>Inventory Items</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {inventory.length === 0 ? (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center", padding: "12px" }}>
                    No items found.
                  </td>
                </tr>
              ) : (
                inventory.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>
                      {item.quantity}
                      {item.quantity < 5 && <span className="badge-low">Low</span>}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
