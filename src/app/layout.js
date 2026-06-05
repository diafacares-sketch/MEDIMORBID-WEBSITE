import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediMorbid LLP | Precision Formulation & Healthcare Excellence",
  description: "MediMorbid LLP delivers high-quality pharmaceutical products including CalciBites and i-NutriX, manufactured in WHO-GMP & ISO certified facilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-slate-900 bg-white flex flex-col min-h-screen cursor-default`}>
        <CustomCursor />
        <Navbar />
        <main className="flex-grow bg-[#faf9f7] selection:bg-[#e6f2ee] selection:text-[#2e936f]">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
