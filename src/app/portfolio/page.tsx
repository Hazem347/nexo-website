"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioPage() {
  const { language, dir } = useLanguage();

  const caseStudies = [
    {
      title: language === 'fa' ? "اپلیکیشن موبایل PAF-IAST LMS" : "PAF-IAST LMS Mobile App",
      category: language === 'fa' ? "اپلیکیشن موبایل" : "Mobile App",
      challenge: language === 'fa' ? "LMS تحت وب قدیمی با رابط کاربری ضعیف و عدم دسترسی آسان دانشجویان." : "Old web-based LMS with poor UX and difficult access for students.",
      solution: language === 'fa' ? "طراحی مجدد و توسعه با React Native + Expo با رابط کاربری پرمیوم." : "Premium redesign using React Native + Expo.",
      features: language === 'fa' 
        ? ["داشبورد آموزشی", "حضور و غیاب", "کارنامه با QR Code", "ماژول خوابگاه و کارآموزی با موقعیت‌یاب"] 
        : ["Academic dashboard", "Attendance tracking", "Transcripts with QR code", "Hostel/Internship modules with GPS check-in"],
      img: "/images/1.jpg",
    },
    {
      title: language === 'fa' ? "پلتفرم آموزشی Study Forge" : "Study Forge AI Learning Platform",
      category: language === 'fa' ? "نرم‌افزار SaaS" : "SaaS Platform",
      challenge: language === 'fa' ? "دانشجویان به یک سیستم جامع و هوشمند برای یادگیری نیاز داشتند." : "Students needed an all-in-one AI-powered study system.",
      solution: language === 'fa' ? "توسعه پلتفرم SaaS قدرتمند با Next.js و ادغام هوش مصنوعی." : "Next.js SaaS platform integrating advanced AI.",
      features: language === 'fa' 
        ? ["معلم هوش مصنوعی", "تولید فلش‌کارت و آزمون", "برنامه‌ریز هوشمند", "پیگیری معدل", "حالت تمرکز و تحلیل‌ها"] 
        : ["AI tutor", "Flashcard/quiz generation", "Smart planner", "CGPA tracker", "Focus mode & analytics"],
      img: "/images/2.jpg",
      link: "https://suforg.netlify.app"
    }
  ];

  const placeholders = [
    { title: "Restaurant Ariana", cat: language === 'fa' ? "وب‌سایت" : "Websites" },
    { title: "Noor Clinic", cat: language === 'fa' ? "برندینگ" : "Branding" },
    { title: "Pamir Travel Agency", cat: language === 'fa' ? "وب‌سایت" : "Websites" }
  ];

  return (
    <div className="pt-32 pb-24 relative z-10 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {language === 'fa' ? <>نمونه‌کارهای <span className="text-gold">برگزیده</span></> : <>Featured <span className="text-gold">Portfolio</span></>}
          </motion.h1>
        </div>

        <div className="space-y-32 mb-32">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-12 rounded-3xl"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Visual */}
                <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-navy-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative aspect-[4/3] group perspective-[1000px]">
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent z-10"></div>
                   <Image 
                     src={study.img} 
                     alt={study.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>

                {/* Info */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <span className="text-gold font-medium tracking-wider text-sm uppercase mb-2 block">{study.category}</span>
                    <h2 className="text-3xl md:text-4xl font-bold">{study.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white/80 mb-2">{language === 'fa' ? "چالش:" : "Challenge:"}</h4>
                      <p className="text-white/60 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white/80 mb-2">{language === 'fa' ? "راه‌حل:" : "Solution:"}</h4>
                      <p className="text-white/60 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white/80 mb-4">{language === 'fa' ? "ویژگی‌های کلیدی:" : "Key Features:"}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {study.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-gold shrink-0 mt-1" />
                          <span className="text-white/70 text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {study.link && (
                    <a href={study.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-navy-900 font-bold hover:bg-gold-400 transition-colors">
                      {language === 'fa' ? "مشاهده زنده" : "Live View"} <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Placeholder */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">{language === 'fa' ? "سایر پروژه‌ها" : "Other Projects"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholders.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 group cursor-pointer hover:border-gold/30 transition-colors"
              >
                <div className="aspect-video bg-navy-800 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-shadow">
                  {/* Abstract 3D placeholder visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="w-16 h-16 rounded-full border-2 border-gold/30 absolute animate-pulse"></div>
                  <div className="w-24 h-24 rounded-full border border-gold/10 absolute rotate-45"></div>
                  <span className="relative z-10 text-white/30 font-medium tracking-widest uppercase text-sm">NEXO WORK</span>
                </div>
                <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">{p.cat}</span>
                <h3 className="text-xl font-bold">{p.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
