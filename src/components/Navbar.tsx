import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/blog");
  };

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem 0" }}>
      <Link to="/blog">Blog</Link>

      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
}
