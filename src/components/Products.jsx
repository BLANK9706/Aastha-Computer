import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import leptop from "../assets/leptop.jpg";
import monitor from "../assets/Monitor.jpg";
import cctv from "../assets/cctv.jpg";
import Printer from "../assets/Printer.jpg";
import Pc from "../assets/Custompc.jpg";
import Accessorry from "../assets/Accessory.jpg";

export default function Products() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Printer",
      path: "/printer",
      image: Printer,
    },
    {
      name: "Laptop",
      path: "/laptop",
      image: leptop,
    },
    {
      name: "Accessories",
      path: "/accessory",
      image: Accessorry,
    },
    {
      name: "Custom Pc",
      path: "/custompc",
      image: Pc,
    },
    {
      name: "cctv",
      path: "/cctv",
      image: cctv,
    },
    {
      name: "Monitor",
      path: "/monitor",
      image: monitor,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-50 py-16">
      {/* Floating decorative shapes */}
      <div className="absolute left-1/3 top-0 h-64 w-64 animate-pulse rounded-full bg-blue-200/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-64 w-64 animate-pulse rounded-full bg-purple-200/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-12 text-4xl font-extrabold text-gray-900">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Products
          </span>
        </h2>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg transition hover:scale-105 hover:shadow-2xl"
              onClick={() => navigate(product.path)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="bg-white p-4">
                <h3 className="text-lg font-semibold text-gray-800 transition hover:text-blue-600">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
