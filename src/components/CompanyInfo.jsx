"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BellRing } from "lucide-react";
import { useState } from "react";

export default function CompanyInfo() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section id="about" className="py-24 bg-[#faf9f7]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Company Info */}
          <div>
            <h2 className="text-sm font-black tracking-widest text-[#a58979] uppercase mb-4">About MediMorbid</h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-[#242220] sm:text-5xl mb-6 leading-tight">
              Pioneering Better Health Through Science
            </h3>
            <p className="text-lg text-[#a58979] leading-relaxed mb-8">
              MediMorbid LLP is dedicated to developing high-efficacy, precision-formulated pharmaceutical products. 
              Our commitment lies in blending modern medical science with stringent quality controls to deliver solutions that significantly improve patient outcomes.
            </p>
            
            <ul className="space-y-4">
              {[
                "Clinically Validated Formulations",
                "Advanced Manufacturing Processes",
                "Strict Quality Assurance Protocols",
                "Patient-Centric Healthcare Approach"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[#242220] font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#2e936f]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Notification / Newsletter Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#242220] rounded-[3rem] p-10 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Abstract Background Decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#2e936f] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center rounded-2xl bg-[#faf9f7]/10 p-4 mb-6">
                <BellRing className="w-8 h-8 text-[#faf9f7]" />
              </div>
              <h3 className="text-3xl font-bold text-[#faf9f7] mb-4">
                Stay Updated
              </h3>
              <p className="text-[#a58979] text-lg mb-8 leading-relaxed">
                Get notified about upcoming product launches, medical news, and exclusive health articles directly in your inbox.
              </p>
              
              <div className={subscribed ? "hidden" : "block"}>
                <form 
                  action="https://gmail.us6.list-manage.com/subscribe/post?u=0afa6535eb81f97e09a5feb29&id=45ee428ee3&f_id=00627de0f0" 
                  method="post" 
                  target="_blank"
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 rounded-2xl bg-[#faf9f7]/5 border border-[#faf9f7]/10 py-4 px-5 text-[#faf9f7] placeholder:text-[#a58979] focus:ring-2 focus:ring-[#2e936f] focus:outline-none"
                  />
                  {/* Mailchimp hidden anti-bot field */}
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" name="b_0afa6535eb81f97e09a5feb29_45ee428ee3" tabIndex="-1" defaultValue="" />
                  </div>
                  <button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    onClick={() => setTimeout(() => setSubscribed(true), 2000)}
                    className="rounded-2xl bg-[#2e936f] px-8 py-4 font-bold text-white hover:bg-[#257a5c] transition-colors whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              </div>

              {subscribed && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-[#2e936f]/20 border border-[#2e936f]/30 p-6 flex items-center gap-4 mt-4"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#2e936f] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#faf9f7]">You're Subscribed!</h4>
                    <p className="text-sm text-[#a58979]">We'll keep you posted on the latest updates.</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
