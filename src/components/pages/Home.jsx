// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Asstha from "../../assets/asstha.PNG";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 py-16 md:flex-row md:px-10">
        {/* Left Text Section */}
        <motion.div
          className="z-10 space-y-6 text-center md:w-1/2 md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Experience{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Like Never Before
          </h1>

          <p className="mx-auto text-lg text-gray-600 md:mx-0 md:w-3/4">
            Powerful devices, elegant design, and intelligent performance — all
            brought together to shape your digital lifestyle.
          </p>

          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
              onClick={() => navigate("/product")}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Circle with PNG */}
        <motion.div
          className="relative mt-12 flex items-center justify-center md:mt-0 md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {/* Glowing gradient orb */}
          <div className="absolute h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-40 blur-[120px] md:h-[500px] md:w-[500px]"></div>

          {/* Floating decorative shapes */}
          <motion.div
            className="absolute h-32 w-32 rotate-12 rounded-3xl border border-white/20 bg-white/40 shadow-xl backdrop-blur-lg"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 shadow-lg blur-md"
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-10 top-10 h-16 w-16 rounded-full bg-gradient-to-br from-blue-300 to-purple-300 opacity-60 blur-md"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Circle with tilt animation */}
          <div style={{ perspective: 1200 }} className="relative">
            <motion.div
              className="relative flex h-56 w-56 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-2xl backdrop-blur-3xl md:h-72 md:w-72"
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                willChange: "transform",
                transformOrigin: "50% 50%",
              }}
              animate={{ rotateY: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={Asstha}
                alt="Asstha"
                className="h-[95%] w-[95%] object-contain drop-shadow-xl"
                style={{ pointerEvents: "none" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background glow accent */}
      <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-200 to-transparent opacity-30 blur-3xl"></div>
    </section>
  );
}
