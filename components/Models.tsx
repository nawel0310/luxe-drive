"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const models = [
  {
    id: 1,
    name: "Phantom Serenity",
    tagline: "Absolute Silence",
    description: "La definición absoluta del lujo. Un santuario de silencio y potencia. Interior artesanal con maderas exóticas y cuero de la más alta calidad.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
    specs: ["V12", "600 HP", "3.2s"]
  },
  {
    id: 2,
    name: "Vantage S",
    tagline: "Pure Aggression",
    description: "Deportividad agresiva con la elegancia de un diseño atemporal. Motor V12 biturbo que entrega una potencia inigualable en su clase.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2688&auto=format&fit=crop",
    specs: ["V8 Bi-Turbo", "720 HP", "2.8s"]
  },
  {
    id: 3,
    name: "GT Grand Tourer",
    tagline: "Endless Horizons",
    description: "Para los viajes largos, donde el confort y la velocidad se encuentran. Suspensión adaptativa y tecnología de asistencia al conductor de última generación.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    specs: ["W12", "650 HP", "3.0s"]
  },
   {
    id: 4,
    name: "Spyder Performante",
    tagline: "Open Sky",
    description: "Libertad a cielo abierto sin sacrificar rendimiento. Aerodinámica activa y un chasis de fibra de carbono ultraligero.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1974&auto=format&fit=crop",
    specs: ["V10", "640 HP", "2.9s"]
  },
];

export function Models() {
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

  return (
    <section id="models" className="bg-background py-32">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl"
             >
              LA COLECCIÓN
             </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-xs text-right text-sm font-light leading-relaxed text-neutral-400"
          >
            Curada meticulosamente para los entusiastas más exigentes del mundo.
          </motion.p>
        </div>

        {/* Minimal Grid */}
        <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
          {models.map((model, index) => (
            <ModelCard 
                key={model.id} 
                model={model} 
                index={index} 
                onClick={() => setSelectedModel(model)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedModel} onOpenChange={(open) => !open && setSelectedModel(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] lg:max-w-7xl border-0 bg-zinc-950 p-0 text-white sm:rounded-none overflow-hidden ring-0 outline-none max-h-[85dvh] md:max-h-none">
             {selectedModel && (
                 <div className="grid md:grid-cols-2 overflow-y-auto md:overflow-visible max-h-[85dvh] md:max-h-none">
                    <div className="relative aspect-square md:aspect-auto h-full w-full">
                        <Image 
                            src={selectedModel.image} 
                            alt={selectedModel.name} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4">{selectedModel.tagline}</span>
                        <DialogHeader>
                            <DialogTitle className="font-heading text-5xl font-medium text-white mb-6">
                                {selectedModel.name}
                            </DialogTitle>
                        </DialogHeader>
                        <DialogDescription className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                            {selectedModel.description}
                        </DialogDescription>
                        
                        <div className="flex gap-8 border-t border-white/10 pt-8">
                            {selectedModel.specs.map((spec, i) => (
                                <div key={i}>
                                    <p className="font-heading text-xl text-white">{spec}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
             )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ModelCard({ model, index, onClick }: { model: any, index: number, onClick: () => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group relative cursor-pointer ${index % 2 !== 0 ? "md:mt-24" : ""}`} // Staggered grid
            onClick={onClick}
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 w-full">
                <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                
                {/* Hover Reveal Button */}
                <div className="absolute top-4 right-4 translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-start justify-between">
                <div>
                    <h3 className="font-heading text-2xl font-medium text-white">{model.name}</h3>
                    <p className="mt-1 text-sm font-light text-neutral-500 uppercase tracking-widest">{model.tagline}</p>
                </div>
                <span className="text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    0{model.id}
                </span>
            </div>
        </motion.div>
    );
}
