import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { BackgroundGlow } from "@/components/layout/BackgroundGlow";
import { PersonJsonLd } from "@/components/layout/PersonJsonLd";

export default function HomePage() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <BackgroundGlow />
      <Header />
      <main id="main" className="relative">
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <PersonJsonLd />
    </div>
  );
}
