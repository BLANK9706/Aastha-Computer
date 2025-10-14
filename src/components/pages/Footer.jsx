import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {/* Brand Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Aastha Computers</h2>
          <p className="text-gray-200">
            Bringing you the best in electronics with style, performance, and
            reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="transition hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/phone" className="transition hover:text-gray-200">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Aastha Computers, Tezpur, Assam</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>contact@aasthacomputers.in</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span>+91 9435501007</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.instagram.com/aastha._computer_tezpur?igsh=aTVlYTd3emttNTd4/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-200"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/9435501007"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-200"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Bitu Das, contact number for build
        your website -{" "}
        <a
          href="https://wa.me/919954883546"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          9954883546
        </a>
      </div>
    </footer>
  );
}
