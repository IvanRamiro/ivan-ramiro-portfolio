import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
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