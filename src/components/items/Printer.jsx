import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../supabaseClient";

export default function Printer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", "Printer");

      if (error) console.error("Error fetching products:", error);
      else setProducts(data || []);

      setLoading(false);
    }
    fetchProducts();
  }, []);

  const openWhatsApp = (product) => {
    const message = `Hi, I am interested in this product: ${product.name} priced at ₹${product.price}`;
    const whatsappUrl = `https://wa.me/9435501007?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (loading)
    return <p className="py-10 text-center">Loading Printer products...</p>;

  return (
    <>
      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.05 }}
            className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="p-4">
              <img
                src={p.image}
                alt={p.name}
                className="h-56 w-full bg-gray-50 object-contain p-4"
              />
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {p.name}
              </h3>
              <p className="mb-2 text-lg font-bold text-blue-600">₹{p.price}</p>
            </div>

            {/* Buy Now Button pinned to bottom */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="m-4 w-[calc(100%-2rem)] self-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 font-medium text-white shadow-md transition hover:shadow-lg"
              onClick={() => setSelectedProduct(p)}
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative flex w-full max-w-lg flex-col items-center rounded-xl bg-white p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="mb-4 max-h-96 object-contain"
              />
              <h3 className="mb-2 text-xl font-semibold">
                {selectedProduct.name}
              </h3>
              <p className="mb-2 text-lg font-bold text-blue-600">
                ₹{selectedProduct.price}
              </p>
              <p className="mb-4 text-sm text-gray-600">
                {selectedProduct.details}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-green-500 px-4 py-2 font-medium text-white shadow-md transition hover:shadow-lg"
                onClick={() => openWhatsApp(selectedProduct)}
              >
                Contact via WhatsApp
              </motion.button>

              <button
                className="absolute right-2 top-2 text-xl font-bold text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedProduct(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
