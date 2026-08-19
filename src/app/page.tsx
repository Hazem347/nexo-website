"use client";

import Hero3D from "@/components/home/Hero3D";
import WhyNexo from "@/components/home/WhyNexo";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedWork from "@/components/home/FeaturedWork";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import PricingPreview from "@/components/home/PricingPreview";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  return (
    <>
      <Hero3D />
      <WhyNexo />
      <ServicesOverview />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <PricingPreview />
      
      {/* Final CTA Inline for simplicity */}
      <section className="py-32 bg-gold relative overflow-hidden text-navy-900 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/logo1.png')] bg-no-repeat bg-center bg-[length:150%_150%] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {language === 'fa' ? "آماده شروع پروژه خود هستید؟" : "Ready to start your project?"}
          </h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
            {language === 'fa' 
              ? "بیایید با هم یک شاهکار خلق کنیم. برای مشاوره سریع از طریق واتساپ با تیم ما در ارتباط باشید." 
              : "Let's build something extraordinary together. Reach out to our team via WhatsApp for a quick consultation."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/93700551228" className="px-8 py-4 rounded-full bg-navy-900 text-white font-bold hover:scale-105 transition-transform shadow-xl w-full sm:w-auto">
              {language === 'fa' ? "واتساپ (افغانستان)" : "WhatsApp (AF)"}
            </a>
            <a href="https://wa.me/923290335528" className="px-8 py-4 rounded-full bg-white text-navy-900 font-bold border-2 border-navy-900 hover:scale-105 transition-transform shadow-xl w-full sm:w-auto">
              {language === 'fa' ? "ارتباط مستقیم" : "Direct Contact"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
