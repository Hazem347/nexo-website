"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Heart, Award, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const values = language === 'fa' ? [
    { icon: <Target className="w-8 h-8 text-gold" />, title: "تمرکز بر کیفیت", desc: "ما هرگز کیفیت را فدای کمیت نمی‌کنیم. هر پروژه یک شاهکار است." },
    { icon: <Heart className="w-8 h-8 text-gold" />, title: "مشتری‌مداری", desc: "موفقیت شما، موفقیت ماست. ما در تمام مسیر همراه شما هستیم." },
    { icon: <Award className="w-8 h-8 text-gold" />, title: "برتری و تخصص", desc: "استفاده از جدیدترین تکنولوژی‌ها و استانداردهای جهانی." },
    { icon: <Shield className="w-8 h-8 text-gold" />, title: "اعتماد و شفافیت", desc: "ارتباط شفاف و صادقانه در تمام مراحل انجام پروژه." },
  ] : [
    { icon: <Target className="w-8 h-8 text-gold" />, title: "Quality Focused", desc: "We never compromise on quality. Every project is a masterpiece." },
    { icon: <Heart className="w-8 h-8 text-gold" />, title: "Client Centric", desc: "Your success is our success. We partner with you every step of the way." },
    { icon: <Award className="w-8 h-8 text-gold" />, title: "Excellence & Expertise", desc: "Utilizing the latest technologies and global standards." },
    { icon: <Shield className="w-8 h-8 text-gold" />, title: "Trust & Transparency", desc: "Honest and transparent communication throughout the project lifecycle." },
  ];

  return (
    <div className="pt-32 pb-24 relative z-10 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              {language === 'fa' ? <>داستان <span className="text-gold">NEXO</span></> : <>The <span className="text-gold">NEXO</span> Story</>}
            </h1>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                {language === 'fa' 
                  ? "نکسو (NEXO) تنها یک آژانس دیجیتال نیست؛ ما شریک استراتژیک شما در مسیر تحول دیجیتال هستیم. هدف ما ارائه خدمات پرمیوم و در سطح جهانی برای کسب‌وکارهای افغانستان و منطقه است تا بتوانند در دنیای پررقابت امروز به بهترین شکل دیده شوند." 
                  : "NEXO is not just a digital agency; we are your strategic partner in digital transformation. Our goal is to provide premium, world-class services to businesses in Afghanistan and the region, ensuring they stand out in today's competitive world."}
              </p>
              <p>
                {language === 'fa' 
                  ? "ما به شدت معتقدیم که طراحی خوب، کسب‌وکار خوب است. به همین دلیل از ارزان‌فروشی و کارهای قالبی دوری کرده‌ایم تا تمرکز خود را روی خلق ارزش واقعی، هویت بصری ماندگار و سیستم‌های نرم‌افزاری قدرتمند بگذاریم." 
                  : "We strongly believe that good design is good business. That's why we stay away from cheap templates, focusing instead on creating real value, enduring visual identities, and powerful software systems."}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass p-4 shadow-[0_0_50px_rgba(212,175,55,0.15)]">
               <div className="absolute inset-0 bg-navy-800 rounded-2xl overflow-hidden m-4">
                 <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent"></div>
                 {/* Abstract representation of the agency */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
                   <div className="w-20 h-40 bg-gold rounded-full blur-xl animate-pulse opacity-50"></div>
                   <div className="w-40 h-40 bg-white/20 rounded-full blur-2xl animate-pulse delay-100 opacity-50"></div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/images/logo1.png" alt="Nexo Logo" width={200} height={80} className="rounded-lg drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              {language === 'fa' ? <>ارزش‌های <span className="text-gold">بنیادین</span> ما</> : <>Our Core <span className="text-gold">Values</span></>}
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
