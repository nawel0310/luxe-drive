"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FadeIn } from "./FadeIn";

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "CEO, TechSolutions",
    content: "La experiencia de compra en LuxeDrive fue simplemente excepcional. Desde el primer contacto hasta la entrega, cada detalle fue cuidado con perfección.",
    avatar: "CR",
  },
  {
    id: 2,
    name: "Ana Morales",
    role: "Arquitecta",
    content: "No solo compré un auto, adquirí una pieza de ingeniería sublime. El equipo entendió exactamente lo que buscaba y superó mis expectativas.",
    avatar: "AM",
  },
  {
    id: 3,
    name: "David López",
    role: "Inversionista",
    content: "He comprado vehículos de lujo en todo el mundo, pero el servicio personalizado y la exclusividad de LuxeDrive no tienen comparación.",
    avatar: "DL",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
            <h2 className="mb-16 text-center font-heading text-4xl font-bold italic text-white sm:text-5xl drop-shadow-lg">
            Lo que dicen nuestros <span className="text-primary text-shadow-glow">Clientes</span>
            </h2>
        </FadeIn>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <FadeIn key={t.id} delay={index * 0.1}>
                <Card className="border-zinc-800 bg-zinc-900/30 rounded-none hover:bg-zinc-900/50 transition-colors duration-300 border-l-2 border-l-transparent hover:border-l-primary">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar className="h-12 w-12 border border-primary/20">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.avatar}`} />
                    <AvatarFallback className="bg-zinc-800 text-white">{t.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                    <h4 className="font-semibold text-white italic">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-zinc-300 italic font-light">"{t.content}"</p>
                </CardContent>
                </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}