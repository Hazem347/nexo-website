"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";

export default function PricingPage() {
  const { language, dir } = useLanguage();
  const t = getDictionary(language);

  const tiers = [
    { key: "landing", data: t.pricing.tiers.landing, price: "۱۵,۰۰۰", usd: "~ $210", popular: false, cta: t.common.getQuote },
    { key: "business", data: t.pricing.tiers.business, price: "۲۸,۰۰۰", usd: "~ $390", popular: true, cta: t.common.getQuote },
    { key: "ecommerce", data: t.pricing.tiers.ecommerce, price: "۴۵,۰۰۰", usd: "~ $630", popular: false, cta: t.common.getQuote },
    { key: "custom", data: t.pricing.tiers.custom, price: language === 'fa' ? "شروع از ۷۰,۰۰۰" : "Starting at 70,000", usd: "~ $980+", popular: false, cta: t.pricing.tiers.custom.cta },
  ];

  const faqs = language === 'fa' ? [
    { q: "شرایط پرداخت به چه صورت است؟", a: "پرداخت‌ها معمولاً به صورت مرحله‌ای (۵۰٪ پیش‌پرداخت در زمان عقد قرارداد و ۵۰٪ قبل از راه‌اندازی و تحویل نهایی) انجام می‌شود. برای پروژه‌های بزرگتر قابل مذاکره است." },
    { q: "پشتیبانی پس از تحویل پروژه چگونه است؟", a: "تمامی پروژه‌ها دارای حداقل یک ماه پشتیبانی فنی رایگان جهت رفع ایرادات احتمالی هستند. پس از آن، امکان عقد قرارداد پشتیبانی سالیانه وجود دارد." },
    { q: "زمان تحویل پروژه‌ها چقدر است؟", a: "بسته به پکیج انتخابی و گستردگی پروژه، از ۲ هفته (برای صفحات فرود) تا ۱۲ هفته (برای اپلیکیشن‌های موبایل) متغیر است." },
    { q: "آیا در طول پروژه امکان تغییرات وجود دارد؟", a: "بله، در هر پکیج تعداد مشخصی از دفعات بازبینی (Revision) در نظر گرفته شده است تا نتیجه نهایی کاملاً مطابق سلیقه و نیاز شما باشد." }
  ] : [
    { q: "What are the payment terms?", a: "Payments are generally milestone-based (50% upfront upon contract signing and 50% prior to final launch). We are open to negotiations for larger enterprise projects." },
    { q: "What about post-launch support?", a: "All projects include at least one month of free technical support to resolve any unforeseen issues. Annual support contracts are available afterwards." },
    { q: "How long does a project take?", a: "Depending on the package and scope, delivery ranges from 2 weeks (for landing pages) to 12 weeks (for custom mobile apps)." },
    { q: "Can we request changes during the design phase?", a: "Yes, each tier includes a set number of revision rounds to ensure the final product perfectly matches your vision." }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 relative z-10 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t.pricing.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 ${
                tier.popular 
                  ? "bg-navy-800 border-2 border-gold shadow-[0_10px_40px_rgba(212,175,55,0.15)]" 
                  : "glass border-transparent hover:border-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  {t.common.mostPopular}
                </div>
              )}
              
              <div className="mb-6 flex-grow-0">
                <h3 className="text-2xl font-bold mb-3">{tier.data.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{tier.data.desc}</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/10 flex flex-col gap-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-3xl lg:text-4xl font-extrabold text-gold">{tier.price}</span>
                  {tier.key !== 'custom' && <span className="text-white/60 text-sm">افغانی</span>}
                </div>
                <span className="text-sm text-white/40">{tier.usd}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.data.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact" 
                className={`block w-full text-center py-4 rounded-full font-bold transition-all mt-auto ${
                  tier.popular 
                    ? "bg-gold text-navy-900 hover:bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{language === 'fa' ? 'سوالات متداول' : 'Frequently Asked Questions'}</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold pr-4">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 text-gold ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-white/60 text-sm leading-relaxed border-t border-white/5 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
