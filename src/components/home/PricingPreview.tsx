"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";

export default function PricingPreview() {
  const { language } = useLanguage();
  const t = getDictionary(language);

  // Take the first 3 tiers for preview
  const tiers = [
    { key: "landing", data: t.pricing.tiers.landing, price: "۱۵,۰۰۰", usd: "~ $210", popular: false },
    { key: "business", data: t.pricing.tiers.business, price: "۲۸,۰۰۰", usd: "~ $390", popular: true },
    { key: "ecommerce", data: t.pricing.tiers.ecommerce, price: "۴۵,۰۰۰", usd: "~ $630", popular: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-navy-900 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            {t.pricing.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-2 ${
                tier.popular 
                  ? "bg-navy-800 border-2 border-gold shadow-[0_10px_40px_rgba(212,175,55,0.15)]" 
                  : "glass border-transparent hover:border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {t.common.mostPopular}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.data.name}</h3>
                <p className="text-white/50 text-sm min-h-[40px]">{tier.data.desc}</p>
              </div>

              <div className="mb-6 sm:mb-8 flex flex-col gap-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-gold">{tier.price}</span>
                  <span className="text-white/60 text-sm sm:text-base">افغانی</span>
                </div>
                <span className="text-sm text-white/40">{tier.usd}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.data.features.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
                {tier.data.features.length > 4 && (
                  <li className="text-white/40 text-sm italic">
                    + {language === 'fa' ? 'بیشتر...' : 'more...'}
                  </li>
                )}
              </ul>

              <Link 
                href="/pricing" 
                className={`block w-full text-center py-3 rounded-full font-bold transition-all ${
                  tier.popular 
                    ? "bg-gold text-navy-900 hover:bg-gold-400" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {t.common.getQuote}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/pricing"
            className="text-gold hover:text-white transition-colors font-medium underline underline-offset-4 decoration-gold/50 hover:decoration-white"
          >
            {language === 'fa' ? "مشاهده تعرفه‌های کامل و اپلیکیشن موبایل" : "View Full Pricing & Mobile App Tier"}
          </Link>
        </div>
      </div>
    </section>
  );
}
