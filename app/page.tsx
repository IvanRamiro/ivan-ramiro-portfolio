import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";
import TechMarquee from "@/components/sections/TechMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
