import Link from 'next/link';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-heading italic text-2xl font-bold tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(155,8,13,0.5)]">
          LUXEDRIVE
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_rgba(155,8,13,0.5)]">
            Nosotros
          </Link>
          <Link href="#models" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_rgba(155,8,13,0.5)]">
            Modelos
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_rgba(155,8,13,0.5)]">
            Por qué elegirnos
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:drop-shadow-[0_0_5px_rgba(155,8,13,0.5)]">
            Testimonios
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 shadow-[0_0_10px_rgba(155,8,13,0.4)] transition-all hover:shadow-[0_0_15px_rgba(155,8,13,0.7)]">
            <Link href="#contact">Contactar</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}