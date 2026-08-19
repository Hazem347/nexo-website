"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { dir } = useLanguage();
  
  // Keep it fixed to the bottom, adjust left/right based on layout direction?
  // User requested "fixed bottom-right corner", so we can keep it right-aligned.
  // Wait, if RTL, maybe bottom-left is better? Let's keep it fixed bottom-right for both 
  // since most users expect chat widgets there, or adjust based on dir.
  // Ensure it doesn't overlap text on mobile, use safe-area
  const positionClass = dir === "rtl" 
    ? "bottom-[calc(env(safe-area-inset-bottom,24px)+24px)] left-4 sm:left-6" 
    : "bottom-[calc(env(safe-area-inset-bottom,24px)+24px)] right-4 sm:right-6";

  return (
    <a
      href="https://wa.me/923290335528"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positionClass} z-50 bg-gold text-navy-900 p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all duration-300 group`}
      aria-label="Direct WhatsApp Chat"
    >
      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <MessageCircle size={32} className="relative z-10" />
    </a>
  );
}
