"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "La experiencia de compra en LuxeDrive fue simplemente excepcional. Cada detalle fue cuidado con perfección absoluta.",
    author: "Carlos Rodríguez",
    role: "CEO, TechSolutions"
  },
  {
    id: 2,
    text: "No solo compré un auto, adquirí una pieza de ingeniería sublime. El equipo entendió exactamente lo que buscaba.",
    author: "Ana Morales",
    role: "Arquitecta"
  },
  {
    id: 3,
    text: "He comprado vehículos de lujo en todo el mundo, pero el servicio personalizado de LuxeDrive no tiene comparación.",
    author: "David López",
    role: "Inversionista"
  }
];

export function Testimonials() {
  const AUTO_PLAY = true; // cambia a true para activar desplazamiento automático

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!AUTO_PLAY) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20">
         <Image 
            src="/images/car_001.webp"
            alt="bg" 
            fill 
            className="object-cover blur-3xl grayscale"
         />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl"
        >
            <div className="mb-8 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
            </div>
            
            <h3 className="font-heading text-3xl font-light leading-snug text-white sm:text-4xl md:text-5xl italic">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
            </h3>
            
            <div className="mt-12">
                <p className="text-lg font-bold text-white">
                    {testimonials[activeIndex].author}
                </p>
                <p className="text-sm uppercase tracking-widest text-zinc-500">
                    {testimonials[activeIndex].role}
                </p>
            </div>
        </motion.div>

        {/* Indicators */}
        <div className="mt-16 flex justify-center gap-4">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1 transition-all duration-300 ${
                        index === activeIndex ? "w-12 bg-primary" : "w-4 bg-zinc-800"
                    }`}
                />
            ))}
        </div>

      </div>
    </section>
  );
}
