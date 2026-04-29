import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/Cta";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Process />
      <Products />
      <Clients />
      <Testimonials />
      <CTA />
    </main>
  );
}
