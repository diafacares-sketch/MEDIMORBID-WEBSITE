import Link from "next/link";

export default function Terms() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl bg-white rounded-3xl shadow-sm my-12 border border-[#a58979]/10">
      <h1 className="text-4xl font-extrabold text-[#242220] mb-8">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6 text-[#4a4641] leading-relaxed">
        <p>Welcome to MediMorbid LLP. By accessing or using our website, you agree to be bound by these Terms and Conditions.</p>
        
        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">1. Product Information</h2>
        <p>All product information presented on this website is for informational purposes only. It is not intended as medical advice. Always consult a healthcare professional before using any supplements or pharmaceutical products.</p>
        
        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">2. Intellectual Property</h2>
        <p>All content, logos, text, and images on this site are the property of MediMorbid LLP and are protected by copyright laws. You may not reproduce or use them without explicit permission.</p>

        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">3. Limitation of Liability</h2>
        <p>MediMorbid LLP shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or products.</p>

        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">4. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the new terms.</p>
        
        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-[#2e936f] font-bold hover:underline">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
