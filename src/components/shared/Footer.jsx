

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            ArenaFlow
          </h2>

          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-500" />
              Khulna, Bangladesh
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              +880 XXXX-XXXXXX
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              support@arenaflow.com
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-green-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/all-facilities"
                className="hover:text-green-400 transition"
              >
                Facilities
              </Link>
            </li>


            <li>
              <Link
                href="#"
                className="hover:text-green-400 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            Social Links
          </h3>

          <div className="flex items-center gap-4">
            <p className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition">
                <FaFacebookF />
            </p>
            <p className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition">
                <FaInstagram/>
            </p>
            <p className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition">
                <FaLinkedinIn />
            </p>
            <p className="w-11 h-11 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition">
                <FaXTwitter />
            </p>
             
            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-400">
        &copy; ArenaFlow. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;