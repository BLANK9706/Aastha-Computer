import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function TestSupabase() {
  const [connected, setConnected] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkConnection();
  }, []);

  async function checkConnection() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      setError(error.message);
      setConnected(false);
    } else {
      setProducts(data);
      setConnected(true);
    }
  }

  return (
    <div className="p-5">
      <h2 className="mb-2 text-xl font-bold">Supabase Connection Test</h2>
      {connected ? (
        <p className="text-green-600">✅ Connected to Supabase!</p>
      ) : (
        <p className="text-red-600">❌ Not connected</p>
      )}

      {error && <p className="text-red-500">Error: {error}</p>}

      <h3 className="mt-4 font-semibold">Products fetched:</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
