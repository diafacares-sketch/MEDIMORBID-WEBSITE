import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediMorbid LLP | Precision Formulation & Healthcare Excellence",
  description: "MediMorbid LLP delivers high-quality pharmaceutical products including CalciBites and i-NutriX, manufactured in WHO-GMP & ISO certified facilities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased text-slate-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
