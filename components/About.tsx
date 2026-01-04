"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const aboutImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1966&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2574&auto=format&fit=crop"
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn direction="right" className="relative">
             <div className="relative aspect-video w-full overflow-hidden rounded-sm lg:aspect-square shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                <Carousel
                    plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                    ]}
                    className="h-full w-full"
                >
                    <CarouselContent className="h-full ml-0">
                        {aboutImages.map((src, index) => (
                            <CarouselItem key={index} className="h-full pl-0 relative aspect-video lg:aspect-square">
                                 <Image
                                    src={src}
                                    alt="Detalle de interior de auto de lujo"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                {/* Decorative border */}
                <div className="absolute -inset-4 border border-primary/20 -z-10 rounded-sm" />
             </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="font-heading text-4xl font-bold italic text-white sm:text-5xl drop-shadow-lg">
                Más que autos, <span className="text-primary text-shadow-glow">Obras de Arte</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En LuxeDrive, redefinimos la experiencia de conducir. Nos dedicamos exclusivamente 
                a la comercialización de vehículos de alta gama que representan la cúspide 
                del diseño y la tecnología automotriz.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra propuesta de valor se basa en la exclusividad y la personalización. 
                Cada vehículo que entregamos es una declaración de principios, seleccionado 
                meticulosamente para satisfacer los estándares más exigentes de nuestros clientes.
              </p>
              <div className="pt-4 space-y-8">
                <div className="h-1 w-24 bg-primary shadow-[0_0_10px_#9b080d]"></div>
                <Button asChild size="lg" className="rounded-none bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                  <Link href="#contact">Agenda tu Cita Hoy</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}