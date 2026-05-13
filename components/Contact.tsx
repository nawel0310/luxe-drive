"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-32">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Contacto
            </span>
            <h2 className="mt-4 font-heading text-5xl font-medium text-white sm:text-6xl">
                Inicia tu Viaje
            </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
            <motion.form 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
            >
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="group relative">
                        <Input 
                            type="text" 
                            placeholder="Nombre" 
                            className="h-14 w-full border-b border-white/10 bg-transparent px-4 text-lg text-white placeholder:text-zinc-600 focus-visible:border-primary focus-visible:ring-0 rounded-none transition-colors"
                        />
                    </div>
                    <div className="group relative">
                         <Input 
                            type="email" 
                            placeholder="Email" 
                            className="h-14 w-full border-b border-white/10 bg-transparent px-4 text-lg text-white placeholder:text-zinc-600 focus-visible:border-primary focus-visible:ring-0 rounded-none transition-colors"
                        />
                    </div>
                </div>
                
                <div className="group relative">
                    <Textarea 
                        placeholder="Mensaje" 
                        className="min-h-[150px] w-full border-b border-white/10 bg-transparent px-4 text-lg text-white placeholder:text-zinc-600 focus-visible:border-primary focus-visible:ring-0 rounded-none resize-none transition-colors"
                    />
                </div>

                <div className="flex justify-center pt-8">
                    <Button 
                        size="lg" 
                        className="h-14 rounded-full bg-white px-12 text-sm font-bold uppercase tracking-widest text-black transition-transform hover:scale-105 hover:bg-primary hover:text-white"
                    >
                        Enviar Solicitud
                    </Button>
                </div>
            </motion.form>

            <div className="mt-24 grid grid-cols-1 gap-8 text-center text-zinc-500 sm:grid-cols-3">
                <div>
                    <h4 className="mb-2 text-white font-heading text-xl">Showroom</h4>
                    <p>Av. Libertador 1234<br/>Buenos Aires, AR</p>
                </div>
                <div>
                    <h4 className="mb-2 text-white font-heading text-xl">Contacto</h4>
                    <p>+54 11 1234 5678<br/>vip@luxedrive.com</p>
                </div>
                 <div>
                    <h4 className="mb-2 text-white font-heading text-xl">Horario</h4>
                    <p>Lun - Vie: 10am - 8pm<br/>Sab: Cita Previa</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
