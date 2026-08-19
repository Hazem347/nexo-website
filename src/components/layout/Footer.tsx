"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

// Simple social icons
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";

export default function Footer() {
  const { language, dir } = useLanguage();
  const t = getDictionary(language);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Image src="/images/logo1.png" alt="Nexo Logo" width={140} height={45} className="rounded-lg object-contain" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t.hero.subtitle}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/60 hover:text-gold transition-colors">{t.header.home}</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-gold transition-colors">{t.header.services}</Link></li>
              <li><Link href="/portfolio" className="text-white/60 hover:text-gold transition-colors">{t.header.portfolio}</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-gold transition-colors">{t.header.pricing}</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-gold transition-colors">{t.header.about}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t.header.services}</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>Website Design & Development</li>
              <li>E-Commerce Solutions</li>
              <li>Mobile App Development</li>
              <li>Branding & Logo Design</li>
              <li>Graphic & Social Media Design</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t.common.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="https://wa.me/93700551228" className="hover:text-gold transition-colors">+93 70 055 1228 (AF)</a>
                  <a href="https://wa.me/923290335528" className="hover:text-gold transition-colors mt-1">+92 329 033 5528 (Direct)</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={18} className="text-gold shrink-0" />
                <a href="mailto:nexoservices.info@gmail.com" className="hover:text-gold transition-colors">nexoservices.info@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>Afghanistan, Kabul / Regional</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] sm:text-sm text-white/40 text-center md:text-start ${dir === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
          <p>&copy; {currentYear} NEXO Digital Agency. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
