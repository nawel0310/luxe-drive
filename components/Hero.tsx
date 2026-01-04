"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { FadeIn } from "./FadeIn";

const heroImages = [
  "/images/car_001.jpg",
  "/images/car_002.jpg",
  "/images/car_003.jpg"
];

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="absolute inset-0 h-full w-full [&_[data-slot=carousel-content]]:h-full"
      >
        <CarouselContent className="h-full ml-0">
          {heroImages.map((src, index) => (
            <CarouselItem key={index} className="h-full pl-0 relative">
              <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${src}')` }}
              >
                <div className="absolute inset-0 bg-black/70" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
        <FadeIn direction="down">
             <h1 className="mb-6 font-heading text-5xl font-bold italic leading-tight tracking-tight text-white sm:text-7xl md:text-8xl drop-shadow-2xl">
              Excelencia en <span className="text-primary">Movimiento</span>
            </h1>
        </FadeIn>
       
        <FadeIn delay={0.2}>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 sm:text-xl font-light shadow-black drop-shadow-md">
            Descubre la fusión perfecta entre ingeniería de vanguardia y lujo absoluto. 
            Vehículos diseñados para quienes no aceptan compromisos.
            </p>
        </FadeIn>

        <FadeIn delay={0.4}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-none bg-primary px-8 py-6 text-lg font-semibold hover:bg-primary/90 shadow-[0_0_15px_rgba(155,8,13,0.5)] transition-all hover:shadow-[0_0_25px_rgba(155,8,13,0.8)]">
                <Link href="#contact">Solicitar Asesoría</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none border-white bg-transparent px-8 py-6 text-lg font-semibold text-white hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Link href="#models">Ver Modelos</Link>
            </Button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}