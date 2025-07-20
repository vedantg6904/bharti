import '../styles/styles.css';

const products = [
  { name: "T-shirt", category: "Apparel", quantity: "10" },
  { name: "Jeans", category: "Apparel", quantity: "8" },
  { name: "Jacket", category: "Apparel", quantity: "2", lowStock: true },
  { name: "Sneakers", category: "Footwear", quantity: "15" },
  { name: "Backpack", category: "Accessories", quantity: "4", lowStock: true }
];

export default function InventoryTable() {
  return (
    <div className="inventory-table">
      <h2>Inventory Items</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>
                {item.quantity}
                {item.lowStock && <span className="badge-low">Low</span>}
              </td>
              <td>
                <button className="btn btn-edit">Edit</button>
                &nbsp;
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
