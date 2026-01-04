"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn direction="right">
            <div>
                <h2 className="mb-6 font-heading text-4xl font-bold italic text-white sm:text-5xl drop-shadow-lg">
                Inicia tu <span className="text-primary text-shadow-glow">Viaje</span>
                </h2>
                <p className="mb-12 text-lg text-muted-foreground">
                Estamos listos para atenderte. Completa el formulario y uno de nuestros asesores 
                senior se pondrá en contacto contigo a la brevedad.
                </p>
                
                <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-none bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Phone className="h-6 w-6" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-white italic">Teléfono</h4>
                    <p className="text-muted-foreground">+54 11 1234 5678</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-none bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Mail className="h-6 w-6" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-white italic">Email</h4>
                    <p className="text-muted-foreground">contacto@luxedrive.com</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-none bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-white">
                    <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                    <h4 className="font-semibold text-white italic">Showroom</h4>
                    <p className="text-muted-foreground">Av. Libertador 1234, Buenos Aires</p>
                    </div>
                </div>
                </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="rounded-none border border-zinc-800 bg-zinc-900/50 p-8 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                <form className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300 uppercase tracking-wider text-xs font-semibold">Nombre Completo</Label>
                    <Input id="name" placeholder="John Doe" className="rounded-none bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-primary h-12" />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300 uppercase tracking-wider text-xs font-semibold">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-none bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-primary h-12" />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="message" className="text-zinc-300 uppercase tracking-wider text-xs font-semibold">Mensaje</Label>
                    <Textarea id="message" placeholder="Estoy interesado en..." className="rounded-none min-h-[150px] bg-zinc-950 border-zinc-700 text-white placeholder:text-zinc-600 focus-visible:ring-primary resize-none" />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-none uppercase tracking-widest shadow-[0_0_15px_rgba(155,8,13,0.3)] transition-all hover:shadow-[0_0_25px_rgba(155,8,13,0.6)]">
                    Enviar Mensaje
                </Button>
                </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}