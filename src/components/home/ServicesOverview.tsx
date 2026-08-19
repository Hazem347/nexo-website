"use client";

import { motion } from "framer-motion";
import { Monitor, Code, ShoppingCart, PenTool, Image as ImageIcon, Layout, Share2, Layers } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesOverview() {
  const { language } = useLanguage();

  const services = language === 'fa' ? [
    { icon: <Monitor />, title: "طراحی وب‌سایت", desc: "طراحی رابط کاربری خیره‌کننده و تجربه‌ی بی‌نظیر برای کاربران." },
    { icon: <Code />, title: "توسعه وب‌سایت", desc: "کدنویسی اختصاصی، پرسرعت و امن با جدیدترین تکنولوژی‌ها." },
    { icon: <ShoppingCart />, title: "تجارت الکترونیک", desc: "فروشگاه‌های آنلاین قدرتمند برای افزایش فروش شما." },
    { icon: <PenTool />, title: "برندینگ", desc: "خلق هویت بصری یکپارچه و متمایز برای برند شما." },
    { icon: <ImageIcon />, title: "طراحی لوگو", desc: "لوگوهای حرفه‌ای، مینیمال و ماندگار در ذهن مخاطب." },
    { icon: <Layout />, title: "طراحی گرافیک", desc: "طراحی اقلام تبلیغاتی، کاتالوگ و گرافیک‌های خلاقانه." },
    { icon: <Share2 />, title: "طراحی شبکه‌های اجتماعی", desc: "قالب‌ها و محتوای جذاب برای اینستاگرام و لینکدین." },
    { icon: <Layers />, title: "راه‌حل‌های دیجیتال", desc: "سیستم‌های اختصاصی و اتوماسیون برای رشد کسب‌وکار." },
  ] : [
    { icon: <Monitor />, title: "Website Design", desc: "Stunning UI/UX design crafted for optimal user engagement." },
    { icon: <Code />, title: "Website Development", desc: "Robust, fast, and secure coding using modern tech stacks." },
    { icon: <ShoppingCart />, title: "E-Commerce", desc: "Powerful online stores built to maximize your sales." },
    { icon: <PenTool />, title: "Branding", desc: "Creating cohesive, memorable brand identities." },
    { icon: <ImageIcon />, title: "Logo Design", desc: "Professional, timeless logos that stand out." },
    { icon: <Layout />, title: "Graphic Design", desc: "Creative promotional materials and visual assets." },
    { icon: <Share2 />, title: "Social Media Design", desc: "Engaging templates and posts for your social channels." },
    { icon: <Layers />, title: "Digital Solutions", desc: "Custom systems and automation for business growth." },
  ];

  return (
    <section className="py-24 bg-navy-800 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              {language === 'fa' ? <>خدمات <span className="text-gold">تخصصی</span> ما</> : <>Our <span className="text-gold">Expertise</span></>}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60"
            >
              {language === 'fa' 
                ? "ما مجموعه‌ای کامل از خدمات دیجیتال را برای تبدیل ایده‌های شما به واقعیت ارائه می‌دهیم." 
                : "We provide a comprehensive suite of digital services to turn your ideas into reality."}
            </motion.p>
          </div>
          <Link href="/services" className="text-gold hover:text-white transition-colors font-medium underline underline-offset-4 decoration-gold/50 hover:decoration-white">
            {language === 'fa' ? "مشاهده همه خدمات" : "View All Services"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href="/services" className="block h-full">
                <div className="glass p-6 rounded-2xl hover:glass-gold transition-all duration-300 h-full group">
                  <div className="text-white/40 group-hover:text-gold transition-colors mb-4 w-10 h-10">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white/90 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
