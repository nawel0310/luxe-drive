"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
          {/* Image Composition */}
          <div className="relative">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 aspect-[4/3] w-full overflow-hidden"
             >
                <Image
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop"
                    alt="Interior de lujo"
                    fill
                    className="object-cover"
                />
             </motion.div>
             
             {/* Decorative Elements */}
             <div className="absolute -bottom-12 -left-12 h-64 w-64 border border-white/5 opacity-50 hidden lg:block" />
             <div className="absolute -top-12 -right-12 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="font-heading text-5xl font-medium leading-tight text-white sm:text-6xl mb-8">
                    Más que autos, <br />
                    <span className="text-primary italic">Obras de Arte.</span>
                </h2>
                
                <div className="space-y-6 text-lg font-light leading-relaxed text-zinc-400">
                    <p>
                        En LuxeDrive, no vendemos transporte. Entregamos emoción pura encapsulada en metal, cuero y fibra de carbono.
                    </p>
                    <p>
                        Cada vehículo en nuestro inventario ha sido seleccionado no solo por sus especificaciones técnicas, sino por su capacidad para detener el tiempo cuando pasas a su lado.
                    </p>
                </div>

                <div className="mt-12 flex items-center gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="font-heading text-4xl text-white">50+</span>
                        <span className="text-xs uppercase tracking-widest text-zinc-500">Exclusivos</span>
                    </div>
                     <div className="flex flex-col gap-1">
                        <span className="font-heading text-4xl text-white">100%</span>
                        <span className="text-xs uppercase tracking-widest text-zinc-500">Verificados</span>
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
