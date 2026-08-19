"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { language, dir } = useLanguage();

  const steps = language === 'fa' ? [
    { icon: <Search />, title: "کشف و نیازسنجی", desc: "درک اهداف، مخاطبان و نیازمندی‌های دقیق کسب‌وکار شما." },
    { icon: <Lightbulb />, title: "استراتژی", desc: "تدوین نقشه راه دیجیتال و معماری اطلاعاتی پروژه." },
    { icon: <PenTool />, title: "طراحی بصری", desc: "خلق رابط کاربری خیره‌کننده بر اساس هویت برند شما." },
    { icon: <Code2 />, title: "توسعه و برنامه‌نویسی", desc: "تبدیل طراحی به کد با استفاده از مدرن‌ترین تکنولوژی‌ها." },
    { icon: <Rocket />, title: "راه‌اندازی", desc: "تست نهایی، استقرار روی سرور و تحویل پروژه به شما." },
  ] : [
    { icon: <Search />, title: "Discovery", desc: "Understanding your goals, audience, and exact business requirements." },
    { icon: <Lightbulb />, title: "Strategy", desc: "Mapping out the digital roadmap and information architecture." },
    { icon: <PenTool />, title: "Design", desc: "Creating stunning UI/UX tailored to your brand identity." },
    { icon: <Code2 />, title: "Development", desc: "Turning designs into robust code using modern technologies." },
    { icon: <Rocket />, title: "Launch", desc: "Final testing, deployment, and handing over the project to you." },
  ];

  return (
    <section className="py-24 bg-navy-800 relative z-10 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {language === 'fa' ? <>فرآیند <span className="text-gold">کاری</span> ما</> : <>Our <span className="text-gold">Process</span></>}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {language === 'fa' 
              ? "مسیر ۵ مرحله‌ای ما برای تبدیل ایده شما به یک محصول دیجیتال موفق و ماندگار." 
              : "Our proven 5-step roadmap to turn your ideas into successful digital products."}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0 rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className={`absolute top-0 bottom-0 bg-gold rounded-full ${dir === 'rtl' ? 'right-0' : 'left-0'}`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-navy-900 border-2 border-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-all duration-300 text-gold relative z-10">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white text-navy-900 flex items-center justify-center text-xs font-bold font-mono shadow-md">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
