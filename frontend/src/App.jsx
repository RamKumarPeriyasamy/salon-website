import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";  // ✅ Only admin-related imports

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Admin Dashboard Route */}
        <Route path="/" element={<AdminDashboard />} />

        {/* ✅ Catch-all for undefined routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
