import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-indigo-50 px-6 py-20">
      {/* Soft background accent */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Contact Info + Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or need support? Our team is always ready to help
            you.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <p>
                Aastha Computers, Tezpur Main Road,
                <br /> Sonitpur, Assam – 784001
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <p>contact@aasthacomputers.in</p>
            </div>

            {/* 🔹 Social / Chat Links */}
            <div className="flex items-center gap-4 pt-4">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/9435501007"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 font-medium text-white shadow-md transition hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/aastha._computer_tezpur?igsh=aTVlYTd3emttNTd4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-4 py-2 font-medium text-white shadow-md transition hover:opacity-90"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
        >
          <iframe
            title="Store Location"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28533.646227999554!2d92.7734683033873!3d26.62587605250134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744e9e9f390f4a9%3A0x7b90f8fdc8def070!2sAastha%20Computer!5e0!3m2!1sen!2sin!4v1759776792801!5m2!1sen!2sin"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
