"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

const benefits = [
  {
    title: "Atención 24/7",
    description: "Concierge personal disponible en todo momento para cualquier requerimiento."
  },
  {
    title: "Garantía Global",
    description: "Cobertura internacional integral en toda nuestra red de servicios."
  },
  {
    title: "Mantenimiento Premium",
    description: "Servicio técnico especializado incluido durante los primeros 3 años."
  },
  {
    title: "Entrega White-Glove",
    description: "Llevamos su vehículo a cualquier punto del país con el máximo cuidado."
  },
];

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % benefits.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-zinc-950 py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Sticky Title */}
            <div className="lg:sticky lg:top-32">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                 >
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        La Diferencia
                    </span>
                    <h2 className="mt-4 font-heading text-5xl font-medium text-white sm:text-6xl leading-tight">
                        ¿Por qué elegir <br />
                        <span className="text-zinc-500">LuxeDrive?</span>
                    </h2>
                 </motion.div>
                 
                 <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-zinc-400 max-w-md font-light leading-relaxed"
                 >
                    No solo vendemos automóviles. Cultivamos relaciones duraderas basadas en la confianza, la discreción y una excelencia inquebrantable.
                 </motion.p>
            </div>

            {/* List */}
            <div className="flex flex-col gap-12">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`border-b pb-12 transition-colors duration-500 ${
                      index === activeIndex ? "border-primary/50" : "border-white/10"
                    }`}
                    >
                        <div className="flex items-start gap-6">
                            <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                              index === activeIndex ? "bg-primary text-white" : "bg-white/5 text-primary"
                            }`}>
                                <Check size={20} />
                            </div>
                            <div>
                                <h3 className={`font-heading text-2xl transition-colors duration-300 ${
                                  index === activeIndex ? "text-primary" : "text-white"
                                }`}>
                                    {benefit.title}
                                </h3>
                                <p className={`mt-2 font-light transition-colors duration-300 ${
                                  index === activeIndex ? "text-zinc-300" : "text-zinc-400"
                                }`}>
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
