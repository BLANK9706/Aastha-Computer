// src/components/SectionDivider.jsx
import { motion } from "framer-motion";

export default function SectionDivider() {
  const brands = [
    "Apple",
    "Samsung",
    "OnePlus",
    "Asus",
    "HP",
    "Dell",
    "Lenovo",
    "Sony",
    "Realme",
    "Xiaomi",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-10">
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_60%)]"></div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="flex whitespace-nowrap text-4xl font-extrabold opacity-90"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <motion.span
              key={index}
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 20px rgba(59,130,246,0.8)",
              }}
              className="mx-10 cursor-pointer bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent transition-all duration-300 hover:from-purple-500 hover:to-pink-500"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
