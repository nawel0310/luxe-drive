"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
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
    description: "La definición absoluta del lujo. Un santuario de silencio y potencia. Interior artesanal con maderas exóticas y cuero de la más alta calidad.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop", // White Rolls Royce style
  },
  {
    id: 2,
    name: "Vantage S",
    description: "Deportividad agresiva con la elegancia de un diseño atemporal. Motor V12 biturbo que entrega una potencia inigualable en su clase.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2688&auto=format&fit=crop", // McLaren / Sports car replacement
  },
  {
    id: 3,
    name: "GT Grand Tourer",
    description: "Para los viajes largos, donde el confort y la velocidad se encuentran. Suspensión adaptativa y tecnología de asistencia al conductor de última generación.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop", // Mercedes GT style
  },
  {
      id: 4,
      name: "Spyder Performante",
      description: "Libertad a cielo abierto sin sacrificar rendimiento. Aerodinámica activa y un chasis de fibra de carbono ultraligero.",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1974&auto=format&fit=crop", // Convertible
  },
  {
      id: 5,
      name: "Electra Future",
      description: "El futuro es silencioso y brutalmente rápido. 0-100 km/h en 2.1 segundos con cero emisiones y autonomía extendida.",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop", // Modern electric vibe
  },
  {
      id: 6,
      name: "Off-Road Sovereign",
      description: "Domina cualquier terreno con el máximo confort. Capacidad 4x4 legendaria envuelta en un interior de primera clase.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop", // Luxury SUV
  }
];

export function Models() {
  const [selectedModel, setSelectedModel] = useState<typeof models[0] | null>(null);

  return (
    <section id="models" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <FadeIn>
            <h2 className="mb-4 font-heading text-4xl font-bold italic text-white sm:text-5xl drop-shadow-lg">
                Nuestros <span className="text-primary text-shadow-glow">Modelos</span>
            </h2>
            <p className="text-lg text-muted-foreground">
                Una colección curada para los gustos más exigentes.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, index) => (
            <FadeIn key={model.id} delay={index * 0.1}>
                <Card 
                    className="group relative overflow-hidden border-zinc-800 bg-zinc-900/50 rounded-none border-0 cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(155,8,13,0.3)] hover:scale-[1.02]"
                    onClick={() => setSelectedModel(model)}
                >
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Consistent dark overlay for all images */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Overlay Title shown on card */}
                    <div className="absolute bottom-4 left-6">
                         <h3 className="font-heading text-xl font-bold text-white italic">{model.name}</h3>
                    </div>
                </div>
                </Card>
            </FadeIn>
          ))}
        </div>

        <Dialog open={!!selectedModel} onOpenChange={(open) => !open && setSelectedModel(null)}>
            <DialogContent className="max-w-3xl bg-zinc-950 border-zinc-800 p-0 overflow-hidden text-white sm:rounded-none">
                 {selectedModel && (
                     <div className="flex flex-col">
                        <div className="relative h-64 sm:h-80 w-full">
                            <Image 
                                src={selectedModel.image} 
                                alt={selectedModel.name} 
                                fill 
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-80" />
                        </div>
                        <div className="p-8 -mt-12 relative z-10">
                            <DialogHeader>
                                <DialogTitle className="font-heading text-4xl font-bold italic text-white mb-2">
                                    {selectedModel.name}
                                </DialogTitle>
                            </DialogHeader>
                            <DialogDescription className="text-lg text-zinc-300 leading-relaxed mt-4">
                                {selectedModel.description}
                            </DialogDescription>
                        </div>
                     </div>
                 )}
            </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}