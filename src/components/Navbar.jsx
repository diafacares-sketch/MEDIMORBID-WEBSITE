"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#faf9f7]/90 backdrop-blur-md border-b border-[#a58979]/20">
      <div className="container mx-auto flex h-28 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.webp"
              alt="MediMorbid Logo"
              width={320}
              height={100}
              className="h-20 w-auto object-contain bg-remove-blend"
              priority
            />
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#242220]"
        >
          <Link href="#products" className="hover:text-[#2e936f] transition-colors">
            Products
          </Link>
          <Link href="#quality" className="hover:text-[#2e936f] transition-colors">
            Quality
          </Link>
          <Link href="#contact" className="hover:text-[#2e936f] transition-colors">
            Contact Us
          </Link>
          <a
            href="https://wa.me/919507954701"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#2e936f] px-6 py-3 text-white shadow-lg shadow-[#2e936f]/30 hover:bg-[#257a5c] transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>Consult Now</span>
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
