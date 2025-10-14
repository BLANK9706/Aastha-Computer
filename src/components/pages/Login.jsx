import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password.trim(),
    });
    setLoading(false);

    if (error) setError(error.message);
    else onLogin(data.user);
  }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg border p-5 shadow">
      <h2 className="mb-4 text-xl font-bold">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        disabled={loading}
        className="w-full rounded bg-blue-500 px-4 py-2 text-white"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}
