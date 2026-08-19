"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, Search, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyNexo() {
  const { language } = useLanguage();
  
  const features = language === 'fa' ? [
    { icon: <Smartphone className="text-gold w-8 h-8" />, title: "طراحی موبایل‌محور", desc: "تجربه‌ای بی‌نقص و بی‌نظیر برای تمامی دستگاه‌ها و ابعاد صفحه نمایش." },
    { icon: <Zap className="text-gold w-8 h-8" />, title: "سرعت فوق‌العاده", desc: "بهینه‌سازی شده برای بالاترین سرعت و عملکرد در بارگذاری." },
    { icon: <Search className="text-gold w-8 h-8" />, title: "ساختار بهینه‌شده برای سئو", desc: "کدنویسی استاندارد برای کسب رتبه‌های برتر در موتورهای جستجو." },
    { icon: <ShieldCheck className="text-gold w-8 h-8" />, title: "امنیت و مقیاس‌پذیری", desc: "معماری قدرتمند و امن برای رشد پایدار کسب‌وکار شما." },
  ] : [
    { icon: <Smartphone className="text-gold w-8 h-8" />, title: "Mobile-First Design", desc: "Crafted for perfect experiences on every device." },
    { icon: <Zap className="text-gold w-8 h-8" />, title: "Lightning Fast", desc: "Optimized for speed and performance." },
    { icon: <Search className="text-gold w-8 h-8" />, title: "SEO Optimized", desc: "Built to rank and drive organic traffic." },
    { icon: <ShieldCheck className="text-gold w-8 h-8" />, title: "Secure & Scalable", desc: "Enterprise-grade security and architecture." },
  ];

  return (
    <section className="py-16 md:py-24 relative z-10 bg-navy-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            {language === 'fa' ? <>چرا <span className="text-gold">NEXO</span></> : <>Why Choose <span className="text-gold">NEXO</span></>}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {language === 'fa' 
              ? "ما فقط وب‌سایت نمی‌سازیم؛ ما تجربیات دیجیتالی خلق می‌کنیم که باعث رشد، تعامل و نتیجه واقعی می‌شوند." 
              : "We don't just build websites; we craft digital experiences that drive growth, engagement, and results."}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 sm:p-8 rounded-2xl hover:glass-gold transition-all duration-300 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-gold/10 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                {feat.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-gold transition-colors">{feat.title}</h3>
              <p className="text-white/60 text-[13px] sm:text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
