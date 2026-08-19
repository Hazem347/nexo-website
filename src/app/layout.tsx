import type { Metadata } from "next";
import { Outfit, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LenisProvider from "@/components/providers/LenisProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" });

export const metadata: Metadata = {
  title: "NEXO | Premium Digital Agency",
  description: "Your Business, Professional in the Digital World. Premium web design, development, and digital solutions in Afghanistan and the region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${outfit.variable} ${vazirmatn.variable} font-sans bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col antialiased selection:bg-gold/30 selection:text-white`}>
        <LanguageProvider>
          <LenisProvider>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
