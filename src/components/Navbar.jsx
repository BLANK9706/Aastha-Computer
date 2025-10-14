import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar({ user }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const productLinks = [
    { name: "Laptop", path: "/laptop" },
    { name: "Monitor", path: "/monitor" },
    { name: "Printer", path: "/printer" },
    { name: "Accessory", path: "/accessory" },
    { name: "Custom Pc", path: "/custompc" },
    { name: "CCTV", path: "/cctv" },
  ];

  const renderAdminButton = () => (
    <Link
      to="/admin/login"
      className="ml-4 hidden rounded-md border border-blue-600 px-4 py-1 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white md:inline-block"
    >
      Admin Login
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-md backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent"
          >
            <span className="text-3xl">A</span>astha{" "}
            <span className="text-gray-800">Computers</span>
          </Link>
        </motion.div>

        {/* ✅ Desktop navigation */}
        <nav className="hidden items-center gap-6 font-medium md:flex">
          <Link
            to="/about"
            className="transition duration-300 hover:text-blue-600"
          >
            About
          </Link>

          <div className="relative">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center gap-1 transition duration-300 hover:text-blue-600"
            >
              Products ▾
            </button>
            {productOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 mt-2 w-52 overflow-hidden rounded-xl border bg-white shadow-lg"
              >
                {productLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setProductOpen(false)}
                    className="block px-4 py-2 text-gray-700 transition hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link
            to="/contact"
            className="transition duration-300 hover:text-blue-600"
          >
            Contact
          </Link>

          {/* ✅ Admin Login visible only on desktop */}
          {renderAdminButton()}
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile menu (no admin login here) */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-2 border-t border-gray-200 bg-white px-6 pb-4 md:hidden"
        >
          <Link
            to="/about"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <div>
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex w-full items-center justify-between py-2 hover:text-blue-600"
            >
              Products {productOpen ? "▴" : "▾"}
            </button>
            {productOpen && (
              <div className="mt-1 space-y-1 pl-4">
                {productLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="block py-1 hover:text-blue-600"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="block py-2 hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
}
