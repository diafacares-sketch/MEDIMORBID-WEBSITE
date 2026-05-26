"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7] py-24 sm:py-32 lg:pb-40">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-[#2e936f]/30 bg-[#e6f2ee] px-4 py-1.5 text-sm font-semibold text-[#2e936f] mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#2e936f] mr-2 animate-pulse"></span>
            Personalized Healthcare Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-[#242220] sm:text-7xl mb-8 leading-[1.1]"
          >
            Advancing Care With <span className="text-[#2e936f]">Precision Formulation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl leading-8 text-[#a58979] max-w-2xl mx-auto"
          >
            Clinician-guided pharmaceutical solutions designed to fit your life and deliver real results. Trusted, WHO-GMP certified, and strictly regulated.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#242220] px-8 py-4 text-base font-semibold text-white shadow-xl hover:bg-[#2e936f] hover:shadow-[#2e936f]/20 transition-all hover:-translate-y-1"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Soft abstract background blobs inspired by medvi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#e6f2ee] to-transparent opacity-60 blur-3xl -z-10 rounded-full pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#fdece8] to-transparent opacity-50 blur-3xl -z-10 rounded-full pointer-events-none"></div>
    </section>
  );
}
