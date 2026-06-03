"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "General Enquiry",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const waNumber = "919507954701";
    const text = `*New Enquiry*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Product:* ${formData.product}\n\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="enquiry" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl bg-[#faf9f7] rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-16 border border-[#a58979]/10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#242220]">
              Make an Enquiry
            </h2>
            <p className="mt-4 text-lg text-[#a58979]">
              Interested in our products? Send us a message and our team will get back to you immediately.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#242220] mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border-0 py-4 px-5 text-[#242220] ring-1 ring-inset ring-[#a58979]/20 focus:ring-2 focus:ring-inset focus:ring-[#2e936f] bg-white shadow-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#242220] mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border-0 py-4 px-5 text-[#242220] ring-1 ring-inset ring-[#a58979]/20 focus:ring-2 focus:ring-inset focus:ring-[#2e936f] bg-white shadow-sm"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="product" className="block text-sm font-semibold text-[#242220] mb-2">Product of Interest</label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full rounded-2xl border-0 py-4 px-5 text-[#242220] ring-1 ring-inset ring-[#a58979]/20 focus:ring-2 focus:ring-inset focus:ring-[#2e936f] bg-white shadow-sm"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value="CalciBites Suspension">CalciBites Suspension</option>
                <option value="CalciBites Tablets">CalciBites Tablets</option>
                <option value="i-NutriX Sachets">i-NutriX Sachets</option>
                <option value="AmyPeptine Syp">AmyPeptine Syp</option>
                <option value="Grow Bites">Grow Bites</option>
                <option value="Bulk Purchase / Partnership">Bulk Purchase / Partnership</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#242220] mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-2xl border-0 py-4 px-5 text-[#242220] ring-1 ring-inset ring-[#a58979]/20 focus:ring-2 focus:ring-inset focus:ring-[#2e936f] bg-white shadow-sm"
                placeholder="How can we help you?"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#2e936f] px-8 py-5 text-lg font-bold text-white shadow-xl shadow-[#2e936f]/20 hover:bg-[#257a5c] transition-colors mt-8"
            >
              <Send className="w-5 h-5" />
              Send Enquiry via WhatsApp
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
