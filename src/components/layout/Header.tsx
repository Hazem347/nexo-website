"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, dir } = useLanguage();
  const t = getDictionary(language);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  const navLinks = [
    { name: t.header.home, href: "/" },
    { name: t.header.services, href: "/services" },
    { name: t.header.portfolio, href: "/portfolio" },
    { name: t.header.pricing, href: "/pricing" },
    { name: t.header.about, href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2" : "bg-transparent py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image
            src="/images/logo1.png" 
            alt="Nexo Logo"
            width={80}
            height={30}
            className="object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-gold hover:scale-105 transition-all text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-gold/50 bg-white/5 transition-all text-sm"
          >
            <span className={language === "fa" ? "text-gold font-bold" : "text-white/60"}>دری</span>
            <span className="text-white/30">|</span>
            <span className={language === "en" ? "text-gold font-bold" : "text-white/60"}>English</span>
          </button>
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-gold text-navy-900 font-bold hover:bg-gold-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            {t.common.getQuote}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-50 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden max-h-[85vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm sm:text-base"
              >
                <span className={language === "fa" ? "text-gold font-bold" : "text-white/60"}>دری</span>
                <span className="text-white/30">|</span>
                <span className={language === "en" ? "text-gold font-bold" : "text-white/60"}>EN</span>
              </button>
              <Link
                href="/contact"
                className="px-4 sm:px-6 py-2 rounded-full bg-gold text-navy-900 font-bold text-sm sm:text-base text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.common.getQuote}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
