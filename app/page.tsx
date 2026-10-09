import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
    </>
  );
}
