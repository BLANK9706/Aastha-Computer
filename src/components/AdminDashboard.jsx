import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function AdminDashboard({ user, onLogout }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [doneId, setDoneId] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*");
      if (error) console.error(error);
      else setProducts(data || []);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  async function updatePrice(id, newPrice) {
    const { error } = await supabase
      .from("products")
      .update({ price: newPrice })
      .eq("id", id);
    if (error) console.error(error);
    else {
      setProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, price: newPrice } : p)),
      );
      setDoneId(id);
      setTimeout(() => setDoneId(null), 2000);
    }
  }

  if (loading) return <p className="mt-10 text-center">Loading products...</p>;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative rounded-lg border p-4 shadow transition hover:shadow-md"
          >
            <img
              src={p.image || "https://via.placeholder.com/150"}
              alt={p.name}
              className="mb-3 h-40 w-full rounded object-cover"
            />
            <h3 className="mb-2 text-lg font-semibold">{p.name}</h3>
            <div className="mb-2 flex items-center gap-3">
              <input
                type="number"
                defaultValue={p.price}
                id={`price-${p.id}`}
                className="w-32 rounded border px-3 py-2 text-lg"
              />
              <button
                onClick={() => {
                  const newPrice = Number(
                    document.getElementById(`price-${p.id}`).value,
                  );
                  updatePrice(p.id, newPrice);
                }}
                className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              >
                Update
              </button>
            </div>
            {doneId === p.id && (
              <span className="absolute right-2 top-2 font-semibold text-green-600">
                ✅ Done
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
