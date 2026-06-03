"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/constants/products";

const ProductCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full p-8"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-contain drop-shadow-2xl bg-remove-blend mix-blend-multiply filter brightness-105 contrast-125"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-[#2e936f] w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProductCard = ({ product, index, accentColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 p-8 sm:p-12 lg:p-16 border border-[#faf9f7]"
    >
      {product.sugarFree && (
        <div className="absolute top-8 right-8 z-10">
          <span className="inline-flex items-center rounded-full bg-[#fdece8] px-4 py-1.5 text-sm font-bold text-[#eb8771] ring-1 ring-inset ring-[#eb8771]/20">
            SUGAR FREE
          </span>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div
          className={`relative w-full max-w-md lg:w-1/2 aspect-[4/3] rounded-[2rem] overflow-hidden flex items-center justify-center ${accentColor}`}
        >
          <ProductCarousel images={product.images} title={product.title} />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {product.brand && (
                <span className="text-sm font-black tracking-widest text-[#a58979] uppercase">
                  {product.brand}
                </span>
              )}
            </div>
            <h3 className="text-4xl font-extrabold tracking-tight text-[#242220]">
              {product.title}
            </h3>
            <p className="mt-3 text-xl font-medium text-[#2e936f]">
              {product.subtitle}
            </p>
          </div>

          <p className="text-lg text-[#a58979] leading-relaxed">
            {product.description}
          </p>

          <div className="pt-6 border-t border-[#faf9f7]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#242220] mb-6">
              Key Formulation
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.ingredients.map((ingredient, i) => (
                <li key={i} className="flex items-start gap-3 text-[#242220] font-medium">
                  <div className="h-2 w-2 rounded-full bg-[#2e936f] mt-2 shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-[#faf9f7]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#242220]">
            Our Portfolio
          </h2>
          <p className="mt-6 text-xl leading-8 text-[#a58979]">
            Targeted solutions backed by rigorous pharmaceutical standards.
          </p>
        </div>

        <div className="mx-auto max-w-7xl space-y-12">
          <ProductCard 
            product={products.calciBitesSuspension} 
            index={0} 
            accentColor="bg-[#f0f4fc]" 
          />
          <ProductCard 
            product={products.calciBitesTablets} 
            index={1} 
            accentColor="bg-[#fdf0f4]" 
          />
          <ProductCard 
            product={products.iNutriX} 
            index={2} 
            accentColor="bg-[#e6f2ee]" 
          />
          <ProductCard 
            product={products.amyPeptineSyp} 
            index={3} 
            accentColor="bg-[#fef5e7]" 
          />
          <ProductCard 
            product={products.growBites} 
            index={4} 
            accentColor="bg-[#f3f0fc]" 
          />
        </div>
      </div>
    </section>
  );
}
