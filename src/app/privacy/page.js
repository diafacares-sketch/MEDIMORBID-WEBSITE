import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl bg-white rounded-3xl shadow-sm my-12 border border-[#a58979]/10">
      <h1 className="text-4xl font-extrabold text-[#242220] mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-6 text-[#4a4641] leading-relaxed">
        <p>At MediMorbid LLP, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>
        
        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">1. Information We Collect</h2>
        <p>When you interact with our website or submit an enquiry, we may collect information such as your Name, Phone Number, and Product Interest. This information is primarily used to contact you via WhatsApp or Email as requested.</p>
        
        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">2. How We Use Your Information</h2>
        <p>We use the collected information exclusively to provide customer support, fulfill product requests, and improve our services. We do not sell your personal data to third parties.</p>

        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">3. Data Security</h2>
        <p>We implement standard security measures to safeguard your personal data against unauthorized access, alteration, or disclosure.</p>

        <h2 className="text-2xl font-bold text-[#2e936f] mt-8">4. Contact Us</h2>
        <p>If you have any questions regarding this Privacy Policy, please contact us at <strong>medimorbidllp@gmail.com</strong>.</p>
        
        <div className="mt-12 pt-8 border-t">
          <Link href="/" className="text-[#2e936f] font-bold hover:underline">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
