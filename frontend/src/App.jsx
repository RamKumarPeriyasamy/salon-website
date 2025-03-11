import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import { getUser } from "./services/authService"; 

const PrivateRoute = ({ element }) => {
  return getUser() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} />} />
        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
}

export default App;
