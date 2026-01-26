import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-12 text-center md:flex-row md:text-left">
            
            {/* Massive Logo */}
            <div className="flex-1">
                 <Link href="/" className="font-heading text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-8xl hover:text-zinc-300 transition-colors">
                    LUXE<span className="text-primary">DRIVE</span>
                </Link>
            </div>

            {/* Links */}
            <div className="flex gap-12">
                <div className="flex flex-col gap-4">
                     <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Explorar</span>
                     <Link href="#models" className="text-white hover:text-primary transition-colors">Colección</Link>
                     <Link href="#about" className="text-white hover:text-primary transition-colors">Herencia</Link>
                     <Link href="#testimonials" className="text-white hover:text-primary transition-colors">Relatos</Link>
                </div>
                <div className="flex flex-col gap-4">
                     <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Legal</span>
                     <Link href="#" className="text-zinc-400 hover:text-white transition-colors">Privacidad</Link>
                     <Link href="#" className="text-zinc-400 hover:text-white transition-colors">Términos</Link>
                </div>
            </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
            <p className="text-xs text-zinc-600">
                &copy; {new Date().getFullYear()} LuxeDrive Automotive Group.
            </p>
            <div className="flex gap-6">
                {/* Social placeholders */}
                <div className="h-2 w-2 rounded-full bg-zinc-800" />
                <div className="h-2 w-2 rounded-full bg-zinc-800" />
                <div className="h-2 w-2 rounded-full bg-zinc-800" />
            </div>
        </div>
      </div>
    </footer>
  );
}
