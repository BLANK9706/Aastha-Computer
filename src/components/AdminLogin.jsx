import { useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

const ADMIN_UUID = "c1adad23-ad50-420a-91a2-33eebbfb4f6f";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    setError("");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });

    if (error) {
      setError(error.message);
    } else if (data.user?.id !== ADMIN_UUID) {
      setError("You are not authorized as admin.");
      await supabase.auth.signOut();
    } else {
      onLogin(data.user);
      navigate("/admin/dashboard");
    }
  }

  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg border p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="off"
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 w-full rounded border p-2"
        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
      />
      <button
        onClick={handleLogin}
        className="w-full rounded bg-blue-500 px-4 py-2 text-white"
      >
        Login
      </button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
