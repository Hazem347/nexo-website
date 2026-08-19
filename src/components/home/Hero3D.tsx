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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <div className={`absolute top-0 bottom-0 z-0 opacity-60 pointer-events-none w-full lg:w-1/2 ${language === 'fa' ? 'left-0' : 'right-0'}`}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AbstractShape />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-4xl pt-10 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            {language === 'fa' ? (
              <>کسب‌وکار شما، <span className="text-gold">حرفه‌ای</span><br /> در دنیای دیجیتال</>
            ) : (
              <>Your Business, <span className="text-gold">Professional</span><br /> in the Digital World</>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full bg-gold text-navy-900 font-bold hover:bg-gold-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              {t.common.viewPortfolio}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 hover:scale-105 transition-all"
            >
              {t.common.freeConsultation}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">50+</p>
              <p className="text-white/60 text-sm">{t.hero.stats.projects}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">98%</p>
              <p className="text-white/60 text-sm">{t.hero.stats.clients}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold mb-2">24/7</p>
              <p className="text-white/60 text-sm">{t.hero.stats.support}</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorator fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent z-10" />
    </section>
  );
}
