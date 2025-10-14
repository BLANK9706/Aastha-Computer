// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";
import { ShieldCheck, Truck, RefreshCcw, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <Truck size={40} className="text-blue-600" />,
      title: "Fast & Free Delivery",
      desc: "Get your products delivered swiftly at your doorstep, absolutely free.",
    },
    {
      id: 2,
      icon: <ShieldCheck size={40} className="text-indigo-600" />,
      title: "Secure Payments",
      desc: "We use trusted payment gateways to keep your transactions safe.",
    },
    {
      id: 3,
      icon: <RefreshCcw size={40} className="text-purple-600" />,
      title: "Easy Returns",
      desc: "Not satisfied? Return within 7 days with no hassle or questions.",
    },
    {
      id: 4,
      icon: <Headphones size={40} className="text-pink-600" />,
      title: "24/7 Support",
      desc: "Our friendly support team is always available to assist you anytime.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl"
        >
          Why{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Choose Us
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-lg text-gray-600"
        >
          We bring innovation, trust, and comfort together to give you the best
          shopping experience possible.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-white/40 bg-white/60 p-8 shadow-md backdrop-blur-xl transition-transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="rounded-full bg-white/80 p-4 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-blue-200 opacity-30 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-indigo-300 opacity-30 blur-[120px]"></div>
    </section>
  );
}
