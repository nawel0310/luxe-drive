"use client";

import { FadeIn } from "./FadeIn";
import { 
  Clock, 
  ShieldCheck, 
  Wrench, 
  MapPin, 
  Ticket, 
  BadgeDollarSign 
} from "lucide-react";

const benefits = [
  {
    text: "Atención personalizada 24/7",
    icon: Clock
  },
  {
    text: "Garantía extendida internacional",
    icon: ShieldCheck
  },
  {
    text: "Mantenimiento incluido por 3 años",
    icon: Wrench
  },
  {
    text: "Entrega a domicilio en cualquier parte del país",
    icon: MapPin
  },
  {
    text: "Acceso exclusivo a eventos de la marca",
    icon: Ticket
  },
  {
    text: "Financiamiento a medida",
    icon: BadgeDollarSign
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/car_why_choose_us.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-8 font-heading text-4xl font-bold italic text-white sm:text-5xl drop-shadow-lg">
                Por qué elegir <span className="text-primary text-shadow-glow">LuxeDrive</span>
            </h2>
            <p className="mb-12 text-lg text-gray-300">
                No solo vendemos autos, construimos relaciones duraderas basadas en la confianza y la excelencia.
            </p>
          </FadeIn>
          
          <div className="grid gap-8 sm:grid-cols-2 text-left mb-12">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="flex items-center gap-4 group p-4 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                    <benefit.icon className="h-8 w-8 text-primary flex-shrink-0 transition-transform group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(155,8,13,0.5)]" />
                    <span className="text-zinc-200 group-hover:text-white transition-colors text-lg font-light">{benefit.text}</span>
                  </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}