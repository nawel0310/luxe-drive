import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import WhatsAppButton from "@/components/WhatsAppButton"

const Models = dynamic(() => import("@/components/Models").then(mod => mod.Models));
const Testimonials = dynamic(() => import("@/components/Testimonials").then(mod => mod.Testimonials));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs").then(mod => mod.WhyChooseUs));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Models />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}