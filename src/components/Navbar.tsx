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
    <nav className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
      {/* LEFT SIDE */}
      <Link to="/blog" className="text-lg font-medium hover:underline">
        Blog
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
            <button
              onClick={handleLogout}
              className="bg-violet-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:underline">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
}
