import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import InventoryPage from "./Pages/InventoryPage.jsx";
import AddProductPage from "./Pages/AddProductPage.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
        </Routes>
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </Router>
  );
}

export default App;
