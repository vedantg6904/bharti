import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import { db } from "../FirebaseConfig.jsx";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function AddProductPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const productsCollection = collection(db, "products");

  const loadProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleAddProduct = async () => {
    if (!name || !category || !quantity) {
      alert("Please fill all fields");
      return;
    }

    await addDoc(productsCollection, {
      name,
      category,
      quantity: parseInt(quantity),
    });

    setName("");
    setCategory("");
    setQuantity("");
    loadProducts();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    loadProducts();
  };

  const handleEdit = (product) => {
    setName(product.name);
    setCategory(product.category);
    setQuantity(product.quantity);
    handleDelete(product.id); // Optional: Update instead of delete+add
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="app" style={{ display: "flex" }}>
      <Sidebar />
      <div className="main">
        <h2>Add Product</h2>
        <div className="add-product-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
          />
          <button onClick={handleAddProduct}>Add</button>
        </div>

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
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>
                    {product.quantity}
                    {product.quantity <= 5 && (
                      <span className="badge-low">Low</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-edit"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center", padding: "16px" }}>
                    No products added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
