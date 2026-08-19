"use client";

import { motion } from "framer-motion";
import { Monitor, Code, ShoppingCart, PenTool, Image as ImageIcon, Layout, Share2, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { language } = useLanguage();

  const services = language === 'fa' ? [
    { icon: <Monitor className="w-12 h-12" />, title: "طراحی وب‌سایت", desc: "طراحی رابط کاربری خیره‌کننده و تجربه‌ی بی‌نظیر برای کاربران.", process: ["تحقیق و بنچمارک", "وایرفریم", "طراحی UI/UX"] },
    { icon: <Code className="w-12 h-12" />, title: "توسعه وب‌سایت", desc: "کدنویسی اختصاصی، پرسرعت و امن با جدیدترین تکنولوژی‌ها.", process: ["توسعه فرانت‌اند", "توسعه بک‌اند", "تست و دیباگ"] },
    { icon: <ShoppingCart className="w-12 h-12" />, title: "تجارت الکترونیک", desc: "فروشگاه‌های آنلاین قدرتمند برای افزایش فروش شما.", process: ["طراحی کاتالوگ", "درگاه پرداخت", "داشبورد مدیریت"] },
    { icon: <PenTool className="w-12 h-12" />, title: "برندینگ", desc: "خلق هویت بصری یکپارچه و متمایز برای برند شما.", process: ["استراتژی برند", "پالت رنگی", "تایپوگرافی"] },
    { icon: <ImageIcon className="w-12 h-12" />, title: "طراحی لوگو", desc: "لوگوهای حرفه‌ای، مینیمال و ماندگار در ذهن مخاطب.", process: ["کانسپت‌سازی", "اسکچ", "دیجیتال‌سازی"] },
    { icon: <Layout className="w-12 h-12" />, title: "طراحی گرافیک", desc: "طراحی اقلام تبلیغاتی، کاتالوگ و گرافیک‌های خلاقانه.", process: ["ایده‌پردازی", "طراحی پوستر", "چاپ"] },
    { icon: <Share2 className="w-12 h-12" />, title: "طراحی شبکه‌های اجتماعی", desc: "قالب‌ها و محتوای جذاب برای اینستاگرام و لینکدین.", process: ["تقویم محتوا", "قالب‌پست", "موشن‌گرافیک"] },
    { icon: <Layers className="w-12 h-12" />, title: "راه‌حل‌های دیجیتال", desc: "سیستم‌های اختصاصی و اتوماسیون برای رشد کسب‌وکار.", process: ["تحلیل سیستم", "معماری دیتا", "پیاده‌سازی"] },
  ] : [
    { icon: <Monitor className="w-12 h-12" />, title: "Website Design", desc: "Stunning UI/UX design crafted for optimal user engagement.", process: ["Research & Benchmark", "Wireframing", "UI/UX Design"] },
    { icon: <Code className="w-12 h-12" />, title: "Website Development", desc: "Robust, fast, and secure coding using modern tech stacks.", process: ["Frontend Dev", "Backend Dev", "Testing & QA"] },
    { icon: <ShoppingCart className="w-12 h-12" />, title: "E-Commerce", desc: "Powerful online stores built to maximize your sales.", process: ["Catalog Design", "Payment Gateway", "Admin Dashboard"] },
    { icon: <PenTool className="w-12 h-12" />, title: "Branding", desc: "Creating cohesive, memorable brand identities.", process: ["Brand Strategy", "Color Palette", "Typography"] },
    { icon: <ImageIcon className="w-12 h-12" />, title: "Logo Design", desc: "Professional, timeless logos that stand out.", process: ["Concept Creation", "Sketching", "Digitalization"] },
    { icon: <Layout className="w-12 h-12" />, title: "Graphic Design", desc: "Creative promotional materials and visual assets.", process: ["Ideation", "Poster Design", "Print Ready"] },
    { icon: <Share2 className="w-12 h-12" />, title: "Social Media Design", desc: "Engaging templates and posts for your social channels.", process: ["Content Calendar", "Post Templates", "Motion Graphics"] },
    { icon: <Layers className="w-12 h-12" />, title: "Digital Solutions", desc: "Custom systems and automation for business growth.", process: ["System Analysis", "Data Architecture", "Implementation"] },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 relative z-10 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6"
          >
            {language === 'fa' ? <>خدمات <span className="text-gold">پرمیوم</span> ما</> : <>Our Premium <span className="text-gold">Services</span></>}
          </motion.h1>
        </div>

        <div className="space-y-24">
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 lg:gap-12 items-start md:items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="glass p-8 sm:p-12 rounded-3xl flex items-center justify-center aspect-video group hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-shadow">
                  <div className="text-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                    {srv.icon}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{srv.title}</h2>
                <p className="text-white/60 text-base md:text-lg leading-relaxed">{srv.desc}</p>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{language === 'fa' ? "مراحل انجام کار:" : "Our Process:"}</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {srv.process.map((p, i) => (
                      <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-[13px] sm:text-sm">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
