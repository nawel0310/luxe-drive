"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`mx-auto flex items-center justify-between rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-6 py-3 transition-all duration-500 ${
              isScrolled ? "max-w-5xl" : "max-w-7xl"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="transition-opacity hover:opacity-80">
              <Image src="/images/luxe-drive-logo.webp" alt="LuxeDrive" width={899} height={315} style={{ height: '40px', width: 'auto' }} />
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-8 md:flex">
              {["Modelos", "Experiencia", "Testimonios"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-primary hover:text-white"
              >
                <span className="relative z-10">Contactar</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="text-white md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-8 top-8 text-white/50 hover:text-white"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              {["Modelos", "Experiencia", "Testimonios", "Contactar"].map(
                (item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-heading text-4xl font-light text-white transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
