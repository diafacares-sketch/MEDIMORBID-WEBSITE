import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyInfo from "@/components/CompanyInfo";
import ProductShowcase from "@/components/ProductShowcase";
import EnquiryForm from "@/components/EnquiryForm";
import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7] selection:bg-[#e6f2ee] selection:text-[#2e936f] flex flex-col">
      <Navbar />
      <Hero />
      <CompanyInfo />
      <ProductShowcase />
      <EnquiryForm />
      <TrustStrip />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
