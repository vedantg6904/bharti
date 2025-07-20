import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AddProductPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddProduct = () => {
    if (!name || !category || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category,
      quantity: parseInt(quantity),
    };

    setProducts([...products, newProduct]);
    setName("");
    setCategory("");
    setQuantity("");
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((p) => p.id === id);
    if (productToEdit) {
      setName(productToEdit.name);
      setCategory(productToEdit.category);
      setQuantity(productToEdit.quantity);
      handleDelete(id); // remove before re-adding
    }
  };

  return (
    <div className="app" style={{ display: "flex" }}>
      <Sidebar />
      <div className="content" style={{ padding: "20px", flexGrow: 1 }}>
        <h2>Add Product</h2>
        <div className="form" style={{ background: "#fff", padding: "20px", borderRadius: "10px", width: "400px" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "96%", marginBottom: "10px", padding: "6px" }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
          >
            <option value="">Select category</option>
            <option value="Apparel">Apparel</option>
            <option value="Footwear">Footwear</option>
            <option value="Accessories">Accessories</option>
          </select>
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{ width: "96%", marginBottom: "10px", padding: "6px" }}
          />
          <button
            onClick={handleAddProduct}
            style={{ padding: "8px 20px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "5px" }}
          >
            Add
          </button>
        </div>

        <h2 style={{ marginTop: "40px" }}>Inventory Items</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    onClick={() => handleEdit(product.id)}
                    style={{ marginRight: "10px", background: "#3b82f6", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    style={{ background: "#ef4444", color: "#fff", padding: "5px 10px", border: "none", borderRadius: "5px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
