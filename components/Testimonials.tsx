"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "CEO, TechSolutions",
    content: "La experiencia de compra en LuxeDrive fue simplemente excepcional. Desde el primer contacto hasta la entrega, cada detalle fue cuidado con perfección.",
    avatar: "CR",
    rating: 5,
    date: "Hace 2 meses"
  },
  {
    id: 2,
    name: "Ana Morales",
    role: "Arquitecta",
    content: "No solo compré un auto, adquirí una pieza de ingeniería sublime. El equipo entendió exactamente lo que buscaba y superó mis expectativas.",
    avatar: "AM",
    rating: 5,
    date: "Hace 1 mes"
  },
  {
    id: 3,
    name: "David López",
    role: "Inversionista",
    content: "He comprado vehículos de lujo en todo el mundo, pero el servicio personalizado y la exclusividad de LuxeDrive no tienen comparación.",
    avatar: "DL",
    rating: 4.5,
    date: "Hace 3 semanas"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(155,8,13,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-center font-heading text-4xl font-bold italic text-white sm:text-5xl drop-shadow-lg mb-4">
                Lo que dicen nuestros <span className="text-primary text-shadow-glow">Clientes</span>
                </h2>
                <div className="h-1 w-20 bg-primary" />
            </div>
        </FadeIn>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <FadeIn key={t.id} delay={index * 0.1}>
                <Card className="group border-zinc-800 bg-zinc-900/40 rounded-none hover:bg-zinc-900/60 transition-all duration-500 border-t-2 border-t-transparent hover:border-t-primary relative overflow-hidden h-full flex flex-col shadow-2xl">
                    <Quote className="absolute top-4 right-4 h-12 w-12 text-white/5 group-hover:text-primary/10 transition-colors duration-500" />
                    
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <Avatar className="h-14 w-14 border-2 border-zinc-800 group-hover:border-primary/50 transition-colors duration-500 shadow-lg">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.avatar}`} />
                        <AvatarFallback className="bg-zinc-800 text-white">{t.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                        <h4 className="font-semibold text-white italic text-lg leading-tight group-hover:text-primary transition-colors duration-300">{t.name}</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{t.role}</p>
                        </div>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col flex-grow">
                        <div className="flex gap-0.5 mb-4">
                            {[...Array(5)].map((_, i) => {
                                const isHalf = t.rating === 4.5 && i === 4;
                                return (
                                    <Star 
                                        key={i} 
                                        className={`h-4 w-4 ${
                                            i < Math.floor(t.rating) 
                                            ? "fill-primary text-primary" 
                                            : isHalf 
                                                ? "fill-primary/50 text-primary/50" 
                                                : "text-zinc-700 fill-zinc-700"
                                        }`} 
                                    />
                                );
                            })}
                        </div>
                        
                        <p className="text-zinc-300 italic font-light leading-relaxed mb-6">
                            &ldquo;{t.content}&rdquo;
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-white/5">
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{t.date}</span>
                        </div>
                    </CardContent>
                </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}