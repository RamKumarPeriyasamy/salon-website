import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import { getUser } from "./services/authService"; // ✅ Import auth service

// ✅ PrivateRoute for protecting admin route
const PrivateRoute = ({ element }) => {
  return getUser() ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Public route */}
        <Route path="/login" element={<Login />} />
        
        {/* ✅ Protected route */}
        <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} />} />

        {/* ✅ Redirect to admin dashboard if route doesn't exist */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
