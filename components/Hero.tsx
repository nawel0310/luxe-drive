"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the background
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[110vh] w-full overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/car_003.webp"
          alt="Luxury Car Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20 text-center">
        
        {/* Eyebrow Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-primary/50" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Est. 2026
          </span>
          <div className="h-[1px] w-12 bg-primary/50" />
        </motion.div>

        {/* Main Title - Split for animation */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="font-heading text-6xl font-medium tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[10rem] leading-none mix-blend-overlay"
          >
            PRECISIÓN
          </motion.h1>
        </div>

        {/* "&" entre los títulos */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="flex justify-center"
          >
            <span
              className="text-6xl font-medium italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none sm:text-8xl md:text-9xl lg:text-[10rem]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              &amp;
            </span>
          </motion.div>
        </div>

        <div className="overflow-hidden">
           <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="font-heading text-6xl font-medium tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[10rem] leading-none"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              ELEGANCIA
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/70 sm:text-xl"
        >
          Donde la ingeniería se encuentra con el arte. 
          <br className="hidden sm:block"/>
          Una experiencia de conducción redefinida.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <Link 
            href="#models"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40"
          >
             <span className="text-sm font-bold uppercase tracking-widest text-white">
               Descubrir Colección
             </span>
             <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:translate-x-1">
               →
             </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
      </motion.div>
    </section>
  );
}
