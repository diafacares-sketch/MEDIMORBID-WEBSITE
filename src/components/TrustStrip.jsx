import { ShieldCheck, Award } from "lucide-react";

export default function TrustStrip() {
  return (
    <section id="quality" className="bg-[#242220] py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#faf9f7] sm:text-5xl">
            Uncompromising Quality Standards
          </h2>
          <p className="mt-6 text-xl leading-8 text-[#a58979]">
            Every product is formulated with precision and adheres to the highest medical and regulatory benchmarks.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <dl className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-[2rem] bg-[#faf9f7]/5 border border-[#faf9f7]/10 hover:bg-[#faf9f7]/10 transition-colors">
              <div className="rounded-2xl bg-[#2e936f]/20 p-4 shrink-0">
                <ShieldCheck className="h-10 w-10 text-[#2e936f]" aria-hidden="true" />
              </div>
              <div>
                <dt className="text-2xl font-bold text-[#faf9f7] mb-3">
                  WHO-GMP Certified
                </dt>
                <dd className="text-lg text-[#a58979] leading-relaxed">
                  Our manufacturing facilities rigorously comply with the World Health Organization's Good Manufacturing Practices, ensuring consistent clinical safety.
                </dd>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 p-8 rounded-[2rem] bg-[#faf9f7]/5 border border-[#faf9f7]/10 hover:bg-[#faf9f7]/10 transition-colors">
              <div className="rounded-2xl bg-[#c6a673]/20 p-4 shrink-0">
                <Award className="h-10 w-10 text-[#c6a673]" aria-hidden="true" />
              </div>
              <div>
                <dt className="text-2xl font-bold text-[#faf9f7] mb-3">
                  ISO 9001:2015 Certified
                </dt>
                <dd className="text-lg text-[#a58979] leading-relaxed">
                  We maintain an internationally recognized Quality Management System to deliver therapeutic products that meet strict global standards.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
