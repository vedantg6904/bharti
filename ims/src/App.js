import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./Pages/Dashboard.jsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <Dashboard />
  ) : (
    <Login onLogin={() => setIsAuthenticated(true)} />
  );
}

export default App;
