import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // set isAuthenticated = true
    navigate("/admin"); // redirect after login (you can change this)
  };

  return (
    <main>
      <h1>Login</h1>
      <p>You must log in to access the admin dashboard.</p>
      <button onClick={handleLogin}>Log In</button>
    </main>
  );
}
