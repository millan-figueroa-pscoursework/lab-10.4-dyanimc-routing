import PageContainer from "../components/PageContainer";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <p className="mb-6">You must log in to access the Admin Dashboard.</p>

      <button
        onClick={handleLogin}
        className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Log In
      </button>
    </PageContainer>
  );
}
