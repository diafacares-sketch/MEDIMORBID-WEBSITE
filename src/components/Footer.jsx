import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#faf9f7] pt-24 pb-12 border-t border-[#a58979]/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-[#a58979]/20 pb-16">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-8">
            <Image
              src="/images/logo.webp"
              alt="MediMorbid Logo"
              width={320}
              height={100}
              className="h-20 w-auto object-contain bg-remove-blend"
            />
            <p className="text-[#a58979] text-lg leading-relaxed max-w-sm">
              Dedicated to advancing healthcare through precision formulation and uncompromising quality standards.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-[#242220] mb-8">Company</h3>
            <ul className="space-y-4 text-base font-medium text-[#a58979]">
              <li>
                <a href="#products" className="hover:text-[#2e936f] transition-colors">Our Portfolio</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-[#2e936f] transition-colors">Quality Standards</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#2e936f] transition-colors">About Us</a>
              </li>
            </ul>
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-bold text-[#242220]">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-[#a58979] hover:text-[#2e936f] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#a58979] hover:text-[#2e936f] transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="md:col-span-4">
            <h3 className="text-lg font-bold text-[#242220] mb-8">Contact Us</h3>
            <ul className="space-y-6 text-base font-medium text-[#a58979]">
              <li className="flex gap-4 items-start">
                <div className="rounded-full bg-[#e6f2ee] p-2 mt-1">
                  <MapPin className="h-5 w-5 text-[#2e936f]" />
                </div>
                <span className="leading-relaxed text-[#242220]">
                  MediMorbid LLP<br />
                  D2 /19 /A, 2, DLF Dilshad Extension II<br />
                  Sahibabad, Ghaziabad<br />
                  Uttar Pradesh - 201006
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="rounded-full bg-[#fdece8] p-2">
                  <Phone className="h-5 w-5 text-[#eb8771]" />
                </div>
                <span className="text-[#242220]">+91 95079 54701</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="rounded-full bg-[#f0f4fc] p-2">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <span className="text-[#242220]">medimorbidllp@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-[#a58979]">
          <p>&copy; {new Date().getFullYear()} MediMorbid LLP. All rights reserved.</p>
          <p>Designed for Healthcare Excellence</p>
        </div>
      </div>
    </footer>
  );
}
