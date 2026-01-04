import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <Link href="/" className="font-heading italic text-2xl font-bold tracking-tighter text-white mb-6 block drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              LUXEDRIVE
            </Link>
            <p className="text-zinc-400 mb-6 max-w-xs">
              Elevando el estándar de la excelencia automotriz. Tu próximo vehículo de ensueño te espera.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-primary transition-colors hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6 italic">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#models" className="text-zinc-400 hover:text-primary transition-colors">Modelos</Link></li>
              <li><Link href="#about" className="text-zinc-400 hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link href="#testimonials" className="text-zinc-400 hover:text-primary transition-colors">Testimonios</Link></li>
              <li><Link href="#contact" className="text-zinc-400 hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6 italic">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-zinc-400 hover:text-primary transition-colors">Cookies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-6 italic">Newsletter</h4>
            <p className="text-zinc-400 mb-4 text-sm">Suscríbete para recibir noticias exclusivas.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-zinc-900 border-zinc-800 text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary rounded-none placeholder:text-zinc-600"
              />
              <button className="bg-primary text-white px-4 py-2 font-semibold hover:bg-primary/90 transition-colors rounded-none shadow-[0_0_10px_rgba(155,8,13,0.3)]">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 text-center text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} LuxeDrive. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}