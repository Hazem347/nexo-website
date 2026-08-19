"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { language, dir } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = language === 'fa' ? [
    { name: "احمد رحیمی", role: "مدیرعامل شرکت آریانا", text: "تیم نکسو نه تنها وب‌سایت ما را از نو طراحی کرد، بلکه ساختار دیجیتال کسب‌وکار ما را متحول ساخت. تخصص و پشتیبانی آن‌ها بی‌نظیر است." },
    { name: "سارا حسینی", role: "بنیان‌گذار پلتفرم آموزشی", text: "اپلیکیشنی که نکسو برای ما طراحی کرد، تجربه کاربری فوق‌العاده‌ای دارد. افزایش رضایت کاربران ما گواه این مدعاست." },
    { name: "محمد کریمی", role: "مدیر بازاریابی", text: "طراحی‌های گرافیکی و برندینگ نکسو باعث شد تا هویت بصری ما در بازار به شدت متمایز و حرفه‌ای دیده شود." },
  ] : [
    { name: "Ahmad Rahimi", role: "CEO, Ariana Corp", text: "NEXO didn't just redesign our website; they transformed our digital architecture. Their expertise and support are unmatched." },
    { name: "Sara Hosseini", role: "Founder, EduPlatform", text: "The mobile app NEXO designed for us offers an incredible user experience. Our user satisfaction has skyrocketed." },
    { name: "Mohammad Karimi", role: "Marketing Director", text: "NEXO's graphic design and branding gave us a highly distinct and professional visual identity in the market." },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-navy-800 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {language === 'fa' ? <>نظرات <span className="text-gold">مشتریان</span> ما</> : <>Client <span className="text-gold">Testimonials</span></>}
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20">
            <button onClick={dir === 'rtl' ? next : prev} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20">
            <button onClick={dir === 'rtl' ? prev : next} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
              >
                <Quote className="text-gold w-16 h-16 opacity-30 mb-6" />
                <p className="text-xl md:text-3xl font-medium leading-relaxed mb-8">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
                <div>
                  <h4 className="text-xl font-bold text-gold">{testimonials[currentIndex].name}</h4>
                  <p className="text-white/60">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === i ? 'bg-gold w-8' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
