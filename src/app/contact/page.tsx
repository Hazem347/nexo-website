"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";

export default function ContactPage() {
  const { language, dir } = useLanguage();
  const t = getDictionary(language);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 relative z-10 bg-navy-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-4"
          >
            {language === 'fa' ? <>تماس با <span className="text-gold">ما</span></> : <>Contact <span className="text-gold">Us</span></>}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-base md:text-xl max-w-2xl mx-auto"
          >
            {language === 'fa' 
              ? "آماده شروع یک پروژه خارق‌العاده هستید؟ برای مشاوره رایگان با ما در ارتباط باشید. ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهیم بود." 
              : "Ready to start an extraordinary project? Reach out to us for a free consultation. We'll get back to you as soon as possible."}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info & WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 space-y-8"
          >
            <div className="glass p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                  {language === 'fa' ? "ارتباط مستقیم (واتساپ)" : "Direct Contact (WhatsApp)"}
                </h3>
                
                <div className="space-y-4 mb-10">
                  <a href="https://wa.me/93700551228" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                      <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base sm:text-lg">{language === 'fa' ? "واتساپ افغانستان" : "WhatsApp (Afghanistan)"}</p>
                      <p className="text-white/60 text-[13px] sm:text-sm font-mono">+93 70 055 1228</p>
                    </div>
                  </a>

                  <a href="https://wa.me/923290335528" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold text-navy-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.4)] shrink-0">
                      <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base sm:text-lg text-gold">{language === 'fa' ? "واتساپ مستقیم" : "WhatsApp (Direct)"}</p>
                      <p className="text-white/60 text-[13px] sm:text-sm font-mono">+92 329 033 5528</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-gold w-6 h-6" />
                  <a href="mailto:nexoservices.info@gmail.com" className="text-white/80 hover:text-gold transition-colors">nexoservices.info@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-gold w-6 h-6" />
                  <span className="text-white/80">{language === 'fa' ? "افغانستان، کابل / فعالیت منطقه‌ای" : "Afghanistan, Kabul / Regional Operations"}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="glass p-6 sm:p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                {language === 'fa' ? "ارسال پیام" : "Send us a Message"}
              </h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 ml-1">{language === 'fa' ? "نام و نام خانوادگی" : "Full Name"}</label>
                    <input type="text" className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold/50 focus:bg-navy-900 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70 ml-1">{language === 'fa' ? "نوع کسب‌وکار" : "Business Type"}</label>
                    <input type="text" className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold/50 focus:bg-navy-900 transition-all" placeholder="E-commerce, Clinic, etc." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70 ml-1">{language === 'fa' ? "خدمت مورد نیاز" : "Service Needed"}</label>
                  <select className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold/50 focus:bg-navy-900 transition-all appearance-none">
                    <option value="website">{language === 'fa' ? "وب‌سایت بیزینسی" : "Business Website"}</option>
                    <option value="ecommerce">{language === 'fa' ? "فروشگاه آنلاین" : "E-Commerce"}</option>
                    <option value="app">{language === 'fa' ? "اپلیکیشن موبایل" : "Mobile App"}</option>
                    <option value="design">{language === 'fa' ? "طراحی و برندینگ" : "Design & Branding"}</option>
                    <option value="other">{language === 'fa' ? "سایر" : "Other"}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/70 ml-1">{language === 'fa' ? "پیام شما" : "Your Message"}</label>
                  <textarea rows={4} className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold/50 focus:bg-navy-900 transition-all resize-none" placeholder={language === 'fa' ? "توضیحات پروژه خود را بنویسید..." : "Tell us about your project..."}></textarea>
                </div>

                <button type="submit" className="w-full bg-gold text-navy-900 font-bold text-lg rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-gold-400 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                  <span>{language === 'fa' ? "ارسال پیام" : "Send Message"}</span>
                  <Send size={18} className={dir === 'rtl' ? 'rotate-180' : ''} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
