"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const transform = useMotionTemplate`rotateX(${mouseXSpring}deg) rotateY(${mouseYSpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(yPct * 10); // tilt range
    y.set(xPct * 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className={`relative w-full rounded-2xl overflow-hidden glass ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function FeaturedWork() {
  const { language, dir } = useLanguage();

  const works = [
    {
      title: language === 'fa' ? "اپلیکیشن موبایل PAF-IAST LMS" : "PAF-IAST LMS Mobile App",
      category: language === 'fa' ? "اپلیکیشن موبایل" : "Mobile App",
      desc: language === 'fa' 
        ? "یک پلتفرم جامع آموزشی با رابط کاربری اختصاصی برای دانشجویان، شامل سیستم حضور و غیاب، کارنامه دیجیتال و نقشه یکپارچه." 
        : "A comprehensive academic platform with a premium UI for students, featuring attendance tracking, digital transcripts, and integrated maps.",
      img: "/images/1.jpg",
      link: "/portfolio",
      reverse: false
    },
    {
      title: language === 'fa' ? "پلتفرم آموزشی هوش مصنوعی Study Forge" : "Study Forge AI Learning Platform",
      category: language === 'fa' ? "وب‌سایت SaaS" : "SaaS Web App",
      desc: language === 'fa' 
        ? "یک پلتفرم نوین یادگیری مبتنی بر هوش مصنوعی با امکاناتی نظیر تولید فلش‌کارت، برنامه‌ریز هوشمند و پیگیری معدل دانشجویی." 
        : "An innovative AI-powered learning platform with flashcard generation, smart planner, and CGPA tracking.",
      img: "/images/2.jpg",
      link: "/portfolio",
      reverse: true
    }
  ];

  return (
    <section className="py-24 bg-navy-900 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {language === 'fa' ? <>پروژه‌های <span className="text-gold">برگزیده</span></> : <>Featured <span className="text-gold">Work</span></>}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            {language === 'fa' 
              ? "نگاهی به برخی از برترین پروژه‌هایی که با افتخار برای مشتریان خود خلق کرده‌ایم." 
              : "Take a look at some of the premium digital experiences we've proudly crafted for our clients."}
          </motion.p>
        </div>

        <div className="space-y-32">
          {works.map((work, idx) => (
            <div key={idx} className={`flex flex-col ${work.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              {/* Image side with 3D tilt */}
              <motion.div 
                initial={{ opacity: 0, x: work.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 perspective-[2000px]"
              >
                <TiltCard className="aspect-[4/3] group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10 p-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-navy-800">
                    <Image 
                      src={work.img} 
                      alt={work.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-60"></div>
                  </div>
                </TiltCard>
              </motion.div>

              {/* Content side */}
              <motion.div 
                initial={{ opacity: 0, x: work.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px w-12 bg-gold"></div>
                  <span className="text-gold font-medium tracking-wider text-sm uppercase">{work.category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{work.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {work.desc}
                </p>
                <Link 
                  href={work.link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-gold hover:bg-gold/10 transition-all text-white hover:text-gold group"
                >
                  {language === 'fa' ? "مشاهده پروژه" : "View Case Study"}
                  <ArrowUpRight size={18} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${dir === 'rtl' ? 'rotate-[-90deg] group-hover:-translate-x-1' : ''}`} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all font-medium"
          >
            {language === 'fa' ? "مشاهده همه نمونه‌کارها" : "See All Projects"}
          </Link>
        </div>
      </div>
    </section>
  );
}
