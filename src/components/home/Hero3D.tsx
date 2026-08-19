"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getDictionary } from "@/dictionaries";
import * as THREE from "three";
import Link from "next/link";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.8} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#D4AF37"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const { language } = useLanguage();
  const t = getDictionary(language);

  return (
    <section className="relative min-h-[100svh] flex flex-col lg:flex-row items-center pt-24 pb-12 overflow-hidden">
      
      {/* 3D Canvas Wrapper - Stacked on Mobile, Absolute overlay on Desktop */}
      <div className={`relative w-full h-[40vh] min-h-[250px] lg:absolute lg:top-0 lg:bottom-0 lg:h-auto lg:z-0 lg:w-1/2 lg:opacity-60 pointer-events-none ${language === 'fa' ? 'lg:left-0' : 'lg:right-0'} flex-shrink-0 order-1 lg:order-none -mt-8 lg:mt-0`}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AbstractShape />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 order-2 lg:order-none text-center lg:text-start flex flex-col items-center lg:items-start">
        <div className="max-w-4xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-[1.1] mb-4 sm:mb-6"
          >
            {language === 'fa' ? (
              <>کسب‌وکار شما، <span className="text-gold">حرفه‌ای</span><br /> در دنیای دیجیتال</>
            ) : (
              <>Your Business, <span className="text-gold">Professional</span><br className="hidden sm:block" /> in the Digital World</>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <Link
              href="/portfolio"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gold text-navy-900 font-bold hover:bg-gold-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] text-center w-full sm:w-auto"
            >
              {t.common.viewPortfolio}
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full glass text-white font-bold hover:bg-white/10 hover:scale-105 transition-all text-center w-full sm:w-auto"
            >
              {t.common.freeConsultation}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-3 gap-2 sm:gap-6 max-w-2xl mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-start">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">50+</p>
              <p className="text-white/60 text-[10px] sm:text-sm whitespace-nowrap">{t.hero.stats.projects}</p>
            </div>
            <div className="text-center lg:text-start">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">98%</p>
              <p className="text-white/60 text-[10px] sm:text-sm whitespace-nowrap">{t.hero.stats.clients}</p>
            </div>
            <div className="text-center lg:text-start">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gold mb-1 sm:mb-2">24/7</p>
              <p className="text-white/60 text-[10px] sm:text-sm whitespace-nowrap">{t.hero.stats.support}</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorator fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-navy-900 to-transparent z-10" />
    </section>
  );
}
